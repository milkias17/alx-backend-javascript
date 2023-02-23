const { readFileSync, existsSync } = require('fs');

function countStudents(path) {
  if (!existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const content = readFileSync(path, 'utf8').trim().split('\n');
  console.log(`Number of students: ${content.length - 1}`);
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
    console.log(`Number of students in ${fieldName}: ${students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
