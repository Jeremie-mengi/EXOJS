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

// // 3. Déclarer et définir 2 variables misteryNumber et myNumber de type number.En utilisant uniquement l'opérateur ternaire, on affiche :
// const misteryNumber = 6
// // const myNumber  = 30

// // const Numbers = misteryNumber == myNumber?'Congratulations':misteryNumber > myNumber?'+':'-';
// // console.log(Numbers);
// // 4. Create Function `findLargest()` finds the largest of three numbers
// // function findLargest(nbr1,nbr2,nbr3){
// //      return Math.max(nbr1,nbr2,nbr3)
// // }
// // console.log(findLargest(10,40,100))
// // 5.Create which Check if a triangle is equilateral, scalene, or isosceles Function `findTriangleType()` finds the type of the triangle for given side values
// function findTriangleType(A,B,C){
//     const som = A+B+C
//     const Equi =  (A==B && B==C && C==A);
//     const iso =  (A==B || B==A || C==A || C==B );
//     if (Equi){
//         console.log('TRIANGLE EQUILATERAL')
//     }
//     else if (iso){
//         console.log('TRIANGLE ISOCELE')
//     }
//     else{
//         console.log('TRIANGLE SCALENE')
//     }
   
   
// }
// console.log(findTriangleType(40,80,50))
// 6.
// 7. 
// function evalNumbers(num1,num2,resultat){
  
//     switch(resultat){
//         case 'add':
//         console.log(num1 + num2)
//         break;
//         case 'subtract':
//         console.log(num1-num2)
//         break; case 'multiply':
//         console.log(num1*num2)
//         break; case 'divide':
//         console.log(num1/num2)
//         break; case 'modulus':
//         console.log(num1%num2)
//         break;
//         default: 
//         console.log('existe pas');
       
//         }
//     }
// evalNumbers(20,20,'modulus')
// 8.
// function checkLeapYear(annee){
// if(annee%4===0 && annee%100 !==0|| annee%400===0){
//     console.log("année bissextile");
// }
// else{
//     console.log("Pas année bissextile ")
// }
// }
// checkLeapYear("2020")

// 9. 
// function findDaysInMonth(mois,annee){
//    const nbrmois = mois>0 ||  mois<=12

//    if(!nbrmois){
//     console.log("Mois Invalide");
//    }
//    else if (nbrmois && mois==2 && (annee%4===0 && annee%100 !==0|| annee%400===0)){
//         console.log("29jours");

//     }
//     else if (nbrmois && mois==2 && (annee%4 !==0 && annee%100 === 0|| annee%400!==0)){
//         console.log("28jours");

//     }
//     else if (nbrmois && mois==4 || mois==6 ||mois==9 || mois==11){
//         console.log("30jours");

//     }else{
//         console.log("31jours");
        
//     }
//     // }else if (Nbrmois && mois==5){
//     //     console.log("31jours");

//     // }else if (Nbrmois && mois==6){
//     //     console.log("30jours");

//     // }else if (Nbrmois && mois==7){
//     //     console.log("31jours");

//     // }else if (Nbrmois && mois==8){
//     //     console.log("31jours");

//     // }else if (Nbrmois && mois==9){
//     //     console.log("30jours");

//     // }else if (Nbrmois && mois==10){
//     //     console.log("31jours");

//     // }else if (Nbrmois && mois==11){
//     //     console.log("30jours");

//     // }else if (Nbrmois && mois==12){
//     //     console.log("31jours");

 
//     }
// findDaysInMonth(-12,2023);

// Table de multiplication 

// function printMultiplicationTable() {
//   let mult = [];
//   for(let j = 1; j<=12; j++ ){
//     for (let i = 1; i <= 10; i++) {
//       mult.push( ${j} x ${i} = ${j * i});
//     }
//   }
  
//   console.log(mult.join("\n"));
// }



// // 3ieme PARTIE
// // 1.
// function VerTable(VarTable){
//     if(Array.isArray(VarTable) ){
//       console.log("Tableau")
      
//     }else{
//         console.log("Pas de Tableau") 
//     }
   
// }
// VerTable("ggjhkzdk")

// // // 2.
// function ElmntArrays(table,n){
// for(let i=0; i<n ; i++){
//     console.log(table[i])

// }

// }
// ElmntArrays([2,4,5,6],2)
// console.log(ElmntArrays([4,5]))

// 3.

// function ElmntArrays(n){
//     if(Array.isArray(n) ){
//         return n[n.length-1];
        
// }
// }
// console.log(ElmntArrays([4,5,10,45,32,40]))

// // 4.

// myColor = ["Red", "Green", "White", "Black"]
// console.log(myColor.join(","))

// 5.
// function insertHyphen(str) {
//     var strArr = str.split('');
//     var numArr = strArr.map(Number);
//       for(var i = 0; i < numArr.length; i++) {
//         if(numArr[i-1]%2===0 && numArr[i]%2===0) {
//           numArr.splice(i, 0, '-');
//         }
//       }
//     return numArr.join('');
//   }
//   console.log(insertHyphen('2244864'));
// 
// 6.
// const arr = [1, 2, 3, 4];
// const redu = (a, b) => a + b;
// console.log(arr.reduce(redu))

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

// 7. 
// var tab = [3, 6, 1, 9, 2]
// tab.sort();
// console.log(tab);
// 8.


// Troisieme partie Objet 

// 1. 


