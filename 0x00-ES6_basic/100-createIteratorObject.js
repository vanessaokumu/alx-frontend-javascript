export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  const employeeList = allEmployees.flat();

  return employeeList[Symbol.iterator]();
}
