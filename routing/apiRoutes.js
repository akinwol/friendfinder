
var surveyData = require("../data/surveydata");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(surveyData.data);
    });
    app.post("/api/friends", function (req, res) {
        // see survey data for explanation
        var allDiff = []
        function compare(current, arr) {
            var diff = [];
            for (let i = 0; i < current.length; i++) {
                diff.push(Math.abs(current[i] - arr[i]));
            };
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var totalDiff = diff.reduce(reducer)
            allDiff.push(totalDiff)
        };

        surveyData.data.forEach(function (element) {
            compare(req.body.scores, element.scores)
        });

        // console.log(allDiff)

        // this will give you the index of the lowest number
        var indexOfMin = allDiff.indexOf(Math.min.apply(Math, allDiff))
        // console.log(indexOfMin)
        console.log("NAME OF MATCH: ", surveyData.data[indexOfMin].name)
        surveyData.pick = [surveyData.data[indexOfMin].name, surveyData.data[indexOfMin].photoLink];
        surveyData.data.push(req.body);
    });
    app.get("/api/match", function(req, res){
        res.send(surveyData.pick)
    });
};


console.log(surveyData.data)