// 2.
// const mengi = {
//     nom : "mengi",
//     Postnom :"Imvwama",
//     Prenom : "Jeremie",
// //     Sexe: "M",
// //     Telephhone : "0813961583",
// //     color:"red"
// // }
// // delete mengi.color;
// // console.log(mengi);
// // 3.
// let entrepot = {
//         shoe_1  : {
//         numero : "20",
//         marque : "Yoji",
//         provenance : "japon"
//     }, 
//         shoe_2 : {
//         numero : "20",
//         marque : "adidas",
//         provenance : "tailland"
//     }, 
//         shirt_1 : {
//         taille : "20",
//         marque : "Dolce & Gabane",
//         provenance : "Angletterre"
//     }, 
//         shirt_2 : {
//         taille : "20",
//         marque : "Gucci",
//         provenance : "Turquie"
//     }, 
// }
// // // // 4.

// const cat = {
//     tiredness : 9,
//     hunger : 5,
//     lonliness : 0,
//     happiness : 0,

//     sleep : function(){
//         this.tiredness -= 1
//     },
//     eat : function(){
//         this.hunger -= 1
//     },
//     pet : function(){
//         this.lonliness += 1
//     },
//     handelHappiness : function(){
//         let counter = 0;
//         if(this.tiredness === 0){
//             counter++;
//         };
//         if(this.hunger === 0){
//             counter++;
//         };
//         if(this.lonliness > 0 ){
//             counter++;
//         };
//         this.happiness += counter

//     }
// };
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();
// cat.sleep();

// cat.eat();
// cat.eat();
// cat.eat();

// cat.eat();
// cat.eat();
// cat.pet();
// cat.pet();
// cat.pet();
// cat.handelHappiness();
// console.log(cat);

// // 5.
// const recipe = {
//     title : " ",
//     servings : 0,
//     ingredients : []
// }
// recipe.title = "Mole"
// recipe.servings = 2 
// recipe.ingredients = ["cannelle", "cumin", "cacao"]
// console.log(recipe.title);
// console.log(recipe.servings);
// console.log(recipe.ingredients);

// // 6.
// const livres = [{
//     title : "",
//     Auteur : "",
//     dejaLu : true
//     },{
//     title : "",
//     auteur : "",
//     dejaLu : true
//         } ]
//         for (let i in livres){
//         livres.title = "The Hobbit by J.R.R.";
//         livres.auteur = "Tolkien"

//         if(livres[i].dejaLu){
//             console.log( "Vous avez déjà lu Le Hobbit de J.R.R. Tolkien");
//         }
//         else{
//             console.log("Vous devez encore lire e Seigneur des Anneaux de J.R.R. Tolkien");
//         }
         
//         }
//         console.log(livres);


       
// // 7
// const food = {
// name : "fruit",
// description : "mangue",
// bulk_price :5,
// consumer_price :"400", 

// }
// const print = {
// unique : function(){
//     return food.name + ' ' + food.description
// },

// prixPrint : function(){
//     if(food['bulk_price'] === 5){
//         return (( food["bulk_price"] * 15 / 100 ))
//     }
//     else{
// return food["bulk_price"]
//    }    
// }
// }
// console.log( print.prixPrint());

// // 8.
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 }
// console.log(Object.values(student).length)

// 9.
// const book = {
//      auteur : "Bill Gates", 
//      titre : "The Road Ahead", 
//      etatdelecture : true,
//      sleep : function(){
//                 return this.auteur + ' ' + this.titre + ' ' + this.etatdelecture
//             }
// }
// book.sleep();
// book.sleep();
// book.sleep();

// console.log(book.sleep());

// 10.
// const library = [ { auteur : 'Bill Gates', titre : 'The Road Ahead', 
// ReadingStatus : true }, 
// { auteur : 'Steve Jobs', titre : 'Walter Isaacson',
//  ReadingStatus : true },
//   { auteur : 'Suzanne Collins', 
//  titre : 'Mockingjay : Le dernier livre de The Hunger Games', 
// lectureStatus : false }] ;
// console.log(library[0],library[1],library[2]);

// Partie 5 
// 1.
// const ul = document.getElementsByTagName("ul")[0];
// const fruitList = ["apple", "banana", "tomato"];
// for (let i = 0; i < fruitList.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = fruitList[i];
//   ul.appendChild(li);
// }
// console.log(fruitList);

// const fruitList = ["apple", "banana", "tomato"];
// //obtenir les elements ul via document....
// let ulList = document.querySelector('ul');
// for (let i=0; i<fruitList.length; i++) {
//     const li = document.createElement("li");
//     li.innerText = fruitList[i];
//     ulList.appendChild(li);
//     }
// console.log(fruitList);
// 2.
const div = document.querySelector(div)

// 3.
////Change the text in the first and the last list item element 
//in every unordered list element on this page. Change it to 'first' and 'last'.

const elements = document.querySelectorAll('ul'); //recuperation de la liste //
for(let i=0;i<elements.length; i++){   //parcourrir le tableau qui a des ul comme indices //
const ul = elements[i]; //affecter le parcour du tableau dans une variable //
const firstListItem = ul.children[0]; //affecter les premiers enfants de tous les ul(indices) dans la variable firstListItem//  
const lastListItem = ul.children[ul.children.length - 1]; //affecter les derniers enfants de tous les ul(indices) dans la variable lastListItem//
firstListItem.textContent = 'first'; // affecter la valeur 'first' dans la variable firstListItem//
lastListItem.textContent ='last';   //affecter la valeur 'first' dans la variable firstListItem//
};

// 4.

const 




// let numbers = [5,2,8,1,7]
// numbers.sort()
// let result = numbers[1] + numbers[-2]
// console.log(result);




