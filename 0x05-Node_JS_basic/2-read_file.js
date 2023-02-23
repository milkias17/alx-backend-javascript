const { readFileSync, existsSync } = require('fs');

function countStudents(path) {
  if (!existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const content = readFileSync(path, "utf8").trim().split("\n");
  console.log(`Number of students: ${content.length - 1}`)
  const countHolder = new Map();
  for (row of content.splice(1)) {
    const tmp = row.split(",");
    const fieldName = tmp[tmp.length - 1];
    const studentName = tmp.splice(2).join(" ");
    
    if (countHolder.has(fieldName)) {
      countHolder.get(fieldName).push(studentName);
    } else {
      countHolder.set(fieldName, [studentName])
    }
  }

  for (let [fieldName, students] of countHolder) {
    
  }
}

countStudents("database.csv")
