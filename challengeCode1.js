/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/


let marksWeight = 95;
console.log(`Mark's Weight is ${marksWeight} Kilograms`);

let marksHeight = 1.88;
console.log(`Mark's Height is ${marksHeight} meters`);

let johnsWeight = 85;
console.log(`John's Weight is ${johnsWeight} Kilograms`);

let johnsHeight = 1.76;
console.log(`John's Height is ${johnsHeight} meters\n \n`);

let marksBMI = (marksWeight / (marksHeight * marksHeight));
console.log(`The Mark's BMI is ${marksBMI}`);

let johnsBMI = (johnsWeight / (johnsHeight * johnsHeight));
console.log(`The John's BMI is ${johnsBMI}\n`);

let markHigherBMI = (marksBMI > johnsBMI);
console.log(markHigherBMI);

if (markHigherBMI == true) {
    console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}`)
} else {
    console.log(`John's BMI ${johnsBMI} is higher than Mark's BMI ${marksBMI}`)
}
;