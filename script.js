// your code here
document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    
    var params = [];
    if(name) {
        params.push('name=' + encodeURIComponent(name));
    }
    if(year) {
        params.push('year=' + encodeURIComponent(year));
    }
    
    params.sort();
    
    var newUrl = 'https://localhost:8080/';
    if(params.length > 0) {
        newUrl += '?' + params.join('&');
    }
    
    document.getElementById('url').innerText = newUrl;
});

    
   
       