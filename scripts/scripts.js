let name = "Sabrina";
let age = 32;
let birthday = "July 21st";
let detroitGC = true;
let lifeEvents = [
  "I adopted my dog, Oakley.",
  "I have a Bachelors degree from Grand Valley State University.",
  "I lived in Grand Rapids for 13 years.",
  "I moved to Ferndale 8 months ago."
];

if (detroitGC === true) {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Detroit, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let randomNumber = Math.floor(Math.random() * 10) +1;
let counter = 0;
while (true) {
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !==5`);
    randomNumber = Math.floor(Math.random() * 10) + 1;
    counter++;
  } else {
    counter++;
    console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
    break;
  }
}
