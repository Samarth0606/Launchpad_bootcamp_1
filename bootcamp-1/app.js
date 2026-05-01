// 1. fetch
// const API = "https://jsonplaceholder.typicode.com/todos";
// fetch(API) //returns promise
// .then((res)=>res.json()) //resolve
// .then((dataa)=>{ 
//     console.log(dataa) //entire array 
//     dataa.map((item)=>{ //looping array
//         console.log(item.title)
//         console.log(item.completed)
//     })
// })
// .catch((err)=> console.log(err) ) //reject

// fetch doesnot gives entire data at once 
// we need to wait for entire data using .json()

// ---------------------------------------------------------

// 2. axios
const API = "https://jsonplaceholder.typicode.com/todos";
axios.get(API) //returns promise
.then((resp)=>{
    console.log(resp)
    console.log(resp.data)
    resp.data.map((item)=>{      //looping array
        console.log(item.title)
        console.log(item.completed)
    })
} )
.catch((err)=>console.log(err) )

// ---------------------------------------------------------