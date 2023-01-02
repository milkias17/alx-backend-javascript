export default function getListStudentIds(studentslist) {
  if (!Array.isArray(studentslist)) {
    return [];
  }

  return studentslist.map((val) => val.id);
}
