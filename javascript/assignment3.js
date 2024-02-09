let studentName,subjects,Telugu,Hindi,English,Maths,Science,Social
studentName='Katta Anil'
subjects=6
 Telugu=80
 Hindi=90
 English=85
 Maths=100
 Science=90
 Social=96
sum=Telugu+Hindi+English+Maths+Science+Social
console.log('subjects=',subjects)
console.log('studentName=',studentName)
console.log('Total marks=',sum)
avg=sum/6
console.log('Avg:',avg)
switch(true){
    case avg>=90:
        console.log("Grade A");
        break;
    case avg>=80:
        console.log("Grade B");
        break;
    case avg>=70:
        console.log("Grade C");
        break;
    case avg>=60:
        console.log("Grade D");
        break;
    case avg>=55:
        console.log("Fail");
    


}


