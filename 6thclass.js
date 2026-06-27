
// // console.log("a")
// // console.log("B")
// // console.log("C")
// // console.log("step 1 : poha ban rha hai ")
// // function boilmilk(){
// //     console.log("step2: dooh ubal rha ")
    
// // }
// // console.log("step3: dooddh ready")
// // setTimeout(callbackfunction , delayinmilliseconds)
// // console.log("start of th script")
// // setTimeout(()=>{
// //     console.log("i am from setimeout")
// //     boilmilk()
// // } , 0)
// // console.log("end of the script")
// // console.log("clock started!")
// // let counter = 1;
// // setInterval(()=>{
// // console.log(`tick: ${counter} second passed`);
// //    counter++
// //   for(let i=0 ; i<10000000000; i++){}
// // } , 1000)
// // let count = 0 
// // const intervalID = setInterval(()=>{
// //     count++;
// //     console.log("print count" , count)
// //     if(count==5){
// //         console.log("stop! 5 aa gya ")
// //         clearInterval(intervalID)
// //     }
// // },1000)
// // console.log("App started");
// // function fetchUserData(){
// //     let data;
// //     setTimeout(()=>{
// //         data={id:1, name:"Abhinav saxena" , role: "Mern stack developer"};
// //         console.log("database data aa gya ")
// //     },2000);
// //     return data
// // }
// // let user = fetchUserData();
// // console.log("User data is here:", user)

// // function displayUser(userdata){
// //     console.log("ui updated with user " , userdata.name)
// // }
// // function fetchUserData(callback){
// //     console.log("fetching data from database...")
// //     setTimeout(()=>{
// //         let data = {id:1, name:"Abhinav saxena" , role: "Mern stack developer"};
// //         console.log("data is complete fetched")
// //         callback(data)
// //     }, 2000)
// // }
// // fetchUserData(displayUser)
// // function handleclick(){
// // }
// // app.get('/users' ,  function callback(req, res){
// //     res.send("here are the user")
// // })
// // onclick={handleclick}



// // console.log("welcome to Amazon")
// // function selectItem(item , callback){
// //     setTimeout(()=>{
// //     console.log(`${item} sleceted)`)
// //         callback(item)
// //     },1000)
// // }
// // function addtoCart(item , callback){
// //   setTimeout(()=>{
// //     console.log(`${item} added to cart`)
// //     callback(item)
// //   },1000)
// // }
// // function proceedToPayment(item , callback){
// // setTimeout(()=>{
// //     console.log(`payment successful for ${item}`)
// //     callback(true)
// // },1000)
// // }
// // function orderSummary(paymentStatus, callback){
// // setTimeout(()=>{
// //     if(paymentStatus){
// //         console.log("order Summary: Your order is placed successfully")
// //         callback()
// //     }
// // },1000)
// // }
// // selectItem("Laptop",function(item){
// //     addtoCart(item,function(item){
// //         proceedToPayment(item,function(status){
// //             orderSummary(status,function(status){
// //                 console.log("all steps completed .thank you ")
// //             })
// //         })
// //     })
// // })
// console.log("Dominoss mein order place kar diya")
// const promisePizza = new Promise((resolve ,reject)=>{
//     console.log("Kitchen mein pizza banna start ho gya(pending state)");
//     setTimeout(()=>{
//         let isCheesAvailable = false;
//         if(isCheesAvailable){
//             resolve("garlic bread & margherita pizza")
//         }else{
//             reject("Sorry , we are out of stock of chesse")
//         }
//     },2000)
// })
// console.log("table par bath kar wiat kar rhe hai ")
// console.log("current pizza object " , promisePizza)
// promisePizza.then(()=>{
//     console.log("Yay mujhe mera order mil gya " , food)
// }).catch((errormsg)=>{
//     console.log("Oh no! plan cancel")
// }).finally(()=>{
//     console.log("domios se bhar aaa gye ")
// })
// console.log("welcome to amazon");
// function placeOrder(item){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=> resolve(`Order placed for ${item}`),1000)
//     })
// }
// function makePayment(orderinfo){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>reject(`payment failled`),1000)
//     })
// }
// function showSummary(paymentinfo){
//     return new Promise((resolve , reject)=>resolve(`${paymentinfo} -> summary sent rto email`))
// }

// placeOrder("mackbook pro")
//   .then((ordersult)=>{
//     console.log("step 1 done:" , ordersult);
//     return makePayment(ordersult)
//   }).then((paymentresult)=>{
//     console.log("step 2 , done", paymentresult);
//     return showSummary(paymentresult)
//   }).then((summaryResult)=>{
//     console.log("step3 done" , summaryResult)
//     return showSummary(paymentresult)
//   }).catch((error)=>{
//     console.log("error caughtt" , error)
//   })
console.log("welcome to dashboard");
const p1 = new Promise((resolve)=>setTimeout(()=>resolve("User fetched")),2000)
const p2 = new Promise((resolve)=>setTimeout(()=>resolve("Produc fetch")),2000)
const p3 = new Promise((resolve)=>setTimeout(()=>resolve("Order fetch")),2000)

Promise.all([p1,p2,p3])
.then((result)=>{
    console.log("all api fetch succesfully")
    console.log("data" , result)
})
.catch((error)=>{
    console.log("Padhao pe jane ki trip cancel ho gyi phir" ,error)
})