// singleton

// object literals

const mySym = Symbol("key 1");

const JsUser = {
    name: "kalpana",
    "ful name": "kalpanaPandey",
    [mySym]: "mykey",
    age: 22,
    location: "Mumbai",
    email: "kalpana@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["ful name"]);
// console.log(JsUser[mySym]);


// JsUser.email = "kalpana222@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "kalpana2@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello jsUser");
};

JsUser.greeting();

JsUser.greeting2 = function () {
    console.log(`hello jsusers, ${this.name}`);
};

JsUser.greeting2();