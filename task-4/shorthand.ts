class Users{
    
    constructor(public name,public age,public email)
    {
      
    }
    displayvalue()
    {
        console.log(this.name,this.age,this.email);
    }

}
const u1 =new Users('amjad',25,'abc@Test.com')
//console.log(u1)
u1.displayvalue();