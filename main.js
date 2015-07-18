var wyIndex = 0;
var survey = [
    {
         text: "政府派錢六千蚊，你會搜尋廉價機票，盤算怎麼花"
        ,options:
            [["很同意", 5]
            ,["較同意", 3]
            ,["較反對", 1]
            ,["很反對", 1]
            ]
            ,chosen: null

    },
    {
         text: "公司需要你加班並且給額外人工，不過你更樂意參加約好的聚會"
        ,options:
            [["很同意", 5]
            ,["較同意", 3]
            ,["較反對", 1]
            ,["很反對", 1]
            ]
        ,chosen: null
    }
];

function showQuestion(question) {
    var container = document.getElementById("container");
    var p = document.createElement('p');
    var textNode = document.createTextNode(question.text);
    p.appendChild(textNode);
    container.appendChild(p);

    for (var i=0;i<question.options.length;i++) {
        var option = question.options[i];
        var optionText = option[0];
        var optionWeight = option[1];

        var button = document.createElement('button');
        textNode = document.createTextNode(optionText);
        button.appendChild(textNode);
        container.appendChild(button);

        button.addEventListener("click", function(event){
        });
    }
}

// Display the first question
question = survey[0];
showQuestion(question);
br = document.createElement('br');
textNode = document.createTextNode(wyIndex.toString());
document.body.appendChild(br);
document.body.appendChild(textNode);
