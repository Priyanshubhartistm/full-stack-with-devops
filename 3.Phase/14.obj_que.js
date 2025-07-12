// 1. Problem : create an object representing a type of tea with properties for name,type,and caffeine content.

const teas = {
    name: "Lemon Tea",
    "tea type": "Herbal",
    caffeine: "low"
};
console.log(teas.name);
console.log(teas["tea type"]);

// 2. Problem : Add a new property origin to the teas object.
teas.origin = "Assam";
console.log(teas);

// 3. Problem : Change the caffeine level of the tea object to "medium".
teas.caffeine = "medium";

// 4.  Problem : Remove the type property from the teas object.
delete teas.type;

// 5. Problem : Check if the tea object has a property origin.
console.log("origin" in teas);

// 6. Problem : Use a for ...in loop to print all properties of the tea object.
for (let key in teas) {
    console.log(key + ": " + teas[key]);
}


// 7. Problem : Create a nested object representing different types of teas and their properties.
const teaCollection = {
    greenTea: {
        name: "Green Tea",
        type: "Green",
        caffeine: "medium",
        origin: "China"
    },
    blackTea: {
        name: "Black Tea",
        type: "Black",
        caffeine: "high",
        origin: "India"
    },
    herbalTea: {
        name: "Herbal Tea",
        type: "Herbal",
        caffeine: "none",
        origin: "Egypt"
    }
};

// 8. Problem : Create a copy of the tea object.
