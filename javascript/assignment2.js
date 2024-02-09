 function bmi(weight,height){
    let bmi=weight/(height**2)
if (bmi<=18.5){
    console.log("underweight");
    console.log('bmi:',bmi);
    
}
else if(bmi<=25.0){
    console.log("Normal");
    console.log('bmi:',bmi);
}
else if(bmi<=30.0){
    console.log("Overweight");
    console.log('bmi:',bmi);
}
else if(bmi<30){
    console.log("Obese");
    console.log('bmi:',bmi);
}
}
bmi(68,1.68)
