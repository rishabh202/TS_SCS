// Like see Math is a method, so how can we use any properties of Math without new.
// so by using static we can use it without any instance.
// Static members

class Hero{
   static version = 0.23;

   static getRandomNumber(){
    return Math.random();
   }
}

// so by using static we can directly use it. 
// Like we make it static so that we can use it without making its instance.

