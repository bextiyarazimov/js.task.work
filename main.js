// const content =document.querySelector(".content");

// const btn =document.getElementById("click");
// btn.addEventListener('click',function(){
// content.classList.toggle('active')
// })






                ///////////////   29.11.2023 /////////////////

// function Employee(fullName, age, position) {
//     this.fullName =fullName;
//     this.age =age;
//     this.position= position;
// }

// let emp1 = new Employee("John Doe", 25, "Fronted");



// class Car  {
//     constructor(model, year, color) {
//         this.model =model;
//         this.year =year;
//         this.color =color;
//     }
// }
// let car =new Car("Hyundai",2020,"blue");
// console.log(car);


// const obj = {
//     fullName:"test",
//     age:34,
//     position:"Fronted"
// }



/////////////   02.12.2023 /////////

//// array yaradin icinde random datalar olsun.
//// 2 ayri object yaradin
//// 1-ci objecti 2-cinin daxiline spread edin
///esas objecti arrayin daxiline yazin
///arrayin sonuna basqa bir array spread edin




//   const obj = {
//      fullName:"test",
//      age:34,
//      position:"Fronted"


//   }

// const obj2 = {
//      ...obj,
//      Name:"testoc",
//      age:38,
//      position:"Backend"
// }

// const arr1 = [3,4,5]
// const arr2 =[1,2,obj2,...arr1]
// console.log(arr2);




             ////////   09.12.2023 /////////////////

// const start_btn = document.querySelector('.btn_start');
//  const stop_btn = document.querySelector('.btn_stop');
// const toggleBtn = document.querySelector('.btn_toggle');



// let interval
// toggleBtn.addEventListener("click",function (){
//   if(interval) {
//     clearInterval(interval);
//     interval = undefined;
//   } else {
//     interval = setInterval (()=>{
//         console.log("Intervallll");
//     }, 2000);
//     toggleBtn.innerHTML = "Start";
//   }
// });


// start_btn.addEventListener("click", function () {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => console.log(data)) 
   
// })

// stop_btn.addEventListener("click", function () {
//     fetch('https://jsonplaceholder.typicode.com/todos/2')

//     .then(response => response.json())
//     .then(data => console.log(data)) 
   
// })


/// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Hint: test case 3 is a bit tricky because the value of property "z" is undifined.But the property itself exits. 

// function hasProperty(obj, key) {
//     return key in obj;
// }

// // Example usage:
// const myObject = { name: 'John', age: 25, z: undefined };
// const keyToCheck = 'z';

// const hasKey = hasProperty(myObject, keyToCheck);
// console.log(hasKey); // This will output: true










                       //////// 13.12.2023 //////////////////////


// const post_btn= document.querySelector('.btn_post');
// const get_btn = document.querySelector('.btn_get');
// const put_btn = document.querySelector('.btn_put');
// const delete_btn = document.querySelector('.btn_delete');



// post_btn.addEventListener("click", ()=> {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           id: 1,
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
            
// })


  // get_btn.addEventListener("click", ()=> {
  // fetch('https://dummyjson.com/products/1')
  // .then(res => res.json())
  // .then(json => console.log(json))
            
              
  // })


  // put_btn.addEventListener("click", ()=> {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       id: 1,
  //       title: 'foo',
  //       body: 'bar',
  //       userId: 1,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
              
  // })



  // delete_btn.addEventListener("click", ()=> {
  //   fetch('https://dummyjson.com/products/1', {
  //       method: 'DELETE',
  //     })
  //     .then(res => res.json())
  //     .then(console.log);
              
  // })
  
  
  

// const ac = document.querySelector(".aç");
// const kap = document.querySelector(".kapat");
// const op = document.querySelector(".open");
// const clo = document.querySelector(".close");




// op.addEventListener('click', ()=>{

// })

// localStorage.setItem("name", "Baku");
// localStorage.setItem("age", 200);
// localStorage.setItem("hobbies", JSON.stringify(["Tenis","Football"]));
// localStorage.setItem("properties", JSON.stringify({name:"Test", email:"test@gmail.com"}));
// let hobbies = localStorage.getItem("hobbies");
// let properties = localStorage.getItem("properties");

// console.log(JSON.parse (hobbies), JSON.parse (properties));

// console.log(localStorage.getItem("age"));

// localStorage.removeItem("name");
// localStorage.clear()


// sessionStorage.setItem("name", "Moskva");
// sessionStorage.setItem("age", 500);






// let text = "Əli";

// // console.log(text[0]+text[1]+text[2]);
// // console.log(text[2]+text[1]+text[0]);

// for(let i=0; i<text.length; i++){
//   console.log(text[i]);
// }




// ///   Sozlerin tersine yazilmasi

// function reverseText(text) {
//   let newtext ="";
//   for(let i=text.length-1; i>=0;i--) {
//     newtext+=text[i];
//   }
//   return newtext;
// }
// console.log(reverseText("Sabah"));



////   tekrar edilen edeler ucun funksiya yazin

// let numsArr = [1,2,3,4,5,6,7,8,9,1,2,3,4];

// function findRepeatedNumbers(nums){
// let repeatedNumsArr=[];

// for(let i =0;i < nums.length; i++) {
//   for(let j = i + 1; j < nums.length; j++){
//   if(nums[i] == nums[j]) {
//     repeatedNumsArr.push(nums[i]);
//   }
// }
// }
// return repeatedNumsArr;
// }
// alert(findRepeatedNumbers(numsArr));



/// birden 100 e qeder dovr etme cut reqemlerle


  for(let i=1;i<100;i++){
    if(i%2==0){
      console.log(i);
    }
  }


