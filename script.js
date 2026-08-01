function opposite(boolean) {
  return !boolean
}
console.log(opposite(true));


function greaterThan5(num1, num2) {
  return num1>num2
}
console.log(greaterThan5(1, 2));

function allGreaterThan5(num1, num2) {
  return num1>5 && num2>5
}
console.log(allGreaterThan5(1, 2));
console.log(allGreaterThan5(8, 6));

function largerThan5AndLe0(number) {
 return number>5 && number<20
}
console.log(largerThan5AndLe0(11));

function not6AndLessThan10(number) {
  return  number!==6 && number<10
}
console.log(not6AndLessThan10(6));
console.log(not6AndLessThan10(5));

function largerThan3AndLessThan18(num1, num2, num3) {
  return num1>3 && num1<18 && num2>3 && num2<18 && num3>3 && num3<18
}
console.log(largerThan3AndLessThan18(5, 8, 17) );
console.log(largerThan3AndLessThan18(5, 8, 18) );
    
function cloudyAndRainy(string1, string2) {
  return string1==="cloudy" && string2==="rainy";
}
console.log(cloudyAndRainy("cloudy", "rainy")  );

function weatherActivities(weather) {
  if (weather === "rainy") {
    return "chocolat chaud"
  } 
  else if (weather === "sunny") {
    return "course a pied"
  }
  else if (weather === "windy") {
    return "lire un livre"
  } 
  else {
    return "aller au cafe"
  }
}
console.log( weatherActivities( "sunny") );


function evenAndGreaterThan7(number) {
  return number%2===0 && number>7
}
console.log(evenAndGreaterThan7(20) );

function areValidCredentials(name, password) {
  return name>3 && password>8
}
console.log(areValidCredentials("manar", "efghvfjjnb"));


function or(statement1, statement2) {
  return !(!statement1 && !statement2)
}
console.log(or(true, false));


function and(statement1, statement2) {
  return !(!statement1 || !statement2)
}
console.log(and(true, false));


function shirtWidth(width) {
  if (width>= 20 && width<30) {
    return "You should select a size S"
  }
  else if (width >= 30 && width < 40) {
    return "You should select a size M"
  }
  else if (width >= 40 && width < 50) {
    return "You should select a size L"
  }
  else {
    return "You should select a different shirt"
  }
}
console.log(shirtWidth(25) );


function player1Choice(choice) {
  if (choice === "rock") {
    return "Player 1 chose rock"
  } 
  else if (choice === "paper") {
    return "Player 1 chose paper"
  }
  else if (choice === "scissors") {
    return "Player 1 chose scissors"
  } 
  else {
    return "Player 1 has chosen poorly!"
  }
}
console.log(player1Choice("rock"));






function checkArea(area) {
  return area>48 && area<100
}
console.log(checkArea(50));


function checkMultiply(num1, num2) {
  return num1*num2> 50  &&  num1*num2< 150
}
console.log(heckMultiply(10, 2));
console.log(heckMultiply(10, 6));