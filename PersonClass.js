class Person {
    constructor(name, age, locaton, course, institution) {
        this.name = name;
        this.age = age;
        this.locaton = locaton;
        this.course = course;
        this.institution = institution;
    }
    
    getDetails(){
        console.log(`NAME : ${this.name}\nAGE : ${this.age}\nLOCATION : ${this.locaton}\nCOURSE : ${this.course}\nINSTITUTION : ${this.institution}\n`);

    }
    
    getSyllabus(){
        if(this.course === "FULL STACK DEVELOPER"){
            console.log("Syllabus :\nHTML\nCSS\nJvascript\nNodeJS\nBootstrap\nMongoDB\n")
        }
        else{
            console.log("Syllabus :\nPython\nMachine Learning\nArtficial Intelligence\n")
        }
    }
}

const person1 = new Person("AJITH",28,"CHENNAI","FULL STACK DEVELOPER","GUVI");
const person2 = new Person("KUMAR",27,"CHENNAI","DATA SCIENCE","GUVI");

person1.getDetails();
person1.getSyllabus();
person2.getDetails();
person2.getSyllabus();