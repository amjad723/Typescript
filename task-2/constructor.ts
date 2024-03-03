class Users{
    name="";
    age=0;
    email="";
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
    }
    displayvalue()
    {
        console.log(this.name,this.age,this.email);
    }

}
const u1 =new Users('amjad',25,'abc@Test.com')
//console.log(u1)
u1.displayvalue();