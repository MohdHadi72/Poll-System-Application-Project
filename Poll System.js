
const options  = [
    {id:"option1", text:"JavaScript" ,votes:0},
    {id:"option2", text:"Python" ,votes:0},
    {id:"option3", text:"Java" ,votes:0},
    {id:"option4", text:"C++" ,votes:0}
]



function PollSystem(){
    const pollCheck = document.querySelector('input[name="poll"]:checked');

    if(!pollCheck){

        alert('Please Select Any Language For Give The Vote');
        return;
    }
    
    let OptionsId = pollCheck.value;
    const selectOptionObj = options.find((option) => option.id === OptionsId);
    if(selectOptionObj){
        selectOptionObj.votes++;
        displayResult();
        
    }
}
function displayResult() {

    let result = document.getElementById('result');
 result.innerHTML = ""

 options.forEach((option)=>{
    const percentage = ((option.votes / getVoteSystem()) * 100 ).toFixed(2) || 0 ;
    const width = percentage > 0 ? percentage + '%' : "0%";

    const optionResult = document.createElement('div');
    optionResult.className = "options-Result";
    optionResult.innerHTML = `

    <span class="options-text">${option.text}</span>
    
    <div class="bar-container">
     <div class="bar" style="width: ${width};"></div>
     </div>
    
     <span class="percentage">${percentage}%</span>

    `;
    result.appendChild(optionResult);
 });
}

function getVoteSystem() {
    return options.reduce((total,option)=> total + option.votes,0);
}

displayResult();