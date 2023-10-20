// // 1. Declare a variable firstname and initialize it with the value 'Lata  
// let firstname = "lata"
// // 2.Which value does x have after execution of the following code?
// let  x = 'Geta'
// // 3 Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'
// let flower = 'rose'
// let tree =  'maple'
// // 4 Which value does x have after execution of the following code?
// let x = 'Tic';
// x = 'Tac';
// x = 'Toe'
// // 5 Which value does x have after execution of the following code?    
// let x = 'Laurel';
// let y = 'Hardy';
// let z = y;
// y = x;
// x = z;
// // 6 Define a function hello that returns 'Hello world!'
// function hello (){
//     return 'hello word'
// }
// // 7 Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'
// function a (){
//     return 'a'
// }

// function b (){
//     return 'b'
// }
// // 8  Define a function greet returning the value  'Haydo!'   Declare a variable salutation Call the function greet and assign the result of the call to the variable salutation
// function greet(){
//     return 'Haydo!'
// }
// let salutation = greet();
// // 9 
// function hello() {
//     return 'Hi!';
//   }
  
//   let x = hello();

// // 10 Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2
// function echo(para){
// return para 
// }
// echo(CO2)
// // 11 Write a function greet having one parameter and returning 'Hello <parameter>!'.Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'.
// function reply(phrase) {
//     return phrase;
//   }
  
//   let x = reply('How do you do?');

// //   12  Which value does x have after execution of the following code? 
// function greet(name){
//     return 'hello'+ name

// }
// console.log(greet('MENGI'))
// // // 13  
// // Que vaut X 

// function whereIs(name) {
//   return 'Where is ' + name + '?';
// }

// let x = whereIs('Jacky');

// // 14 Which value does x have after execution of the following code? 

// function hi(name) {
//   return 'Hi ' + name + '!';
// }

// let h1 = hi('Selva');
// let h2 = hi('Pola');
// let x = h1 + ' ' + h2

// // 15  Write a function  shout that takes a string and returns this string duplicated. In addition, the return should be logged.
// function shout(name){
// return name+name
// }
// console.log(shout('mengi'))
// // // 16
// // Que vaut x
// function double(name) {
//   return name + ' and ' + name;
// }

// let x = double('Roy');
// // 17 Write a function length that takes a string and returns the number of characters of the string.

// function length(sun){
//     return sun.length
// }
// console.log(length('JEREMIE'))
// // 18  Write a function  toCase that takes a string and returns that string in lowercase and uppercase with- as delimiter.
// function toCase(str){
// return str.toLowerCase() + '-' + str.toUpperCase()
// }
// console.log(toCase("MENGI"))
// // 19 Write a function shortcut that takes two strings and returns the initial letters of theses strings
// function shortcut(name1,name2){
// return name1.charAt(0)+name2.charAt(0)
// }
// console.log(shortcut('Maman','Papa'))
// // 20 Write a function firstChar which returns the first character that is not a space when a string is passed.
// function firstChar(name){
//     return name.charAt(0)

// }
// console.log(firstChar('Rosalisa'))
// 21





// // SECOND SHEET


// // 1.
// let a = 0, 
//     b = 1, 
//     c = '1' 
// ;

// Que vaut (a === 0);   True       
// Que vaut (a === 1);   False
// Que vaut (a === b);   False
// Que vaut (a === 0 && b === 1);  True 
// Que vaut (a === 0 && b === 0); False
// Que vaut (a === 0 || b === 0); True 
// Que vaut (b === c); False 
// Que vaut (b == c);  true 
// Que vaut (a < b);  True 
// Que vaut (a >= b); False 
// Que vaut (a !== b); True 
// Que vaut (a === 0 && (b === 1 || b === 2)) true 
// Que vaut (a === 0 && true) true 

// // 2 Ecrivez une fonction qui prend 3 paramètres (mots).Concaténez les trois variables et vérifiez si sa taille est suppérieure à 100 alors affichez "C'est une grande phrase" sinon affichez "C'est une petite phrase".
// function mots(phrase1,phrase2,phrase3){
// const PhraseBase = phrase1+phrase2+phrase3
// if(PhraseBase.length>100){
//     console.log("C'est une grande phrase")
// }
// else{
//     console.log("C'est une petite phrase")
// }
// }

// 3. Déclarer et définir 2 variables misteryNumber et myNumber de type number.En utilisant uniquement l'opérateur ternaire, on affiche :
// const misteryNumber = 1
// const myNumber  = 1

// const Numbers =  misteryNumber == myNumber?Congratulations:misteryNumber < myNumber?'+':misteryNumber> myNumber?'-';
// console.log(Numbers);