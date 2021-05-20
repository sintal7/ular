(function(n){
 var URL = ['
 '//google.co.uk',
 '//google.co.nz'];
 n = n < 3? 0 : n < 8? 1 : 2;
 window.location.replace(URL[n]);
})(Math.floor(Math.random() * 10));
