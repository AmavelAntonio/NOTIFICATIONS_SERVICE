

interface GetSomething<T> {																
    getValue: () => T
  }
  
 export class SomethingClass <K> implements GetSomething<K> {
    constructor(private value: K) {}
    
    getValue (): K {
      return this.value
    }
  }
  

const getMyName = new SomethingClass<String>("António");
console.log(getMyName.getValue())  //António
const getNumber = new SomethingClass<Number>(12); 
console.log(getNumber.getValue())  //12