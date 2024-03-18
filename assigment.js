//question 2;
//console.log("hello world!");
//question NUMBER (3)
//let person_name = "Muhammad Ammad Amir";
//console.log (`Uppercase:${person_name.toUpperCase()}`);
//console.log (`Lowercase:${person_name.toLowerCase()}`);
//function titleCase(personname :string){
//let name;
//name = personname.toLowerCase().split(" ")
//for (let i = 0;i < name.length;i++){
//    name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
//  }
//  return name.join(" ");
//}
//console.log(`TitleCase: ${titleCase("Muhammad Ammad Amir")}`);
//Question NUMBER 4
//let quote: string = "A person woh never made a mistake naver tried anything new."
//let author: string = "Albert Einstein";
//console.log(`${author} once said, "${quote}"`);
//Question NUMBER 5
//let famous_person: string = "Albert Einstein";
//let message: string = `${famous_person} once said,"${`quote`} "`;
//console.log(message);
//Question NUMBER 6
//let personName: string = "\t\n JAVASCRIPT and TYPESCRIPT \n\t";
//console.log("Original :",personName)
//console.log("stripped:", personName.trim());
//QUESTION NUMBER   7and 8;
//console.log(5+3)
//console.log(10-2)
//console.log(4*2)
//console.log(16/2)
//question 9;
//let favouriteNumber: number = 10
//console.log(`My favoriteNumber is ${favouriteNumber}`);
//Question NUMBER 10
//let author:[``]
//let Data:[``]
//console.log(`Aliishba Rehman`);
//console.log(`Friday,july,2005`);
//11;
//let names : string [] = ["ALI", "Ahmmad","REHAN"];
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//question 12;
//let names:string[] = ["ali","faizan","RIZwan"]
//let message : string = "Do YOU LIKE TO PLAY FOTboll?";
//console.log(names[0] +" " + message)
//console.log(names[1] +" " + message)
//console.log(names[2] +" " + message)
//Question NUMBER 13
//let transpotation  : string[] = ["CAR","BIKE","ONE TWO FIVE"]
//transpotation.map((items) => console.log(`I would like to own a ${items}`));
//question 14;
//let guestArr : string [] =["Ali","faizan","RIZWAN"]
//guestArr.map((items) => ( console.log(`Dear ${items},YOU are invited to the lunch and Dinner`) ));
//question 15;
//let GuestArr : string[] =["Mehak","Muskan","Hiba","Alishba"]
//let canNotAttend : string ="Alishba"
//console.log(canNotAttend +" " "can Not Attend the Dinner");
//let newGuest : string = "Alishba"
//GuestArr [GuestArr .indexOf(canNotAttend)] = newGuest;
//GuestArr.map ((items) =>
//console.log(`Dear ${items},YOU are invited to the Dinner.`)
//)
//question 16;
//let guestlist:Array<string>=[
//"zia khan",
//"sir ali",
//"sir qasim",
//];
//step1;
//for (let guest of guestlist){
//console.log(`hello ,${guest} we found a bigger dinner table`)
//}
//step 2 ;
//let newGuestatbeginnibg:string="ali phool"
//guestlist.unshift(newGuestatbeginnibg)
//console.log(guestlist)
//3 step
//let newguestinmiddle:string="mia asif";
//let middleindex:number=Math.floor(guestlist.length/2);
//guestlist.splice(middleindex,0,newGuestatbeginnibg);
//console.log(guestlist);
//step4;
//let newguestEnd:string="muhammad ali "
//guestlist.push(newguestEnd)
//console.log(guestlist)
//question 17;
//let guests: string[] = ["rehman","bilal","hamza","Rizwan","Rehan"];
//console.log("Due to limited space, only two people can be invited for dinner")
//
//while (guests.length > 2){
//   const removedGuests = guests.pop();
//   console.log (`Sorry,${removedGuests}, You're no longer invited to dinner .`)
//}
//guests.forEach((guest) => {
//
//  console.log(`dear ${guest},you're still invited to dinner.`);
//    
//});
// guests.pop();
//guests.pop();
//console.log("final guest list:",guests);
//question 18;
//let placestovisit: string[]=["tokyo","pakistan","china","america","japan"];
//console.log("original order:",placestovisit);
//placestovisit.reverse();
//console.log("reversed order:",placestovisit);
//placestovisit.reverse();
//console.log("back to original order:",placestovisit);
//sort the array in alphabetical order 
//placestovisit.sort();console.log("sorted in alphabetical order:",placestovisit);
//placestovisit.sort((a, b) => b.localeCompare(a));
//console.log("sorted in reverse alphabetical order:",placestovisit);
//question 19
//const numberofGuests:number=5;
//console.log(`you are inviting ${numberofGuests} people to dinner.`);
//question 20;
//let country: string[ ]=["pakistan","india","china","newyork","japan"];
//console.log("list of country:");
//console.log(country);
//question 21;
//let person:{name:string,fname:string,age:number}={name:"alishba M.Rehman",fname:"female",age:17};
//console.log(person);
//question 22;
//const days :string[]=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//console.log(days{7});
//console.log(days[6]);
//question 23;
//let car = "subaru";
//console.log("is car == `sabaru`? i predict true.");
//console.log(car ==`subaru`);
//2.
//let number=17;
//console.log("is number>5? i predict true.");
//console.log(number>5);
//3.
//let fruit=`mango`;
//console.log("is fruit!=`grapes`? ipredict true.");
//console.log(fruit!=`grapes`);
//4.
//let age =17;
//console.log("is age<30? i predict true.");
//console.log(age<30);
//5.
//let isRaining = true;
//console.log("is it raining? i predent true.");
//console.log(isRaining);
//6.
//let day = "sunday";
//console.log("is day==`friday`?i predict false");
//console.log(day ===`friday`);
//7.
//let temperature =90;
//console.log("is tempeature >=60?i predict true.");
//console.log(temperature>=60);
//8.
//let time = `morning`;
//console.log("is time !==`nignt`? i predict true.");
//console.log(time!==`night`);
//9.
//let issunny =false;
//console.log("is it sunny? i predict false.");
//console.log(issunny);
//10.
//let month =`may`;
//console.log("is monthb===`june`?i predict false.");
//console.log(month===`june)
//Question-24
//Tests for equality and inequality with strings
//let country = 'PAKISTAN';
//console.log("Is country equal to 'PAKISTAN'? I predict True.");
//console.log(country == 'PAKISTAN');
//console.log("Is country not equal to 'Canada'? I predict True.");
//console.log(country != 'Canada');
// using the lower case function
//let city = 'New York';
//console.log("Is city lowercase equal to 'new york'? I predict True.");
//console.log(city.toLowerCase() == 'new york');
// involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//let num1 = 10;
//let num2 = 5;
//console.log("Is num1 greater than num2? I predict True.");
//console.log(num1 > num2);
//console.log("Is num1 less than or equal to num2? I predict False.");
//console.log(num1 <= num2);
//using "and" and "or" operators:
// let isOk = true;
//let isNotOk = false;
//console.log("Is it a weekend and sunny? I predict False.");
//console.log(isOk && isNotOk);
//console.log("Is it a weekend or sunny? I predict True.");
//console.log(isOk || isNotOk);
// // array
//let fruits = ['apple', 'banana', 'orange'];
//console.log("Is 'banana' in the fruits array? I predict True.");
//console.log(fruits.includes('banana'));
//console.log("Is 'grape' not in the fruits array? I predict True.");
//console.log(!fruits.includes('grapes'));
//question 25;
//let alien_color:string = 'green'
//if (alien_color === 'green') {
//       console.log("the player just earned 5 points.");
//}
// second version;
//alien_color = 'blue'
//if (alien_color=='green'){
// console.log("congratulation! you just earned 5 point.")
//}
//question 26;
//let alien_color:string='green';
//if(alien_color==='green'){
//console.log('congratulation!you jusy earned 5 point for shooting the alien.');
//}else{
//console.log('congratulation!you just earned 10 points for shooting the alien');
//}
//version second;
//console.log('\n2nd version of code')
//alien_color= 'blue';
//if (alien_color==='green'){
//console.log('congratulation!you just earned 5 point for shooting the alien.');
//}
//else{
///console.log('congratulations!you just earned 10 point for shooting the alien');
//}
//export{};
//question 27;
//version 1;
//let alien_color: string = 'green';
//if (alien_color === 'green') {
//  console.log("The player earned 5 points.");
//} else if (alien_color === 'yellow') {
//  console.log("The player earned 10 points.");
//} else if (alien_color === 'red') {
//  console.log("The player earned 15 points.");
//} else{
//console.log('unknow alien color.');
//}
//version2
//alien_color='yellow'
//if (alien_color === 'green') {
//  console.log("The player earned 5 points.");
//}else if (alien_color === 'yellow') {
//    console.log("The player earned 10 points.");
//  } else if (alien_color === 'red') {
//     console.log("The player earned 15 points.");
//}
//version3;
//alien_color = 'red';
//if (alien_color === 'green') {
//  console.log("The player earned 5 points.");
// } else if (alien_color === 'yellow') {
//console.log("The player earned 10 points.");
//} else if (alien_color === 'red') {
//   console.log("The player earned 15 points.");
// }
//question 28;
//let age: number = 25;
///if (age < 2) {
//console.log(`age is ${age},the person is a baby`);
//}else if (age<4) {
//  console.log(`age is ${age},The person is a toddler.`);
//} else if (age<13) {
//    console.log(`age is ${age},The person is a kid.`);
//} else if (age<20) {
//  console.log(`age is ${age}, The person is a teenager.`);
//} else if ( age < 65) {
//  console.log(`age is ${age},The person is an adult.`);
//} else {
//    console.log(`age is ${age},The person is an elder.`);
//}
//question 29;
// Create an array of favorite fruits
//let favorite_fruits: string[] = ['mango'];
// Check for specific fruits in the array using if statements
//if (favorite_fruits.includes('apple')) {
//   console.log("You really like apples!");
//}
//if (favorite_fruits.includes('mango')) {
//    console.log("You really like mango!");
//}
//if (favorite_fruits.includes('orange')) {
//    console.log("You really like oranges!");
//}
//if (favorite_fruits.includes('strawberry')) {
//  console.log("You really like strawberries!");
//}
//if (favorite_fruits.includes('kiwi')) {
//  console.log("You really like kiwis!");
//}
//question 30;
//const usersName: string []=[`Ali`,`Bilal`,`Rizwan`,` Rehan`,`Farhan`];
//function greetusers(): void{
// for(const i in usersName){
//      if (usersName[i].toLowerCase()===Rizwan){
//          console.log(Hello Rizwan,you're invited for Rizwan)
//    } else{
//      console.log(Hello  ${usersName[i]},Thanks for You)
//}
//}
//}
//greetusers()
//Question NUMBER 32
//step 1
//const current_users: string[]=["Ali","Bilal","Rizwan","Rehan","Faisal","owais"]
//const new_users: string[]=["Anusha","Alishba","Hiba","Yusra","Subhana"]
//. map
//const num1: number[]=[1,2,3,4,5,6,7,8,9,10]
//console.log(num1)
//const num2 : Number[]= num1.map (i => i*2)
//console.log(num2)
// step 2
//function checkuserNames(current_users: string[],new_users:string[]):void
///{
//1st step of function
// const lowerCasedcurrentusers= current_users.map(user => user.toLowerCase())
//2nd step of function
//for (const newuser of new_users){
//  const lowerCasedNewUsers = newuser.toLowerCase();
//
//    if (lowerCasedcurrentusers.includes(lowerCasedNewUsers)){
///
//     console.log(username "${newuser}" is already taken.please entry a new username.)
// } else {
// console.log(`username "${newuser}" is available. `)
//}
//  }
//}
//Question 33
//const numbers: number[]=[1,2,3,4,5,6,7,8,9]
//for (const number of numbers){
//let ordinal :string;
//if (number ===1){
//ordinal ="st";
//}else if (number ===2){
//ordinal = "nd";
//} else if (number ===3){
// ordinal ="rd";
//}else {
//ordinal ="th"
//}
//console.log (`${number}${ordinal}`);
//}
//Question 34
//const favoritepizza = [`pepperoni`,`Margherite`,`BBQ chicken`]
//console.log ("My favorite pizzas are :")
//for (let i = 0 ; i < favoritepizza.length; i++){
//console.log (favoritepizza[i]);
//}
//console.log("\nI like these pizzas :");
//
//for (let i =0 ; i < favoritepizza.length; i++){
//console.log(`I like  ${favoritepizza[i]} + "pizza."`)
//}
//console.log("\nI really love pizza!")
//Question number 35
//const animals: string[]=[`cat`,`dog`,`goat`]
//console.log ("list ot animals:");
//for (const animal of animals){
//console.log(animal);
//}
//console.log("\nstatements about each animal:");
//for (const animal of animals){
//if (animal === `dog`){
//console.log (`A ${animal} is a great pet.`);
//}
//else if (animal === `cat`){
//console.log (`A ${animal} would be a good compantion at home.`);
//}else if (animal === `goat`){
//console.log(`An${animal}is an adorable pet that also give us milk.`)
//}
//}
//console.log("\nwhat these animals have in common :")
//console.log("Any of these animals could be a gread pet!")
//Question Number 36
//const make_shirt = (size : string, Message: string )
//: //void  =>
//{
//console.log(`size: ${size}, Message:  '${Message}'`);
//}
//let size : string = "medium";
//let message :string = "Typescript"
//make_shirt(size,message);
//make_shirt("large ","typescript")
//Question Number 37
//function makeshirt(size :string = "Large",message:
//String = "I love typescript"): void 
//{
//return console.log(`size :${size},Message: '${message}'`);
//}
// makeshirt();
//makeshirt("Medium")
//makeshirt("Small","Hello, typescript!")
//Question Number38
//function describe_city(city :string, country: string 
//  = "Unknown country"): void 
//{
//console.log(`${city} is in ${country}.`);
//}
//describe_city("Karachi","pakistan");
//describe_city("New york");
//describe_city("Berlin","Germany")
//question 29;
// Create an array of favorite fruits
//let favorite_fruits: string[] = ['mango'];
// Check for specific fruits in the array using if statements
//if (favorite_fruits.includes('apple')) {
//   console.log("You really like apples!");
//}
//if (favorite_fruits.includes('mango')) {
//    console.log("You really like mango!");
//}
//if (favorite_fruits.includes('orange')) {
//    console.log("You really like oranges!");
//}
//if (favorite_fruits.includes('strawberry')) {
//  console.log("You really like strawberries!");
//}
//if (favorite_fruits.includes('kiwi')) {
//  console.log("You really like kiwis!");
//}
//Question NUMBER 40
//function make_album(artist: string, title: string,
//tracks?: number):
//{ artist : string;title: string; tracks?:number}
//{
//const album = {
//artist,
//title,
//tracks
//};
// if (tracks ! == undefined){
// album.tracks = tracks;
//}
//return album;
//}
//const album1 = make_album('Vitel sisns','Hum TUm');
//const album2 = make_album('Artist 2','Album 2',12);
//const album3 = make_album('Artist 3 ','Album 3',8)
//console.log(album1);
//console.log(album2)
//console.log(album3)
//Question NUMBER41
//}const magicianNames:string[]=["Harry porter","David Copperfied","Hermione Granger","professor Albus Dumbledore"]
//function show_magicians(magicians: string[]):void
//{
// for (const  items of magicians){
//  console.log(items);
//}
//}
//show_magicians(magicianNames)
//Question Number42
//const magicianNames: string[]=["Harry porter","David copperfied","Hermione Granger"]
//function showmagicians(magicians: string[]): void{
//for(const magician of magicians){
//console.log(magician)
//}
//}
//function make_great(magicians: string[]): string[]{
//const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
//return greatMagicians
//}
//const greatMagiciansNames : string[] = make_great(magicianNames)
//console.log("Original Magicians:");
//showmagicians(magicianNames)
//console.log("\nGreat Magicians:");
//showmagicians(greatMagiciansNames)
//Question Number 43
//const magicianNames: string[]=["Harry porter","David copperfied","Hermione Granger"]
//function showmagicians(magicians: string[]): void{
//for(const magician of magicians){
//console.log(magician)
//}
//}
//function make_great(magicians: string[]): string[]{
//const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
//return greatMagicians
//}
//const greatMagiciansNames : string[] = make_great(magicianNames)
//console.log("Original Magicians:");
//showmagicians(magicianNames)
//console.log("\nGreat Magicians:");
//showmagicians(greatMagiciansNames)
//Question NUMber44
//function makeSandwich (...items: string[]):void {
//console.log("sandwich Summary:")
//if (items.length === 0){
//console.log(" You ordered an empty sandwich.")
//}else {
//items.forEach((item, i)=>{
//  console.log(`  ${i + 1}. ${item}`);
//});
//}
//console.log("\n")
//}
//makeSandwich()
//makeSandwich("Turkey","Tomato","Mayonnaise")
//makeSandwich("Ham","Cheese")
//makeSandwich("Peanut Butter","Jelly","Banana","Honey")
//Question Number45
//function CreateCar(manuFacturer: string, model: string,...
//properties:[string, any ][]):any {
//const car:any = {
//manuFacturer,
//model,
//};
//for (const [key, value]of properties){
//car [key]= value
// }
//return car;
//}
//const myCar : string= CreateCar("Toyota","Corolla",["colour","red"],["optionalFeature","sunroof"])
//console.log(myCar)
//Fainal  45 QUESTION COmpelete
