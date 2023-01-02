export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  return studentsList.filter((val) => val.location === city);
}
