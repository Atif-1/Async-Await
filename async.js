console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async ()=>{

const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('ticket');
 	},3000)
});

const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn')); 
const addbutter=new Promise((resolve,reject)=>
	resolve('butter'));
const getDrink=new Promise((resolve,reject)=>resolve('cold drink'));

let ticket=await promiseWifeBringingTicks; 

console.log(`wife: i had ${ticket}`);
console.log(`husband:we should go in`);
console.log('wife: no i am hungry');

let popcorn=await getPopcorn;

console.log(`husband:i got some ${popcorn}`);
console.log('husband:we should go in');
console.log('wife:i need butter on my popcorn');

let butter=await addbutter;

console.log(`husband:i got some ${butter}`);
console.log(`husband:lets go in we are getting late`);
console.log('wife:i need cold drink');
 
let drink=await getDrink;

console.log(`husband:i have ${drink}`);
console.log(`husband:anything else`);
console.log('wife:i am going to get some candies you buy the burgers');
 
let getCandy=new Promise((resolve,reject)=>resolve('candy'));
const getBurger=new Promise((resolve,reject)=>resolve('Burger'));

let [candy,burger]=await Promise.all([getCandy,getBurger]);
console.log(`got ${candy} ${burger}`);
console.log('husband and Wife:lets goooooooo')
return ticket;
};
 preMovie().then((m)=>console.log(`person3: shows${m}`));
 console.log('person4: shows ticket');
 console.log('person5: shows ticket');