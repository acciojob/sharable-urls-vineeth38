document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = parseInt(document.getElementById('year').value);
    
    var newUrl = 'https://localhost:8080/';
    if(name) {
        newUrl += '?name=' + encodeURIComponent(name);
        if(!isNaN(year)) {
            newUrl += '&year=' + year;
        }
    } else if(!isNaN(year)) {
        newUrl += '?year=' + year;
    }
    
    document.getElementById('url').innerText = newUrl;
});

    
 
    
   
       