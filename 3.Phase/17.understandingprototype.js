Array.prototype = {properties}
// ARRAY = y base/parent class h, uske andr ek prototype h, ab ise prototype ke andr saare functions sabhi property avilable h, 

// .map, .filter, .reduce, .forEach, .push, .pop, .shift, .unshift, .splice, .slice, .indexOf, .lastIndexOf, .find, .findIndex, .every, .some
//  jitni v property h, sb avilable h,


const arr = [1,2,3,4]
//  ab jb aap ek AARAY ko ek object bante ho, 
//  ise array class (arr) ko aap use krte ho, to 

arr.__proto
// to js kya krti h, ise obje ke andr jo child h, n iske andr ek dot underscore,underscore nam k ek "proto" yani proerty banti h.

// EXAMPLE:- {skin,height,eyecolor, hair} y sb properties h, jo ki prototype se aate h, yani ki parent se aate h, yani ki base class se aate h.
//  to yaha par bhi aapko ek prototype property milegi, yani ki arr.__proto__

