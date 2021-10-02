const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function compareValues(DSum,luckyNumber){
    if(DSum%luckyNumber===0){
        outputBox.innerText="Your Birthday is Lucky!";
    } else {
        outputBox.innerText="Your Birthday is not Lucky!";    
    }
}


function checkLuckyBDate(){
    const BDate = dateOfBirth.value;
    const DSum = calculateSum(BDate);  
    if(DSum&&BDate) {
    compareValues(DSum,luckyNumber.value)
    } else {
    outputBox.innerText="Please enter both the fields.";
    }
}

function calculateSum(BDate) {
    BDate= BDate.replaceAll("-","");
    let DSum =0;
    for(let i=0;i<BDate.length;i++){
        DSum=DSum + Number(BDate.charAt(i));
    }
    return DSum;
}

checkButton.addEventListener('click',checkLuckyBDate)