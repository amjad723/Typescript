class CreateAccount{
    makeEmail(user)
    {
        return `${user}@Test.com`
    }
}

class Users extends CreateAccount{

    addUser(user){
        return `${user} added as an user`
    }
    deleteUser(){}
}

const U1 = new Users();
console.log(U1.addUser("amjad"))
console.log(U1.makeEmail("amjad"))


class Employees extends CreateAccount{
    addEmployee(emp)
    {
        return `${emp} is added as an employee`
    }
}
const E1=new Employees();
console.log(E1.addEmployee("khan"))
console.log(E1.makeEmail("khan"))
