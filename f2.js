var button = document.getElementByID('btn');
btn.addEventListener('click', function () {
    console.log("button was clicked");
});

var lis = document.querySelectorAll('li');

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function() { this.style.color="oink";});
    }
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function () { this.style.color = "pink"; });
}