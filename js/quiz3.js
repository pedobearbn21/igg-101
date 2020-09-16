
const CalGrade = (x) => {
    if(x>=81 && x<=100){
        console.log('A')
    }else if(x>=71 && x<80){
        console.log('B')
    }else if(x>=61 && x<=70){
        console.log('C')
    }else if(x>=51 && x<=60){
        console.log('D')
    }else if(x>=9 && x<=50){
        console.log('F');
    }else{
        console.log("invalid")
    }
}
console.log(CalGrade(50))