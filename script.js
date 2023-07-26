'use strict';

///////////////////////////////////////
// Modal window

// import { addToCart } from './exportingtest.js';
// addToCart('bread',5);

// console.log('importing module');
//console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
//console.log(allSections);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {

    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//console.log(window.confirm);

//creating element and adding class 
const message = document.createElement('div');
message.classList.add("cookie-message");
//message.textContent="we use cookies for improved functionality and analytics";
message.innerHTML = `we use cookies for improved functionality and analytics. <button class ="btn btn--close--cookie">got it</button>`;
//header.prepend(message);

header.append(message);
//add content after header
//header.prepend(message);
//header.before(message);
//remove button and content
//on click remove button and content
document.querySelector(".btn--close--cookie").addEventListener("click", function () {
    message.remove();
})
message.style.backgroundColor = "#37383d";
message.style.width = '120%';
// to get style of element 
//fconsole.log(getComputedStyle(message).color);


btnScrollTo.addEventListener('click', function (e) {
    //const s1coords = section1.getBoundingClientRect();
    //console.log(s1coords);
    //window.scrollTo ({
    //left: s1coords.left + window.pageXOffset,
    //top: s1coords.top + window.pageYOffset,
    //behavior:'smooth',
    //});

    // scroll to same page div 
    section1.scrollIntoView({
        behavior: 'smooth'
    });

});

//events mouuse enter event
//var h1 = document.querySelector('h1');
//h1.addEventListener("mouseenter",function(){
// alert('great this is mous enter event');
//})




//event on same element using this
// document.querySelector(".nav__item").addEventListener("onmouseenter", function () {
//   this.style.backgroundColor = "black";
// });

// random number generator and color generator 
/*
var randomcolor =["blue","green","yellow","orange","black","purple","aqua","azure"];

document.getElementById("test").innerHTML ="hi srinivas";

var rn = Math.floor(Math.random()*6) + 1;
 var a  = randomcolor[rn];


document.getElementById("test").style.backgroundColor = a;


*/
//test foreach loop to get details of clicked elemtent
/*
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener("click", function(){
console.log(el.innerHTML);


  })
})
*/

//to get classname of element 
// document.querySelectorAll('.test').forEach(function(el){
// el.addEventListener('click', function(){
//   console.log(el);
// })
// })
// document.querySelectorAll('.test').forEach(el => el.addEventListener('click',function(){
//   console.log(el);
// }))

//event delegration using all parent classes with same id for event and using it.

//scroll using differnet types without using target
/*document.querySelectorAll('.nav__link').forEach(function(el){
  console.log(el);
  el.addEventListener('click', function(e){
    e.preventDefault();
    var a = el.getAttribute('href');
    console.log(a);
document.querySelector(a).scrollIntoView({
  behavior:'smooth'
})
  })
})
*/
// arrow function for same scroll behavior
// document.querySelectorAll('.nav__link').forEach(el => el.addEventListener('click',function(e){
//   e.preventDefault();
//   var a  = el.getAttribute('href');
//   document.querySelector(a).scrollIntoView({
//     behavior: 'smooth'
//   })
// }))

//this is event delegation which is using main parent element and selecting particular element using targt and making changes as per that
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.classList.contains('nav__link'));

    if (e.target.classList.contains('nav__link')) {

        const id = e.target.getAttribute('href');
     //   console.log(id);
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });

    }
})

// document.querySelector('.operations__tab-container').addEventListener('click', function(e){
//   e.preventDefault();
//   if(e.target.classList.contains('operations__tab')){
//     console.log(e);
//   }
// })
//to comment code ctrl + /

//traversing meaning selecting the child of parent and selecting parent of child element
// to get span from h1 child from parent element

//going downward to child
//  var h1 = document.querySelector('h1');
// console.log(h1.firstElementChild);

/*
console.log(h1.childNodes);

// to select child element from parent
var d  = h1.firstElementChild;
d.style.color ="red";

d.addEventListener('click', function(){
  alert('i am clicked');
})

*/

//selecting parent using child element
//console.log(h1.parentNode);

//console.log(h1.parentElement);
//h1.parentElement.style.color ="green";

//foreach example/
//var abc =["a","b","c","d","e","f","g","h","i","j"];
 //abc.forEach(el =>console.log(el));

// examples of test to add event click and show data in console
// document.getElementById('test').addEventListener('click', function(){
//   document.querySelector('.header__title').scrollIntoView({
//     behavior: 'smooth',
//   })
//   abc.forEach(el => console.log(el));

// })

// // examples 1 of foreach
//  abc.forEach(function(el){
//   document.getElementById('test').innerHTML = el;
//  })

