// require necessary modules
const express = require('express')
const app = express();
// setup the neo4j driver and session
const neo4j = require('neo4j-driver')
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic(user, password))
const session = driver.session()

// at the root node return 
app.get('/',function(req,res) {
    htmlOut = '<html><head></head><body>'
    htmlOut += '<a href="/employees">Click here to list all employees</a>'
    htmlOut += '</body></html>'
    res.send(htmlOut)
});

// this is the function to return all employees

app.get('/employees',function (req, res) {
    // define the variables that are needed
    val = ''
    x = ''
    htmlOut = '<!DOCTYPE html><html><head><title>Neo4j Homework</title> \
        <meta charset="UTF-8"> \
        <meta name="viewport content="width=device-width,initial-scale=1.0"> \
        </head><body>'
    item = ''
    flag = 0
    // the Cypher command to be run
    cmd = "MATCH (emp:Employee) RETURN emp"
    session.run(cmd)
       .then(function (result) {
           result.records.forEach(function (record) {
             x = record.get("emp")["properties"]
             val = x.empId+' ... '+x.empName
             item += '<li>'+val+'</li>' // as each recored is retrieved
             console.log(item);         // add it to the html to be returned
             flag = 1
           });
          res.set('Content-Type','text/html')
	  if(flag == 0)  {
             htmlOut = htmlOut+'<ul><li>the database is empty</li></ul></body></html>'
          } 
	  else {
             htmlOut = htmlOut+'<ol>'+item+'</ol></body></html>'
          }
          res.send(htmlOut) ;
       })
      .catch(function (error) {
          console.log(error);
       })
});

// this is the function to add an Employee node to the database

app.get('/employees/:empId/:name/add',function (req, res) {
    // define the variables to be used
    empNode =- '' ;
    name = req.params.name
    id   = req.params.empId

    // the command to be run
    cmd = "CREATE (n:Employee { empId:'" + id + "' ,empName:'"+name+"'}) RETURN n"
 
    session.run(cmd)
       .then(function (result) {
           result.records.forEach(function (record) {
           console.log(record.get("n"));
           empNode = record.get("n")["properties"]
           empNode = "Employee "+empNode.empName+
                     " added with ID "+empNode.empId

     });
     // return the added person's info
     res.send(empNode)
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
});


