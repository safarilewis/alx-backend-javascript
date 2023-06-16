const fs = require('fs');

const countStudents = (file) => {
  const dbFields = {};
  const students = {};
  const fileLength = 0;
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const fileLines = content.toString().split('\n');
    for (let x = 0; x < fileLines.length; x += 1) {
      if (fileLines[1]) {
        fileLength += 1;
        const dbField = fileLines[1].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, dbField[3])) {
          students[dbField[3]].push(dbField[0]);
        } else {
          students[dbField[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(dbFields, dbField[3])) {
          dbFields[dbField[3]] += 1;
        } else {
          dbFields[dbField[3]] = 1
        }
      }
    }
    const l = length - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(dbFields)) {
      if (key !== 'dbField') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
