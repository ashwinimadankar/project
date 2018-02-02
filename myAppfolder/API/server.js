
const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "myareaproject"
// });

var pool  = mysql.createPool({
    connectionLimit : 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "myareaproject"
  });
  


// Register API
app.post('/register', (req, res) => {

    console.log(req.body);
    let user = req.body;

    // con.connect(function (err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "INSERT INTO registration (name, email, phone, password,cpassword) VALUES (\'" + user.name + "\', \'" + user.email + "\',\'" + user.phone + "\',\'" + user.password + "\',\'" + user.cpassword + "\')";
    //     console.log(sql);
    //     con.query(sql, function (err, result) {
    //         if (err) {
    //             res.send({ "error": "Data Insertion Failed" })
    //         } else {
    //             res.send({ "success": "Data Inserted" });
    //         }

    //     });
    // });

    pool.getConnection(function(err, connection) {
        // Use the connection
        var sql = "INSERT INTO registration (name, email, phone, password,cpassword) VALUES (\'" + user.name + "\', \'" + user.email + "\',\'" + user.phone + "\',\'" + user.password + "\',\'" + user.cpassword + "\')";

        connection.query(sql, function (error, results, fields) {
          // And done with the connection.
          connection.release();
      
          // Handle error after the release.
          if (err) {
            res.send({ "error": "Data Insertion Failed" })
        } else {
            res.send({ "success": "Data Inserted" });
        }
      
          // Don't use the connection here, it has been returned to the pool.
        });
      });
});

// login API
app.post('/login', (req, res) => {

    console.log(req.body);
    let user = req.body;

    // con.connect(function (err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = " Select  email,password from registration where email= "+ JSON.stringify(user.email) + " && password=" + JSON.stringify(user.password);
    //     console.log(sql);
    //     con.query(sql, function (err, result) {
    //         if (err) {
    //             con.end();
    //             res.send({ "error": "Loggin failed" })
    //         } else {
    //             con.end();

    //             res.send({ 
    //                 "success": true,
    //                 "token": user.email
    //          });
    //         }
        
    //     });
    // });

    pool.getConnection(function(err, connection) {
        // Use the connection

        
        var sql = " Select  email,password from registration where email= "+ JSON.stringify(user.email) + " && password=" + JSON.stringify(user.password);

        connection.query(sql, function (error, results, fields) {
          // And done with the connection.
          connection.release();
      
          // Handle error after the release.
          if (err) {

            res.send({ "error": "Loggin failed" })
        } else {
            if(results!=0)
          {
            console.log("result",results)
            res.send({ 
                "success": true,
                "token": user.email
         });
        }
        else{
            console.log("result",results)
            res.send({ 
                "success": false,
                "token": user.email
         });  
        }
        }
    
          // Don't use the connection here, it has been returned to the pool.
        });
      });

});






app.post('/localitylogin', (req, res) => {

    console.log(req.body);
    let user = req.body;

    pool.getConnection(function(err, connection) {
        // Use the connection

        
        var sql = " Select loaction_name from locality where city_id = 8 && state_id= 10";

        connection.query(sql, function (error, results, fields) {
          // And done with the connection.
          connection.release();
      console.log(results);
          // Handle error after the release.
          if (err) {

            res.send({ "error": "Data not fetched" })
        } else {
         console.log("result",results)
            res.send({ 
                "success": true,
                results
         });  
        }
    
          // Don't use the connection here, it has been returned to the pool.
        });
      });

});


app.post('/citylogin', (req, res) => {

  console.log(req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection

      
      var sql = " Select loaction_name from locality where city_id = 8 && state_id= 10";

      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
    console.log(results);
        // Handle error after the release.
        if (err) {

          res.send({ "error": "Data not fetched" })
      } else {
       console.log("result",results)
          res.send({ 
              "success": true,
              results
       });  
      }
  
        // Don't use the connection here, it has been returned to the pool.
      });
    });

});


app.post('/statelogin', (req, res) => {

  console.log(req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection

      
      var sql = " Select loaction_name from locality where city_id = 8 && state_id= 10";

      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
    console.log(results);
        // Handle error after the release.
        if (err) {

          res.send({ "error": "Data not fetched" })
      } else {
       console.log("result",results)
          res.send({ 
              "success": true,
              results
       });  
      }
  
        // Don't use the connection here, it has been returned to the pool.
      });
    });

});


app.listen(3000, () => console.log('Example app listening on port 3000!'));



