
const options  = [
    {id:"option1", text:"JavaScript" ,votes:0},
    {id:"option2", text:"Python" ,votes:0},
    {id:"option3", text:"Java" ,votes:0},
    {id:"option4", text:"C++" ,votes:0}
]


// console.log(options)
function PollSystem(){
    


    const pollCheck = document.querySelector('input[name="poll"]:checked');
   
//    console.log(selectOptionObj)

    if(!pollCheck){
        alert('Please Select Any Language For Give The Vote');
        return;
    }


    let OptionsId = pollCheck.value;

    
    const selectOptionObj = options.find((option) => option.id === OptionsId);
   
    console.log(selectOptionObj);

    if(selectOptionObj){
        selectOptionObj.votes++;
        console.log(selectOptionObj);
        
    }
}