//example 2 of foreach
// index will give the index of element from array not: index name can be any like entires or any 
// abc.forEach(function(el, index){
//   document.getElementById('test').innerHTML += index + " " + el;
//  })

//example 3 of foreach
//  abc.forEach(function(el){
//   document.getElementById('test').innerHTML += el;
//  })


tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

//scroll event 
// window.addEventListener('scroll', function(e){
// console.log(e);
// })


const initialCoords = section1.getBoundingClientRect();
//getBoundingClientRect will get the cords of section;
//console.log(initialCoords);
  
//sticky navigation

//scroll event and add sticky nav
// window.addEventListener('scroll', function(){
//     console.log(window.scrollY);
// if( this.window.scrollY > 900){
// console.log("i am active");
//     nav.classList.add('sticky');
// }
// else{
//      nav.classList.remove('sticky');

// }
// })



window.addEventListener('scroll', function (e) {
    //console.log(this.scrollY);

    if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');

})



tabs.forEach(t=> t.addEventListener('click', function(){
//console.log('tab')
}))



//intersectionobserver exmple try to alert on reaching hreshold 1.0;

// const obsCallback = function () {
//  alert(1);
// }

// const obsOptions = {
//  root: null,
//  threshold: [0,0.2],
// };


const stickyNav = function(entries){
    const [entry] = entries;
    nav.classList.add('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav,{
    root:null,
    threshold:0
});
headerObserver.observe(header);

//if(!entry.isIntersecting) nav.classList.add('sticky'); else nav.classList.remove('sticky');




const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


//shift + alt +f for code beautify
//console.log(document.body);

//var a  = document.body
//console.log(a)
//console.log(a.childNodes);
//var z= document.getElementsByTagName('section');
//console.log(z);

//creating a element and appending and prepending to selected element

// var msg = document.createElement('div');
// msg.classList.add('test');
// msg.innerHTML ="hi srinivas";
// header.append(msg);
// header.prepend(msg);



//prototype

//constructor function
//example function

// const Person = function (fname, year){
// this.fname = fname;
// this.year = year;
// this. fullname = function(){
// console.log(this.fname + this.year);
// }
// };

// const jonas = new Person('Jonas','1991');
// const srini = new Person('srinivas','kandlikar');

// console.log(jonas, srini);
//constructor function
//  1. new {} object is created always
//  function is called, this ={}
//  {} linked to prototype
// returns object{}


// instance : an object created by class is instance
// constructor function example test
// var full = function(fname,lname){
//     this.fname = fname;
//     this.lname = lname;
// }

// var abcde = new full('srinivas','kandlikar');
// console.log(abcde);

//prototype in function

// var fullname = function(fname, lname) {
// this.fname = fname;
// this.lname = lname;
// }

// var test = new fullname('srinivas','kandlikar');

// fullname.prototype.calname = function(){
//     console.log(this.fname + this.lname);
// }
// test.calname();


// proto type function example

// const Car = function(make,speed){
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.speedlimit = function(){
// console.log(this.speed +10 );
// }

// Car.prototype.break = function(){
//     console.log(this.speed - 10);
//     }
    

// const bmw = new Car('BMW',120);
// const mercedes = new Car('mercedes', 95);
// bmw.speedlimit();
// bmw.break();




const revealSection = function(entries, observer){
    const [entry] = entries;
  //  console.log(entry);


    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);

}



const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold:0.15,

});


allSections.forEach(function(section){
    sectionObserver.observe(section);
   // section.classList.add('.section--hidden');

})

const imgTargets = document.querySelectorAll('img[data-src]');


const loadImg = function(entries, observer){
    const[entry] = entries;
   // console.log(entry);

    if(!entry.isIntersecting) return;

    entry.target.src= entry.target.dataset.src;



entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
});

//observe.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg,{

})
imgTargets.forEach(img => imgObserver.observe(img));




const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();

//slice
//   var a  =[1,2,3,4,5,6];
// a.slice(-1);
// [6]
// var a  =[1,2,3,4,5,6];
// a.slice(1);
// (5) [2, 3, 4, 5, 6];

//  const account ={
//     owner:'Jonas',
//     movements:[200,340,32,45,5657],

//  }
//  console.log((account.movements).slice(-1));
// const account = {
//         owner:'Jonas',
//          movements:[200,340,32,45,5454],
//          get latest(){
//             return this.movements.slice(-1).pop();
//          },

        
// }
// console.log(account.latest);


// document.getElementById('test').addEventListener('click', function(){
//   //document.getElementById('abc').style.display='block';
//  // document.getElementById('abc').classList.add("abc");
// })



