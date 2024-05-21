function abc(){
var mysql = require("mysql");
var im = document.getElementById("imie").value;
var na = document.getElementById("nazwisko").value;
var pe = document.getElementById("pesel").value;
console.log(im," ",na," ",pe);


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_baza'
});

connection.query('INSERT INTO dane values("im","na","pe")',function(err,rows){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }
});

}