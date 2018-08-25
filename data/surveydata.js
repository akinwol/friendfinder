
var surveyData = [
    // {
    //     name:"Test Name 1",
    //     photoLink:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
    //     scores: [1,1,1,1,1,1]
    // },
    // {
    //     name:"Test Name 2",
    //     photoLink:"https://goo.gl/UCrwt5",
    //     scores: [2,2,2,2,2,2]
    // },
    // {
    //     name:"Test Name 3",
    //     photoLink: "https://goo.gl/VCC4dJ",
    //     scores: [3,3,3,3,3,3]
    // },
    // {
    //     name:"Test Name 4",
    //     photoLink: "https://goo.gl/uCk8zk",
    //     scores: [4,4,4,4,4,4]
    // }
  
];

var match = []

var newPost =   {
    name:"Test Name 3",
    scores: [2,2,7,10]
}


// module.exports = surveyData
module.exports = {
    data:surveyData,
    pick: match}


var test1 = [3,5,6,9];
var test2 = [4,1,8,11];
var diff =[]
var allDiff = []

// for (let i = 0; i < test1.length; i++) {
// // math.abs returns the absolute value of a number 
// diff.push(Math.abs(test1[i]-test2[i]));
    
// };
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// var totalDiff = diff.reduce(reducer)
// console.log(diff)
// console.log(totalDiff)

function compare(current, arr){
// initialize a variable to store the comparison between the submitted and the current index
    var diff = [];
// loop through the length of the new submission 
    for (let i = 0; i < current.length; i++) {
        // math.abs returns the absolute value of a number 
        // push the absolute difference to the diff array 
        diff.push(Math.abs(current[i]-arr[i]));     
        };
// add all the values of the difference array and store in a variable
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var totalDiff = diff.reduce(reducer)
        // console.log(diff)
        // console.log(totalDiff)
// push the total amount of the difference into an all difference array.
// all diff array will store the totals of each existing score 
        allDiff.push(totalDiff)
};

// loop through existing friends survey data
surveyData.forEach(function(element){
    // console.log(element.score)
// run the function for each index in the survey data 
// function will store all the total diff into the all diff array 
    compare(newPost.scores, element.scores)
});

// console.log(allDiff)

// this will give you the index of the lowest number
var indexOfMin = allDiff.indexOf(Math.min.apply(Math, allDiff))
// console.log(indexOfMin)
// console.log("Name of match: ", surveyData[indexOfMin].name)
