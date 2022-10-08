Training JS #5: Basic data types--Object

Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."



describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
      Test.assertSimilar(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
      Test.assertSimilar(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");
    });
  });



  //my solution 
  function animal(obj){
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs."
  }
  

  //other solutions

  function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }