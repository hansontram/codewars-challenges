Your friend invites you out to a cool floating pontoon around 1km off the beach. 
Among other things, the pontoon has a huge slide that drops you out right into the ocean,
a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness 
under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you 
if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".



//Test:
describe("Example tests",() =>{
Test.assertEquals(shark(12, 50, 4, 8, true), "Alive!");
Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!");
Test.assertEquals(shark(24, 0, 4, 8, true), "Shark Bait!");
});


//solution 1

const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    
    return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
  }
  
  
  
  
  //solution 2
  
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    const sharkActualSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
    
    const sharkTime = sharkDistance / sharkActualSpeed;
    const humanTime = pontoonDistance / youSpeed;
    const sharkWillEatYou = sharkTime <= humanTime;
    
    return sharkWillEatYou ? 'Shark Bait!' : 'Alive!';
  }
  
  
  //solution 3 
  
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return sharkDistance/(dolphin?sharkSpeed/2:sharkSpeed) > pontoonDistance/youSpeed ? "Alive!":"Shark Bait!";
  }
  
  //solution 4
  
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    var shark = sharkDistance / sharkSpeed;
    var human = pontoonDistance / youSpeed;
    if (dolphin == true) {
        return shark * 2 > human ? 'Alive!' : 'Shark Bait!';
    } else {
        return shark > human ? 'Alive!' : 'Shark Bait!';
    }
  }