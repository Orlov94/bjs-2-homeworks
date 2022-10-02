function Student(name, gender, age) {
    this.name;
    this.gender;
    this.age;
}

let student = new Student ("Владимир", "мужской", 21 )
let student1 = new Student ("Анна", "женский", 19 )
let student2 = new Student ("Екатерина", "женсикй", 22 )

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){
    this.marks = mark;
  }else{
    Student.prototype.addMarks = function (...mark){
    }
  }
}