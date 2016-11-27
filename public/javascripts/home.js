// var inserter = document.getElementById( 'marker' );


jx.load('http://sinatra-app-descript.c9users.io:8080/test', function(data) {
    console.log(data)
    app.writeToDom(data)
}, 'json');


var app = {
    writeToDom: function(myinput){
            var dataInJSON = JSON.stringify(myinput,["\n", "\\n"],4)
            document.getElementById('marker').innerHTML += dataInJSON;
    }
}