//set timout for 3 sec;
// setTimeout(function(){
//   alert("hi srinivas");
// },2000);
// synchronous means works code line to line
// asynchronous means works code independently;








// for ( let a of data){
  
//   console.log(a.title);

 
// }


// console.log(1);
// alert(1)
//document.getElementById('test').setAttribute('id', 'nextstep'); // add id

//alert(1)

// const getlastPost = async function() {

//  const res =  await fetch('https://jsonplaceholder.typicode.com/posts');

//  const data = await res.json();

// console.log(data);

// }
// getLastPost();

//fetch data from api json



//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => 
// console.log(data)
    
//     );



 
// loadNames();




// fetch data and show in table;
// var a  = document.getElementById('testdata');
//     async function loadNames() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const names = await response.json();
//       names.forEach(abc => 
//       {
//       a.innerHTML +=`
//       <table>
//         <tr>
//           <th>userid</th>
//           <th>id</th>
//           <th>title</th>
//           <th>body</th>
//         </tr>
//         <tr>
//           <td>${abc.userId}</td>
//           <td>${abc.id}</td>
//           <td>${abc.title}</td>
//           <td>${abc.body}</td>
//         </tr>
//         <tr>
//           <td>Centro comercial Moctezuma</td>
//           <td>Francisco Chang</td>
//           <td>Mexico</td>
//         </tr>
//       </table>`
//      });

//       // logs [{ name: 'Joker'}, { name: 'Batman' }]
//     }
    
//     loadNames();

// function 
// function is reuse of code 
// function logger(){
// console.log("hi srinivas");
// }

// // use it as many times as wanted
// logger();
// // this is called invoking/ calling / running a function

// logger();

// function passing parameters;
// function fruitsProcessor(apples, oranges){
//   console.log(apples, oranges);
//   // const juice  =`juice with ${apples} apples and ${oranges} oranges`;
//   // return juice;
// }
// fruitsProcessor(2,5);

// return function 
// function fruitsProcessor (apples, oranges){
//  // console.log(apples, oranges);
//   const juice = `juice with${apples} apples and ${oranges} oranges`;
//   return juice;
// }
//  var totalfruits = fruitsProcessor(2,5);

//  var a  = document.getElementById('testdata');
//  a.innerHTML = totalfruits;



 // array methods
//  const arr =[1,2,3,4,5];
//  //push item into array
//  const newitem = arr.push(6);
//  console.log(arr);

// //unshift method pushes item at the starting of array
//  arr.unshift(0);
//  console.log(arr);
//  //pop method
// //removes items from last of array
//  arr.pop();
//  console.log(arr)


//  //shift method

//  //shift method will remove item from starting of array;
//  arr.shift();
//  console.log(arr);


//  ///indexof whihc tells in which position the item is located

// var i = arr.indexOf(5);
//  console.log(i);

//  //if item is not there it will return -1
//  var i = arr.indexOf(10);
//  console.log(i);


//includes
// checks whether the element is there is array or not if there then it will return true
// var  i= arr. includes(5);
// console.log(i);




// // example of includes and index of 
// var ex= 10;

// var i= arr.includes(ex);
// console.log(i);

// if(i == true){
//   var i = arr.indexOf(ex);
//   console.log(i);
// }
// else {
//   console.log(' I am not there');
// }


//fetching the data

// async function loadNames(){
//   const response = await fetch('https://restcountries.com/v2/name/portugal');
//     const names = await response.json();

// names.forEach(abc => console.log(abc));
// }
// loadNames();




// 




// async function loadNames(){
//   const response = await fetch('https://restcountries.com/v2/name/portugal');
//     const names = await response.json();
//     console.log(response);

// // var a =[1,2,3,4,5];

// // for (var i=0; i<a.length;i++){
// //   console.log(a[i].length);
// // }


// //a.forEach(i => console.log("fe"+i));
// //a.map(i =>console.log("map"+i));
   
// function test(x){
//   console.log(x);



//   console.log(x[0].name);
// //  document.getElementById(`teams`).innerHTML = `${x.name}`;
// document.getElementById('teams').innerHTML=`
// <table>
//   <tr>
//     <th>name</th>
//     <th>population</th>
//     <th>currencies</th>
//     <th>flag</th>

//   </tr>
//   <tr>
//     <td>${x[0].name}</td>
//     <td>${x[0].population}</td>
//     <td>${x[0].currencies[0].code}</td>
//     <td><img src ="${x[0].flag}"</td>


//   </tr>
  
// </table>`;

// }

// test(names);
// }
// loadNames();

