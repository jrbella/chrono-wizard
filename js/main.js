$(document ).ready(function() {


getDate();

});


function getDate(){
d = new Date();

$('#time').text(d);

};