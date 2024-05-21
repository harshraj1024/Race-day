let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true; // Change to false to test different scenarios
let runnerAge = 19; // Change the age to test different scenarios

if (runnerAge > 18 && isRegisteredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isRegisteredEarly) {
  console.log(`You are an adult and registered early. Your race number is ${raceNumber} and your race starts at 9:30 am.`);
} else if (runnerAge > 18 && !isRegisteredEarly) {
  console.log(`You are an adult and registered late. Your race number is ${raceNumber} and your race starts at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`You are a youth runner. Your race number is ${raceNumber} and your race starts at 12:30 pm.`);
} else {
  console.log("Please see the registration desk.");
}
