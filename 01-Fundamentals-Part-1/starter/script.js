// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(myFirstJob);

// const country = "United Kingdom";
// const continent = "Europe";
// let population = "66";


// console.log(continent);

// const isIsland = "true";
// const language = "English";
// console.log(isIsland);
// console.log(population);
// console.log(language);
// console.log(country);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log (ageJonas, ageSarah);
// console.log (ageJonas *2, ageJonas /2);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log (firstName + " " + lastName);


// // assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x *4 = 100
// x++; x; //= x + 1 = 101
// x--;
// x--; // =99
// console.log(x);

// // comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now = 1991 > now = 2018);


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now = 1991 > now = 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y  10 x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// const age = 15;

// if(age >= 18) {
//     console.log("sarah can start driving license")
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log("I am  " + 23 + " years old ")
// console.log("23"-"10"-3); 
// console.log("23"*"2");

// let n = "1" + 1; //1 plus 1 plus operator converts into a string = 11
// n = n - 1 //takes away 1 from the previous operation so it becomes 10
// console.log(n)// ans = 10

//5 Falsy values: 0, "", undefined, null, NaN

// console.log(Boolean(0));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean("Jonas"));//true
// console.log(Boolean({}));//true
// console.log(Boolean(""));//falsy

// const money = 100;
// if (money){
//     console.log("don't spend it all ;)");
// }else {
//         console.log("you should get a job!");
// }

// let height = 0;
// if(height){
//     console.log("YAY! Height is defined");
// }else {
//     console.log("height is undefined");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult (strict)");//no type coercion

// if (age == 18) console.log("You just became an adult(loose)")//type coercion avoid often for values

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite)
// console.log(typeof favourite);

// if (favourite === 23){ //22 === 23 -> FALSE
// console.log("Cool! 23 is an amazng number!")
// }else if (favourite === 7){
// console.log("7 is also a cool number")
// }else if(favourite === 9){
// console.log("9 is also a cool number")
// }else {
// console.log("Number is not 23 or 7")
// }
 
// if (favourite !== 23) console.log("Why not 23");

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);//AND
// console.log(hasDriversLicense || hasGoodVision);//OR
// console.log(!hasDriversLicense);//NOT

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(hasDriversLicense && hasGoodVision) {
// //     console.log("Sarah is able to drive!")
// // }else {
// //     console.log("Someone else should drive...");
// // }

// const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision  && !isTired) {
//     console.log("Sarah is able to drive!")
// }else {
//     console.log("Someone else should drive...");
// }

