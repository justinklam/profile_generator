const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  console.log(`So that's your name, ${name}`);
  rl.question(`What's an activity you like doing? `, (activity) => {
    console.log(`That's a cool activity, ${activity}.`);
    rl.question(`What do you listen to while doing that? `, (music) => {
      console.log(`Solid choice ${music}!`);
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
        console.log(`Nothing beats a good ${meal}!`);
        rl.question(`What's your favourite thing to eat for that meal `, (food) => {
          console.log(`That's an awesome ${food}!`);
        rl.question(`Which sport is your absolute favourite? `, (sport) => {
          console.log(`That's an awesome ${sport}!`);
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
            console.log(`That's an awesome ${superpower}!`);
            setTimeout(() => {
              console.log(`${name} likes to ${activity} and listen to ${music}. Their favourite meal is ${meal}, and they like to eat ${food}. They like ${sport}. Their superower is ${superpower}!`)
            }, 1000);

            rl.close();
          
          });
        });
      });
    });
  });
});
});

// const question2 = function() {
//   rl.question(`What's an activity you like doing? `, (activity) => {
//     console.log(`That's a cool activity, ${activity}.`);
//     question3();
//   })
// };

// const question3 = function() {
//   rl.question(`What do you listen to while doing that? `, (music) => {
//     console.log(`Solid choice ${music}!`);
//     question(4);
//   })
// };

// const question4 = function() {
//   rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
//     console.log(`Nothing beats a good ${meal}!`);
//     question(5);
//   })
// };

// const question5 = function() {
//   rl.question(`What's your favourite thing to eat for that meal `, (food) => {
//     console.log(`That's an awesome ${food}!`);
//     question(4);
//   })
// };

// const question6 = function() {
//   rl.question(`Which sport is your absolute favourite? `, (sport) => {
//     console.log(`That's an awesome ${sport}!`);
//   question(7);
//   })
// };

// const question7 = function() {
//   rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
//     console.log(`That's an awesome ${superpower}!`);
//     setTimeout(() => {
//       console.log(`${name} likes to ${activity} and listen to ${music}. Their favourite meal is ${meal}. They like ${sport}. Their superower is ${superpower}!`)
//     }, 2500);
//     rl.close();
//   })
// };