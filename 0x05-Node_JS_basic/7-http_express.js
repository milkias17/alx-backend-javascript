const express = require('express');
const { readFileSync, existsSync } = require('fs');

function getStudentsString(path) {
  if (!existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const content = readFileSync(path, 'utf8').trim().split('\n');
  let finalString = `Number of students: ${content.length - 1}\n`;
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

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const intro = 'This is the list of our students\n';
  try {
    const finalString = getStudentsString(process.argv[2]);
    res.send(`${intro}${finalString}`);
  } catch (error) {
    res.send(`${intro}${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
