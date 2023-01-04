export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const firstStudent: Student = {
  firstName: "Bob",
  lastName: "Vance",
  age: 45,
  location: "Scranton",
}

const secondStudent: Student = {
  firstName: "Jim",
  lastName: "Halbert",
  age: 30,
  location: "Philadelphia"
}

const studentsList: Student[] = [firstStudent, secondStudent]

console.log("FirstName\t\tLocation");
for (let i = 0; i < studentsList.length; i++) {
  console.log(studentsList[i].firstName + "\t\t" + studentsList[i].location);
}
