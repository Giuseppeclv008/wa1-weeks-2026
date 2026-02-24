"use strict" ;

/*
# Exercise Basic-1: Better Scores
_Goal: basic handling of JavaScript arrays_

Develop a small JavaScript program to manage the scores given to your user on website . Scores are integer numbers, and they may be negative. You should:
 
- Define an array with all the scores you received in chronological order. For simplicity:
  - Embed the scores directly in the source code.
- Duplicate the array, but:
  - Eliminate all negative scores (call \`NN\` the number of negative scores that are deleted).
  - Eliminate the two lowest-ranking scores.
  - Add `NN+2` new scores, at the end of the array, with a value equal to the (rounded) average of the existing scores.
- Print both arrays, comparing the scores before and after the "improvement," and showing the averages in both cases.
*/


const scores = [3, -2, 10, 0, -5, -8, 7, 4, -1, 9, 6] ;

const newscores = [] ; // make a copy of the scores array, but only with the non-negative scores
for (const value of scores) {
  if ( value >= 0 ) {
    newscores.push(value) ;
  }
}



for(const c of [1,2]){
  const min = Math.min(...newscores) ; // find the minimum value in the newscores array
  const pos_smallest = newscores.indexOf(min) ;
  console.log(`Removing the smallest score: ${min} at position ${pos_smallest}`) ;
  newscores.splice(pos_smallest, 1) ; // remove the smallest score from the newscores array
}
let avg  = 0.0; 
for (const value of newscores) {
  avg += value ;
}
avg /= newscores.length ;
avg = Math.round(avg) ;
console.log(avg);

// scores.filter(value => value >= 0) ; also a valid approach 
// Remove negative scores

// for (let i = 0; i < (scores.length - newscores.length); i++) { // the condition is evaluated at each iteration, the push reduces the value of 
//   newscores.push(avg) ;
// }

while(scores.length > newscores.length) { 
  newscores.push(avg) ;
}


console.log(scores)
console.log(newscores)

// for ( let i = 0; i<  newscores.length; i++ ) { // this approach is not optimal, but it is simple and straightforward
//                                                 // can induce bugs if not careful
//   const value = newscores[i] ;

//   if ( value < 0 ) {
//     newscores.splice(i, 1) ;
//     i--; 
//   }

//   console.log(newscores) ;
// }




