var money = parseInt(prompt("How much money do you have today?"));
var today = prompt("What day is it today?");

//next, no need to ask the day, just compute it.

if ( money >= 100 && today.toLowerCase() === 'friday' ) {
  document.write("<h2>Time to treat a friend to the theater.<h2>");    
} else if ( money >= 50 && today.toLowerCase() === 'friday' ) {
  document.write("<h2>Time for a movie and dinner</h2>");    
} else if ( money > 10 && today.toLowerCase() === 'friday' ) {
  document.write("<h2>Time for a movie</h2>");   
} else if ( today.toLowerCase() !== 'friday' ) {
  document.write("<h2>It's Friday, but I don't have enough money to go out</h2>");   
} else {
  document.write("<h2>This isn't Friday. I need to stay home.<h2>");
}