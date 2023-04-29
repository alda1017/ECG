const lista = (req,res) => {
    const mysql = require('mysql');
    const conection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'users'
    });
    
    conection.connect( (err) =>{
        if(err) throw err
        console.log("Conexión funcionando");
    })
    
    conection.query('SELECT * from datos', (err,rows) =>{
        if(err) throw err
        console.log("los datos consultados son: ")
        console.log(rows);
        res.status(200).send({"id_resp":rows});
    });
};

module.exports = {lista};

/*const insertar = "INSERT INTO datos (id,nombre,contrasena) VALUES (NULL, 'aldair','alderi')";
conection.query(insertar,(err,rows) =>{
    if(err) throw err
})*/

//conection.end();