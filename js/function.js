function add(a, b) {
    return a+b
}
const addNew = (a, b) => {
    this.name = " Wow This.name "
    return a+b
} 

function searchCustomer(CustomerName) {
    this.name = " Wow This.name "
    return { name: CustomerName, age:32 }
}

function mul(a, b) {
    return a * b
}
console.log("This.name = ", this.name)
console.log(add(1,2))
console.log(mul(1,2),searchCustomer("aaa"));