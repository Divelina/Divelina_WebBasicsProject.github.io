/**
 * Created by Divelina on 7/3/2017.
 */

let answers = [];
let areAllFilled = true;

function SubmitQuestions(){

    areAllFilled = true;

    for (let i = 1; i <= 6; i++)
    {
        let questionIndex = i;
        let elementName = "question";
        elementName += questionIndex;
        SubmitAnswer(elementName, questionIndex);
    }

    if (areAllFilled) {
        let testResult = SelectResult(answers);
        ShowResult(testResult);
    }
    else
    {
        alert(`Моля стартирайте теста и изберете отговори на всички въпроси!`);
    }
}


function SubmitAnswer(name, index){

    let selectQuestion1 = document.getElementsByName(name);

    let choice = "";

    if (selectQuestion1[0].checked)
    {
        choice = selectQuestion1[0].value;
    }
    else if(selectQuestion1[1].checked)
    {
        choice = selectQuestion1[1].value;
    }
    else if(selectQuestion1[2].checked)
    {
        choice = selectQuestion1[2].value;
    }
    else if(selectQuestion1[3].checked)
    {
        choice = selectQuestion1[3].value;
    }
    else if(selectQuestion1[4].checked)
    {
        choice = selectQuestion1[4].value;
        selectQuestion1[4].disabled = true;
    }
    else
    {
        areAllFilled = false;
    }

    if (choice != "")
    {
        answers[index - 1] = choice;

        for (let i = 0; i < selectQuestion1.length; i++)
        {
            selectQuestion1[i].disabled = true;
        }
    }
}

function SelectResult(arr){

    var countAns = [0, 0, 0, 0, 0];

    for (let i = 0; i < arr.length; i++)
    {
        switch (arr[i])
        {
            case 'a': {
                countAns[0]++; break;
            }
            case 'b':{
                countAns[1]++; break;
            }
            case 'c':{
                countAns[2]++; break;
            }
            case 'd':{
                countAns[3]++; break;
            }
            case 'e':{
                countAns[4]++;break;
            }
        }
    }

    maxAnswer = 0;
    maxAnswerOccurence=0;

    for (let i = 0; i< countAns.length; i++)
    {
        if (countAns[i] > maxAnswer)
        {
            maxAnswer = countAns[i];
        }
    }

    for (let i = 0; i< countAns.length; i++)
    {
        if (countAns[i] == maxAnswer)
        {
            maxAnswerOccurence++;
        }
    }

    let outputText = "";

    if (maxAnswerOccurence > 1)
    {
        outputText = " Или страдате от раздвоение на личността, " +
            "или се опитвате да ни заблудите за истинската си същност. " +
            "“Под наблюдение” – ако може под наблюдение да е фон – нещо като печат. ";
    }
    else
    {
        let indexOfMax = countAns.indexOf(maxAnswer);

        switch (indexOfMax){
            case 0:{
                outputText = "Няма да завършиш СофтУни. " +
                    "Преди това ще се ожениш за програмист, " +
                    "който ще те издържа и ще задоволява скъпите ти прищевки. " +
                    "Разбира се, ще трябва да си намериш любовник, " +
                    "защото съпругът ти ще работи твърде много.";
                break;
            }
            case 1:{
                outputText = "Ще завършиш по някое време и ще започнеш работа като QA на игри. " +
                    "Все пак доста бъгове вече са ти ясни. " +
                    "Навивай си по 3 будилника, за да успяваш да ставаш за изпитите!";
                break;
            }
            case 2:{
                outputText = "Ще започнеш работа и след време ще успееш да завършиш. " +
                    "Винаги ще ти дават да пишеш най-досадния софтуер.";
                break;
            }
            case 3:{
                outputText = " Ще завършиш за половин година и ще работиш като консултант в 7-8 фирми. " +
                    "Ще изкарваш купища пари, които ще похарчиш по психиатри.";
                break;
            }
            case 4:{
                outputText = "Нека не се лъжем. Не си тук, за да завършиш. " +
                    "Набираш съмишленици за хакерска група. " +
                    "Тези, на които не си успял да хакнеш компютрите.";
                break;
            }
        }
    }

    return outputText;
}

function  ShowResult(text) {

    let x = document.getElementById("result");
    x.style.display = "block";
    x.style.padding = "20px";
    x.innerHTML = text;
    let y = document.getElementById("test-result");
    y.style.width="50%";
    y.style.border = "20px solid #581746";
    let z = document.getElementById("sos2");
    z.style.animation ="blink 1s linear infinite";
    window.location.hash = '#test-result';
}

function ActivateRadioButtons() {

    for (let i = 1; i <= 6; i++)
    {
        let questionIndex = i;
        let elementName = "question";
        elementName += questionIndex;

        let radios = document.getElementsByName(elementName);

        for (let j = 0; j < radios.length; j++)
        {
            radios[j].disabled = false;
        }
    }

    document.getElementById("result").style.display = "none";
    document.getElementById("test-result").style.width = 0;
    document.getElementById("test-result").style.border = "none";
}