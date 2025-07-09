// VARIABLE kya h?    = ek memory (kise v language ke andr n hmre pass, 2trah ki memory hoti h,  )

//  Memory has 2 types 
// STACK                 = shadi me jo plates hoti h, jo akhir me hogi, oo sbse phle uthyenge.
// stack ke andr kya hota h, n apke jitne v variables hote h, n oo sb ise "stack memory" ko use krte h.

// const fname = 'priya'
// const lname = 'bharti'         ; jb ise particular lname k scope khtm ho jayega to, ya yaha se popout(hat) jayega,


// ** note:- jb sara kam stack se ho ja rha h, to heap ki kya jrurt h, yaha par stack ki ek problem stack "grow" ni kar skti h,
// kya array grow kr skta h, agr aj 10 "element" h, to kl 3 ho skte h,
// kya object ke andr 4 keys h, to 5 keys ho skti h, dynamically growable chize hoti h, waha pr stack km ni krta h,

// HEAP                   = 

// so, different different types ke data structures avilable h.

// ARRAY     = ke andr data key value ke from me store hote h.
// OBJECT    = ke andr data store hote h, keyvalue ke pair from me.

// obj:- banane ke liye {} k use krte h.

// obj ke andr app kise v trh ke hobbies rakh skte ho,

// like:- array, boolean,obj,function

const person = {
    firstname : 'Priya',
    lastname : 'bharti',
    hobbies: ["coding" , "gym"],
    ismarried : false,
    hasgf : false,
    getfullName : function() {
        return 'Priya bharti'
    }
}
console.log(person.getfullName);


// jadatar object k jo data h, o real life ke from me hi rhta h,

// Two types of world 
// 1. Real world
// 2. code world


// 1. Real world   = ki jo entity h,use kise v trh se code ke andr implement krna hoga,
// can i say remote is a real world example

const remote = {
    color: 'black',
    brand: 'xyz',
    dimensions: {height: 1, width: 1},
    turnoff: function() {

    },
    volumeup: function() {
        
    }
}