let person={
    firstName:"Anil",
    lastName: "Katta",
    city:"Nellore",
    state:"Andhra Pradesh",
    mobile:"7995454746",

 fullName: function(){
    return this.firstName+" "+this.lastName
    
}
}
console.log("FirstName:", person.firstName);
console.log("Fullname:",person.fullName());


