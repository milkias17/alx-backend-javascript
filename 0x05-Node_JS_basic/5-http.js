const http = require('http');
const { readFileSync, existsSync } = require('fs');

const dbName = process.argv[2];

function getStudentsString(path) {
  if (!existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const content = readFileSync(path, 'utf8').trim().split('\n');
  let finalString = 'This is the list of our students\n';
  finalString += `Number of students: ${content.length - 1}\n`;
  const countHolder = new Map();
  for (const row of content.splice(1)) {
    const tmp = row.split(',');
    const fieldName = tmp[tmp.length - 1];
    const studentName = tmp.splice(0, 1).join(' ');

    if (countHolder.has(fieldName)) {
      countHolder.get(fieldName).push(studentName);
    } else {
      countHolder.set(fieldName, [studentName]);
    }
  }

  for (const [fieldName, students] of countHolder) {
    finalString += `Number of students in ${fieldName}: ${
      students.length
    }. List: ${students.join(', ')}\n`;
  }
  finalString = finalString.slice(0, finalString.length - 1);
  return finalString;
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.end(getStudentsString(dbName));
      break;
    default:
      break;
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;
