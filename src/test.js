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

student1.study();  
student1.study();  
<<<<<<< HEAD

<<<<<<< HEAD
student1.report();  
student2.report(); 
=======
student1.report();  //asa
student2.report();  //ambot
>>>>>>> newbranch
=======



>>>>>>> hellopo
