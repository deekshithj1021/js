console.log("Hello World!");
console.log("connected with external js file");

/*console.log("!");
console.log("!");
console.log("!");
console.log("!"); MULTI LINE COMMENT*/
//console.log("Hello !") SINGLE LINE COMMENT;

/* CONSITIONAL STATEMENTS-if else*/
var a = 1;
var b = 2;
if (a + b > 4) {
    console.log(a + b);
}
else if (a + b < 1) {
    console.log(a + b);
}
else
    console.log("hi");


for (var num = 0; num < 11; num = num + 2)
    console.log(num);
var a = [1, 2, 3, 4];
a.forEach(item => console.log(item));
for (var item of a)
    console.log(item);
var num = 0;
while (num > 0) {
    console.log(num);
    num++;
}

var num = 0;
while (num < 5) {
    console.log(num);
    num++; //num =num+1;
}
do {
    console.log(num);
    num++;
} while (num < 5)

var itr = 10;
console.log(itr++);//10
console.log(itr); //11
console.log(++itr); //12
console.log(itr);//12

var num1 = 8, n = 3;
console.log(num1 << b); //64

var num1 = 8, n = 2;
console.log(num1 << n); //32
console.log(num1 << n); //2




for (let declare_again = 1; declare_again < 5; declare_again++) {
    console.log(declare_again);
}
var declare_again = 1;
console.log(declare_again); // Different block No ERROR.
var declare = 5;
console.log(declare);
let declare1 = 5; // Same block ERROR.
console.log(declare1);

var a = "fauza";
console.log(a + " is 24 yrs old");
console.log(`${a} is 24 yrs old`);

var obj = {
    name: "faizan",
    roll_no: 10,
    sing: function () {
        console.log(`${this.name} sings`);
    }
};

console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);




/* ARRAY*/
var arr = [1, 2, 3, 4, 5];
console.log(arr[2]); //3
var arr1 = [2, 34, 5, 6, , 77];
console.log(arr1[4]); //undefined
arr.push("faizan");
arr.push("taz");
console.log(arr.pop());
arr.unshift(1000);
arr.unshift(10);
console.log(arr[0]);
console.log(arr.shift());
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
arr.splice(1, 3, "9999");
arr.splice(0, 3);
var b_arr = [1, 2, 3, 4, 5, 6];
var new_barr = b_arr.slice(0, 4)
var c_arr = [1, 2, 3, 4, 5, 6];
var new_carr = c_arr.slice(3);
var new_carr2 = c_arr.slice(3, 7);

/*FUCNTIONS */

var a = 0;
console.log(a);
print();
function print() {
    var b = 0;
    a = 10;
}
console.log(a);
console.log(b);
var prnt = function aka() {
    console.log("awesone");
}

prnt();

(function (a, b) {
    console.log(a + b);
}
)(4, 4);


function canVote(age) {
    return age >= 18;
};
function canDrive(age) {
    return age >= 16;
};
function canMarry(age) {
    return age >= 21;
}
console.log(canDrive(11));
console.log(canVote(11));
console.log(canMarry(11));
console.log(canDrive(27));
console.log(canVote(27));
console.log(canMarry(27));
function age_req(r_age) {
    return function (age) {
        return age >= r_age

    }
};

console.log(age_req(18)(27));

let can_Drive = age_req(16);
console.log(can_Drive(27));
let can_Marry = age_req(21);
console.log(can_Marry(27));

console.log(age_req(18)(27));
console.log(age_req(16)(27));
console.log(age_req(21)(27));


class Box {
    constructor(Length) {
        this.length = length;
        console.log("constructor called");
    }
    display() {
        console.log(this);
    }
}
let obj1 = new Box(20);
obj1.display();
let father = {
    name: 'john'
}
let son1 = {};
let son = Object.create(father);
//console.log(father.isPrototypeof(son));
//console.log(father.isPrototypeof(son1));

var parent = {
    name: "Father",
    sing() {
        console.log("singing");
    },
    eat: function () {
        console.log("eating");
    },
    drink: () => {
        console.log("drinking");
    }
};

var child = {
    name: "Son",
    eat() {
        console.log("eating");
    }
};
child.proto = parent;
for (let p in child) {
    console.log(p + "" + child.hasOwnProperty(p))
}


class Fruits {
    constructor(color) {
        this.color = color
    }
} 1

class Apple extends Fruits {
    constructor(color, type) {
        super(color);
        this.type = type;
    } I
    print() {
        console.log(this)
    }
}

let obj2 = new Apple("red", "apple");
obj2.print();

class Parent {
    live() {
        console.log("Iran");
    }
}
class Child extends Parent {
    live() {
        console.log("India")
    }
}

var ob = new Child();
ob.live();

try {
    console.log(a);
    console.log("hi bye");
}

catch (error) {
    console.log("we got an error " + error);
}


function a(age) {
    if (age < 16) {
        try {
            throw new Error("You are under age");
        }
        catch (error) {
            I
            console.log(error);
        }
    }
    else {
        console.log("You can vote");
    }
}

try{
    console.log(a);
    }
    catch(error){
    console.log("We got an error -->" +error);
    }
    finally
    {
    console.log("program ended.");
    }