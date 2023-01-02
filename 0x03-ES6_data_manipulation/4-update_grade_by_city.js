export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const studentsInCity = studentsList.filter((val) => val.location === city);
  return studentsInCity.map((student) => {
    const studentGrade = newGrades.filter((val) => val.studentId === student.id);
    if (studentGrade.length === 0) {
      return {
        grade: 'N/A',
        ...student,
      };
    }

    return {
      grade: studentGrade[studentGrade.length - 1].grade,
      ...student,
    };
  });
}
