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
  this.marks = [mark];
}else{
  this.marks.push(mark);
  }
}
Student.prototype.addMarks = function (...mark){
  if(this.marks ===undefined){
    this.marks = [...mark];
  } else{
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function (){
  let avgGrades = 0;
  for (var i = 0; i < this.marks; i++){
    avgGrades = avgGrades + this.marks.length;
  }
  return avgGrades / this.marks;

}

Student.prototype.exclude = function (reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

