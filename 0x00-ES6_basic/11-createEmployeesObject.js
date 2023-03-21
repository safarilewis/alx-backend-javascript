export default function createEmployeesObject(departmentName, employees) {
  let obj = departmentName;
  obj = { [departmentName]: employees };
  return obj;
}
