

// ex1 :
// predictions : here is what i think the output will be :     ____/''''\\____

const landscape = () => {
  let result = "";
  
  const flat = (x) => {
    for(let count = 0; count<x; count++){
     result = result + "_";
   }
  }
  
  const mountain = (x) => {
    result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
  }
  
  flat(4);
  mountain(4);
  flat(4);
  
  return result;
}
// ex2 :
//addTo(10) returns a function that needs the 2nd parameter then the answer is 13

// ex3 :
31

// ex4 :
17

// ex5 :
16
