function parent() {
    var x = 10;
    function child() {
        console.log(x + 10);
    }
    return child;
}


function f1(gf) {
    return function (f) {
        return function (s) {
            console.log('${gf}--${ f }  $(s)');

}
    }
}


let fl= (gf) => (f) => (s) =>console.log(`$(gf) --${f}--${s}`);




  
  let mul = function(x,y)
{
console.log(x+y);
}
let mulBy10 = mul.bind(this, 10);
mulBy10 (7)


const p1 =new Promise ((resolve, reject) =>{
if (false)
resolve("It worked");
else
reject("It did not worked");
});
p1.then(result => result + " haha").catch(
result => result + " heheh");

//let arr = [1,2,3,4];
let newarr = arr.map(num => num*2);


//let arr = [10,2,30,4];
let filarr = arr.filter(num > num> 9);

let arr = [1,2,3,4];
let redarr = arr.reduce((acc,num) =>
acc+num, 100);