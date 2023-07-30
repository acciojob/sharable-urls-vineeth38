// your code here
document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    
    var newUrl = 'https://localhost:8080/';
    if(name) {
        newUrl += '?name=' + encodeURIComponent(name);
        if(year) {
            newUrl += '&year=' + encodeURIComponent(year);
        }
    } else if(year) {
        newUrl += '?year=' + encodeURIComponent(year);
    }
    
    document.getElementById('url').innerText = newUrl;
});