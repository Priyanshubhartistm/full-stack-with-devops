let teas = ["masala", "orange", "golang", "gingar", "lemon", "rose"]

// teas[h]

teas.length  // 6

// let h = 2;   // h<=5 || h<6
// LOOP :- loop another name "iteration" . that's why iteration k 1st word "i" h, so i likh dete h, loop me ; and uske bad "j" ata h,to usko laga dete h.

// LOOP likhne k syntax :- 
/* 1st kam :- variable leke aao. "let"
2nd :- variable name "h"
3rd :- or usko start kar do zero se, (bcz array ki 1st value 0 h)
*/
for (let h = 0; h < teas.length; h++) {
    console.log(`tea at index ${h}: ${teas[h]}`);

}
