// server call, rainy, cloudy, sunny
//  ise ko batne ke liye ham condition sikhte h,
// condition agr "true" hogi to , ise curely baracies ke andr jo v kam hoga , oo execute hoga.
// agar execute ni hoga, to yaha hm apana "else" case likh dete h.But dono me se ek hi kam hoga. sb ni hoga

// == means value assign krte h.
// === but y sirf check krta h, mtlb value poochte h

let weather = "sunny"

if (weather === "rainy") {
    console.log("it's raining, umbrella le jaana bhai");
    
} else if (weather === "cloudy") {
    console.log("jakcet le ja bhia ");

} else if (weather === "sunny") {
    console.log("sunny h, ji aaj to");
    
}

console.log(weather == "rainy");   // false 
