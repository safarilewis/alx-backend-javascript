import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  if (filePath) {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'))
      } else if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const groups = {};
        const fieldNames = fileLines[0].split(',');
        const studentPropNames = fieldNames
          .slice(0, fieldNames.length - 1);
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',')
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1)
          const field = studentRecord[studentRecord.lenght - 1]
          if (!Object.keys(studentGroups).includes(field)) {
            groups[field] = []
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          groups[field].push(Object.fromEntries(studentEntries))
        }
        resolve(groups);
      }
    })
  }
})
export default readDatabase