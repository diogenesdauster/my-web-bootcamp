const grades = [7.9, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

let downGrades = [];
for (let i in grades){
    if(grades[i] < 7){
        downGrades.push(grades[i]);
    }
}

console.log(downGrades);


const downGrades2 = grades.filter(function (grade){
    return grade < 7
});
console.log(downGrades2);

const downGrades3 = grades.filter(grade => grade < 7);
console.log(downGrades3);