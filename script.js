// your code here
document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    
    var newUrl = 'https://localhost:8080/?name=' + name + '&year=' + year;
    
    document.getElementById('url').innerText = newUrl;
});