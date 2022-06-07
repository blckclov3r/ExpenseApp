let Student = function(name) {
	this.name = name;
	this.hp = 10;
	this.int = 10;
}

Student.prototype.study = function(){
   console.log(this.name)
}

Student.prototype.report = function(){

}

let student1 = new Student('Marcus');
let student2 = new Student('John');

student1.study();  //decrease hp by 1 and increase int by 1
student1.study();  //decrease hp by 1 and increase int by 1

student1.report();  //have it log 'Marcus has hp of 8 and int of 12'
student2.report();  //have it log 'John has hp of 10 and int of 10'