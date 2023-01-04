export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attr: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }

}
