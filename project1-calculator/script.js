let input = document.querySelector('.inputBox');
let buttons = document.querySelectorAll('button');
let specialChars =[ "%","*","/","-","+","="];
let output=" ";

const calculate = (btnValue)=> {
    if (btnValue === "=" && output !==" "){
        output = eval(output.replace("%","/100"));
    }else if(btnValue === "AC"){
        output = ""
    }else if(btnValue ==="DEL"){
        output=output.toString().slice(0,-1)

    }
    else{
        if(output === "" && specialChars.includes(btnValue))return;
        output+=btnValue;
    }
    display.value = output;
};