//  var a  = document.getElementById('testdata');
// var d =[];
// for(var i= 0; i<=abcde.length;i++){
//   // console.log(i);
//   // a.innerHTML += i;
//   // a.innerHTML = t;
//   var t = abcde[0];

//   if(t > abcde[i]) {

// console.log(t);
//   }
// }


// abcde. forEach((el, index) =>{
//   console.log(el, index);
// console.log(el.sort);
// })
//   if(low == true){
//      d.push(low);
//     console.log(d);
//   }

//looping over array
//foreach loop 
//var abcde =[0,2,5,3,7,9,4,6,1,8];
// for of loop forof loop
// for(const x of abcde){
//   //console.log(x);
// // greateer than 2 
//   if(x> 2){
//     console.log(x);
//   }
// }
//foreach loop
// foreach function requires callback function
//loops and calls function in every iteration
// abcde.forEach(function(x, index){
//   if(x>5){
//   console.log('i am greater'+ `${x}`);
//   }
//   else{
//     console.log(index +` i am lower`+ x);
//   }

// })
//abcde.forEach(x =>console.log("foreach loop"+ x));

//array methods
//map filter and reduce 
// abcde.map(function(x){
//   console.log("map"+x);
// })
//abcde.map(x=> console.log(x));

// var fullName  = {
// fname:'srinivas',
// lname:'kandlikar',
// age: 30,
// gender: 'male'
// }

// var details = function (x){
// var a = x.fname +" "+ x.lname;
// console.log(a.split());

// }
// details(fullName)



// const dogs =[
//   {weight:22, curFood:250,owner:['Alice','Bob']},
//   {weight:8, curFood:200,owner:['Matilds']},
//   {weight:13, curFood:275,owner:['sarah','JOhn']},
//   {weight:32, curFood:340,owner:['Michel']},

// ]

// dogs.forEach(function(x){
//   console.log(x.weight);
// })

// var xyz = function (x){

//   for(var i=0; i<x.length;i++){


// //console.log(x[i].weight +" "+ x[i].curFood);

// // console.log(Math.floor(x[i].weight **0.75 * 28));
// var presentweight = Math.floor(x[i].weight **0.75 * 28);

// // console.log(x[i].owner);
// var ow = x[i].owner;
// // console.log(ow);

// // owner.forEach(x => console.log(x.length));



// // for(var n =0 ; n< owner.length; i++){
// //   console.log(owner[n]);
// // }
// //   }
//   //console.log(x[0].weight);

// var curweight = x[i].curFood;
// console.log(curweight  +' '+presentweight);
// if(presentweight > curweight){
//   console.log(" i am greater");
//  // console.log(ow[0]);
// for (let peto =0; peto < ow.length;peto++){
//   console.log(ow[peto]);
//   // console.log("please contact"+ " "+ ow[0]);
//   // console.log("you are dog is over weight");i

// }
// }
// else {
//   console.log('i am less');
// }
// //console.log(x[i].curFood);


// }
// }

// xyz(dogs);
//var arr=[];


// var booking= function(fname,time){
// var obj={

// fname,
// time

// }

// var str = JSON.stringify(obj);
// console.log(str);

// console.log(
// arr.push(obj));
// }
// booking('sri123',9);

// booking(`vidhu`,1);



// const getContrydata = function(country){

//   // var a  =`${country}`;
//   // console.log(a)
// fetch('https://restcountries.com/v2/name/${country}').then(function(response){
// console.log(response);

// });

// }
// getContrydata('portugal')






// var arr = [];

// function abc (){


// document.getElementById('onsubmit').addEventListener('click', function(){
//   var nmvalue= document.getElementById('nmvalue').value;
//   var gendervalue= document.getElementById('gender').value;
//   var psnumbervalue = document.getElementById('psvalue').value;
 

//   console.log(nmvalue);


// })
// }

// function hdsgdg(){
//   abc();
//   console.log(nmvalue);

// }
// hdsgdg();



// export var fetchingdata = async function(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
 
// }
// fetchingdata();



// function testreturn(){
//   return "hi srinivas";
// }
// testreturn();


// var account = {
//   owner:'srinivas',
//   movements :[100,120,34,45646,3435]
// }
// console.log(account.owner);

// // var a = account.movements[0];
// //console.log(a)




// var abcde = account.movements;

// abcde.forEach((x,index) => console.log(index + ":" +  x));


// function testdata(a){
//   console.log("from function" + a)
// }
// testdata(abcde);

// for(var a of abcde){
//   console.log(a);
// };
//console.log('dgdsg')





//object.create method
// var objproto = {

// }


// var testobj = Object.create(objproto);
// console.log(testobj);
// testobj.name ="srinivas";
// testobj.age =29;

