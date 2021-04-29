const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    print_it : function() {
        return this.firstName +" "+ this.lastName +" is a student in class " + this.class
    }
    }
  ;
console.log(student.print_it())

// first and last name, age, job, city
// John Smith is a 41 year old engineer living in France

const person = { 
    firstName: "John", 
    lastName: "Smith", 
    age: 41,
    job:"engineer",
    country:"France",
    print_it : function() {
        return this.firstName+" "+ this.lastName+" is a " +this.age+ " year old "+ this.job+" living in " + this.country
    },
    count_it:function() {
        let size = 0;
        for (key in person) {
            size++;
        }
        return size;
    }
}
  ;
console.log(person.print_it())
console.log(person.count_it())