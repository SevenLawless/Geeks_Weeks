// ===== Exercise 1

const person1 = {
    fullName: "Hitler",
    mass: 85,
    height: 160,
    calculateBMI: function() {
        return this.mass / ((this.height / 100) ** 2);
    }
};

const person2 = {
    fullName: "L3arbi",
    mass: 70,
    height: 180,
    calculateBMI: function() {
        return this.mass / ((this.height / 100) ** 2);
    }
};

function compareBMI(person1, person2) {
    const BMI1 = person1.calculateBMI();
    const BMI2 = person2.calculateBMI();
    if (BMI1 > BMI2) {
        console.log(`${person1.fullName} has a higher BMI : ${BMI1}`);
    } else if (BMI2 > BMI1) {
        console.log(`${person2.fullName} has a higher BMI : ${BMI2}`);
    } else {
        console.log(`Both have the same BMI : ${BMI1}`);
    }
}

compareBMI(person1, person2);


// ===== Exercise 2

let grades = [80, 77, 88, 70, 12];

function findAvg(gradesList) {
    let sum = 0;
    for (let grade of gradesList) {
        sum += grade;
    }
    let average = sum / gradesList.length;
    console.log(`Average grade: ${average}`);
    checkPassFail(average);
}

function checkPassFail(x) {
    if (x >= 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

findAvg(grades);