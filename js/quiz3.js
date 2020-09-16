let x = 101
if(x>=81 ){
    console.log('A')
}else if(x>=71){
    console.log('B')
}else if(x>=61){
    console.log('C')
}else if(x>=51){
    console.log('D')
}else{
    console.log('F');
}

const grade = x>=81? 'A': x>=71? 'B': x>=61? 'C': x>=51? 'D':'F'
console.log(grade)