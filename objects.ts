type objtype={name:string,age:number,email:string }

const person:objtype={
    name:'amjad',
    age:27,
    email:'abc@test.com'
}
const person2:objtype={
    name:'khan',
    age:30,
    email:'abcef@test.com'
}
console.log(person.name)
console.log(person2.name)
////////arrays
let arr:string[]=['java','node','php'];
console.warn(arr)
////////enum
enum Role{
        ADMIN,MANAGER,READ_ONLY
}
console.log(Role)

