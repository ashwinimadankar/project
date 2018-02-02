
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

        
        var sql = " Select loaction_name,location_id from locality where city_id ="+user.city_id+"  && state_id = "+user.state_id+"";

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
                "results":results
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

      
      var sql = " Select city_name , city_id, state_id from city where state_id = "+user.state_id+"" ;

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
            "results":results
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

      
      var sql = " Select state_name ,state_id from state";

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
              "results":results
       });  
      }
  
        // Don't use the connection here, it has been returned to the pool.
      });
    });

});


//api for rating of locality
app.post('/rating', (req, res) => {

  console.log(req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection
      var sql = "INSERT INTO locality (review,rating) VALUES ( \'" + user.review + "\',\'" + user.rating + "\')";

      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
       console.log(results);
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



//hospitals

app.post('/hospitals', (req, res) => {
  console.log("Hospital data",req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection
      var sql = "SELECT hospita_id,location_id,hospital_name,hospital_address,hospital_phone FROM hospitals where location_id = "+user.location_id+" limit 5 ";
      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
    
        // Handle error after the release.
        if (err) {
          res.send({ "error": "Data selection Failed" })
      } else {
          res.send({ "success": "Data fetched",
        "results":results });
          
      }
        // Don't use the connection here, it has been returned to the pool.
      });
    });
});


//parks
app.post('/parks', (req, res) => {
  console.log(req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection
      var sql = "SELECT par_id,location_id,park_name,park_address from parks where location_id = "+user.location_id+" limit 5";
      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
    
        // Handle error after the release.
        if (err) {
          res.send({ "error": "Data selection Failed" })
      } else {
          res.send({ "success": "Data fetched",
        "results":results });
      }
        // Don't use the connection here, it has been returned to the pool.
      });
    });
});

//police
app.post('/police', (req, res) => {
  console.log(req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection
      var sql = "SELECT ps_id,location_id,ps_name,ps_address,ps_phone FROM police where location_id = "+user.location_id+" limit 5";
      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
    
        // Handle error after the release.
        if (err) {
          res.send({ "error": "Data selection Failed" })
      } else {
          res.send({ "success": "Data fetched",
          "results":results });
      }
        // Don't use the connection here, it has been returned to the pool.
      });
    });
});


//schools
app.post('/school', (req, res) => {
  console.log(req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection
      var sql = "select location_id,school_name,school_address,school_phone from schoolcollege where location_id = "+user.location_id+" limit 5";
      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
    
        // Handle error after the release.
        if (err) {
          res.send({ "error": "Data selection Failed" })
      } else {
          res.send({ "success": "Data fetched",
          "results":results });
      }
        // Don't use the connection here, it has been returned to the pool.
      });
    });
});
 //user details
 app.post('/userprofile', (req, res) => {
  console.log(req.body);
  let user = req.body;

  pool.getConnection(function(err, connection) {
      // Use the connection
      var sql = "select id,name,phone,email from registration where email = "+user.email+"";
      connection.query(sql, function (error, results, fields) {
        // And done with the connection.
        connection.release();
    
        // Handle error after the release.
        if (err) {
          res.send({ "error": "Data selection Failed" })
      } else {
          res.send(results[0]);
      }
        // Don't use the connection here, it has been returned to the pool.
      });
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));



