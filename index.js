function scuberGreetingForFeet(distance){
  let response;
  if (distance <= 400) { 
    response = 'This one is on me!';
    }
  else if (distance > 2500) {
    response = 'No can do.';
  }
  else if (distance > 2000) {
    response = 'I will gladly take your thirty bucks.';
  }
    return response;
}

function ternaryCheckCity(city){
  const driverResponse = (city === 'NYC') ? "Ok, sounds good." : "No go."
  return driverResponse;

}

function switchOnCharmFromTip(tip){
  // switch statement to return a response based on generosity of tip.
  let driverResponse;
  switch (tip) {
  case 'generous':
        driverResponse = 'Thank you so much.';
        break;
  case 'not as generous':
        driverResponse = 'Thank you.';
        break;
  default:
        driverResponse = 'Bye.';
  }
  return driverResponse;
}