var button = document.createElement('Button');
button.id = 'btn';
button.innerHTML = '0';
document.body.appendChild(button);

button.addEventListener('click',function() {
    var value = document.getElementById('btn').innerHTML;
    button.innerHTML = +value+1;   
});