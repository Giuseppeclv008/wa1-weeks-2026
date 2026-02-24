"use strict" ;

/*
# Exercise Basic-2: My Users' List
_Goal: basic handling of JavaScript strings_

Develop a small JS program to manage the list of users in a website.

- Define the names of users as a comma-separated list.
  - For instance: `"Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scibetta, Alberto Monge Roffarello"`.
- Parse the string and create an array containing one name per array position.
  - Beware: no extra spaces should be present.
- Create a second array by computing the acronyms of the people as the initial letters of the name. Acronyms should be in all-capital letters.
  - For example, `Luigi De Russis` -> `LDR`.
- Print the resulting list of acronyms and the full names.
  - Extra: in alphabetical order of acronym.
*/

const names = "Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scibetta, Alberto Monge Roffarello" ;

const list_names = names.split(",") ;
console.log(list_names)

for (let i = 0; i< list_names.length; i++) {
  list_names[i] = list_names[i].trim() ;

}
console.log(list_names)
const acronyms = [] ;

for( const value of list_names) {
 
  let name_parts = value.split(" ") ;
  let acronym = "" ;

  for (const part of name_parts) {
    acronym += part[0] ;
  }

  acronyms.push(acronym.toUpperCase()) ;

}
acronyms.sort() ;
console.log(acronyms) ;

// we can also implement a solution by means of a map 
// const list_2 = []
// for (const name of list_names) {
//   list_2.push(name.trim()) ;
// }


// doesn't work because name is a copy of the value in the array, not a reference to the value in the arraytt
// console.log(list_name of list_names) {
//   name.trim() ; // remove extra spaces from the name if we use name = name.trim() we modify the reference 
// }