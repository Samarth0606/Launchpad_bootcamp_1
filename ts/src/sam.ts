// let a = 10;
// console.log(a);

// -------------------

// let a = 10;        //inference: adapting the type by default
// console.log(a);
// a = 100;
// console.log(a);

// -------------------

// let a:number = 100;        
// console.log(a);
// a = 100;
// console.log(a);


// -------------------

// function checkAge(age:number):boolean{
//     if(age>18){ 
//         return true
//     }else{
//         return false
//     }
// }
// checkAge(17)


// function checkAge(age:number):void{
//     if(age>18){ 
//         console.log(true)
//     }else{
//         console.log(false);
//     }
// }
// checkAge(17)

// -----------------------------


// var a = 10;
// let b = 20;
// const c = 30;

// let af = ()=>{
//     console.log("hello");
// }

// -----------------------------

// function checkAge(age){
//     if(age>18){ 
//         return true
//     }else{
//         return false
//     }
// }
// checkAge(17)

// -----------------------------


function runAfter1s(fn : ()=>void):number{
    setTimeout(()=>{
        fn();
    } , 1000)
    return 10;
}

function calling(){
    console.log("i m calling");
}

let num:number = runAfter1s(calling)

console.log(num);

