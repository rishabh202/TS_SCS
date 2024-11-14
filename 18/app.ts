// Abstract Classes and methods 
// for ex payment is an abstract entity, while payment via gpay/phonepay/bharatpe etc further clarity.
// like tree is abstract while, mango tree or banana tree is the implementation of that abstract class

class Payment{
   constructor(protected amount: number, protected account: number){}
     isPaymentValid(amount: number){
        return this.amount > 0;
     }
   
}

// The above class is just the base class. while the below one is the actual class extending the abstract class.

class Paytm extends Payment{

}

//

class CookingEssentials{
    constructor(protected gas: string, public gasName: string){

    }
}

// The above is the base or essential class. We wont make instances with the base class, instead we will extend the base class and uska fir instances bana skte.

class sabji extends CookingEssentials{

}

class cake extends CookingEssentials{
    
}



