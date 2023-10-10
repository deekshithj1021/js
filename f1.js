console.log("connected");
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all);
console.log(document.all[2]);
document.title = 12345;
document.all[2].textContent = 'title';

var age = prompt("Please enter your age:");
if (age = 20)
    alert("Great you are a valid user/visitor");
else
    alert("Try again");


var head = document.getElementById("heading");
console.dir(head);
var list_of_para = document.getElementsByTagName("p");
console.log(list_of_para);
console.log(list_of_para[0]);

var clas = document.querySelector(".hobby");
console.log(clas);
I