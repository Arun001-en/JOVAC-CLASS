// let n = 2000;
// let count =0;

// while(n>0){
//     n = Math.floor(n / 10);
//     count++;
// }
// console.log(count);

// const uploadVideo = function(file){
//     return (console.log(file));
// }
// uploadVideo(2026);



// let res = (p,r,t)=>{

//     return p * (1 + r / 100) ** t - p;    
    
// }
// console.log(res(1,2,3));

// let str = 'arun'
// let n = str.length;
// let newStr = '';
// let idx = n - 1;

// function res() {
//     while (idx >= 0) {
//         newStr += str[idx--];
//     }
// }

// res();
// console.log(newStr);
// var a=1;

// function a (){
//     var outervar = "outerHeight";
//     function b (){
//         var innerVar = 'inner'
//     }

//     console.log(outervar);
//     console.log(innerVar);      
// }
// a();


// let greet = (name)=>{
//     return console.log(`Hello ${name}`);
// }
// console.log(greet("arun"));

// const add = (a,b)=>{return a+b};
// console.log(add(5,5));

// const area = (r)=>{
//     let area = (r**2)*22/7
//     return area
// }

// console.log(area(5));


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const enums = numbers.filter(num => num % 2 === 0);

// console.log(enums);

// let cart = [
//     {
//         amount:10
//     }
// ];

// let bill = cart.reduce((acc,curr)=>{
//     acc + curr.amount
// })


// bill = bill - (bill*10/100);
// console.log(bill);


// let cart = [
//     {
//         name: "Laptop",
//         amount: 50000
//     },
//     {
//         name: "Mouse",
//         amount: 1000
//     },
//     {
//         name: "Keyboard",
//         amount: 2000
//     }
// ];

// let bill = cart.reduce((acc, curr) => {
//     return acc + curr.amount;
// }, 0);

// bill = bill - (bill * 10 / 100);






// const smartPhones = [
//     {name:"iphone", price:81000, rating:4.8},
//     {name:"vivo", price:65000, rating:4.6},
//     {name:"samsung", price:90000, rating:4.9},
//     {name:"samsung", price:80000, rating:3.7},
// ];

// const result = smartPhones
//     .filter(phone => phone.rating > 4.5)
//     .map(phone => ({
//         name: phone.name,
//         rating: phone.rating,
//         price: phone.price,
//         discountedPrice: phone.price * 0.8
//     }));

// console.log(result);


// function renderNotes() {
//     notesContainer.innerHTML = "";

//     notes
//         .map((note, index) => {
//             const div = document.createElement("div");
//             div.classList.add("note");

//             div.innerHTML = `
//                 <span>${note}</span>
//                 <button data-id="${index}">
//                     delete
//                 </button>
//             `;

//             return div;
//         })
//         .forEach((div) => notesContainer.appendChild(div));
// }

// function renderNotes() {
//     notesContainer.innerHTML = notes
//         .map((note, index) => `
//             <div class="note">
//                 <span>${note}</span>
//                 <button data-id="${index}">
//                     delete
//                 </button>
//             </div>
//         `)
// }