export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return 0;
  }

  return studentsList.reduce((prevVal, curVal, i) => {
    if (i === 1) {
      return prevVal.id + curVal.id;
    }
    return prevVal + curVal.id;
  });
}
