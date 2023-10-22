class school {
  name: string;
  students: student[] = [];
  teacher: teacher[] = [];

  addStudent(stdObj: student) {
    this.students.push(stdObj);
  }

  addteacher(tecObj: teacher) {
    this.teacher.push(tecObj);
  }

  constructor(name: string) {
    this.name = name;
  }
}
class student {
  name: string;
  age: number;
  schoolName: string;

  constructor(name: string, age: number, schoolName: string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
  }
}

class teacher extends student {}

let school1 = new school("Alpha");
let school2 = new school("Nooby");

let S1 = new student("bilal", 69, school1.name);
let S2 = new student("hamza", 106, school2.name);

let t1 = new teacher("Anas", 28, school2.name);
let t2 = new teacher("Ali", 28, school1.name);

school1.addStudent(S1);
school2.addStudent(S2);

school1.addteacher(t1);
school2.addteacher(t2);

console.log(school1);
console.log(school2);
