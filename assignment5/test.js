var postCounter = 0;
var globaltextString;

function postFunction(){
    globaltextString = document.getElementById("text1").value; 
    // alert(globaltextString);
    postCounter +=1;
    // alert(postCounter);
    // // alert(textString);
    if(postCounter == 1){
       firstPostFunction(); 
       
    }
    else if(postCounter == 2){
        SecondPostFunction();
    }
    else if(postCounter ==3){
        ThridPostFunction();
    }
    ClearTextBox();
}

function firstPostFunction (){
    var textString = document.getElementById("topic1").textContent;
    textString = globaltextString;
    topic1.textContent = textString;   
}

function SecondPostFunction(){
    var textString = document.getElementById("comment1").textContent;
    textString = globaltextString;
    comment1.textContent = textString;    
}

function ThridPostFunction(){
    var textString = document.getElementById("comment2").textContent;
    textString = globaltextString;
    comment2.textContent = textString;
}

function ClearTextBox(){
    text1.value = "";
}

function clearFunction(){
    postCounter = 0;
    topic1.textContent = "";
    comment1.textContent = "";
    comment2.textContent = "";
    ClearTextBox();


}