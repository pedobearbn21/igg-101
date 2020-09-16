for (let index = 0; index <= 20; index++) {
    console.log(index);
    
}
let temp = ['apple','banana','wowowow']
temp.forEach((item, index)=> {console.log(` ${index+1} : ${item}`)})
let newTemp = temp.map( (item,index) => {return `${index+1} :  ${item}`})
console.log(newTemp)
let filtermoreThanZero = [-1,2,3,56,6,-93,4,0].filter(el => el>=0)
console.log(filtermoreThanZero)