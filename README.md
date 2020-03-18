# neo4j Project
This is the repository for the neo4j homework project

These are the files used to complete the assignment. The assignment consisted
of designing a REST API that:

1. Create in the neo4j database an Employee node from a given name as a string and an id as an integer.
2. Display all the Employee nodes in the databaae. 

The API was desiged as a set of URI resource paths to be used for each of the required actions:
- Employee node creation: /employees/{id}/{name}/add where the values in {...} are the integer 
and string literals for the employee's id and name, respectively. A message indicating that the
employee was added is returned as html. 
- Employee listing: /employees which returns an order list of employee names and ids as html. 

The API was implemented using a neo4j installation and a node.js installation. The code for the API is
contained in the file index.js. 

### Setup of Components
Required Components
1. neo4j Community Editon version 4.0.1
2. Node.js version 12.6.1 
3. Zulu OpenJDK 11.37.11 as a deb file

This installation is for the Linux OS. The distribution used was Linux Mint 19.
The steps are:
1. Using the apt utility, install the Zulu OpenJDK package.
2. Install the neo4j software.
3. Install the Node.js software.
4. Make a directory called 'neo4japp'.
5. Go into the neo4j directory and execute the command 'npm init'.
This will setup the directory to be a Node.js application. When asked,
the main file is index.js. All the other entries can be as you choose.
This setup creates a package.json file in the directory to give information
about the application. 
6. While in the neo4j directory issue the command 'npm install express' and
'npm install neo4j-driver'. This will put the necessary files into the node_modules
directory. 
7. Download the index.js file from this repository and place it in the neo4japp directory.
8. Edit the index.js file and replace the words 'user' and 'password' in the line that 
begins with 'const driver' with the actual user name and password for the neo4j database. 

### Starting the neo4japp

Once you have neo4j started, open a command shell or terminal and go into the neo4japp
directory. Type the command 'node index.js'. Once you can see that node started without
errors then open a web browser and try out the API. 

* If you try http://localhost:8080/employees you will see a listing of all of the employees
in the database. 

* Using the URL http://localhost:8080/employees/766543/Wilma%20Flintstone/add you will add
Wilma Flintstone to the database with empolyee id 766543.

* Without the http server in place there will be links displayed for the results of the above
operations that will not work. 

### You Can Try It Out Here

An index.html file is included in the repository for seeing the API in action. The Python 3 http
was used to connect to the Node.js application. The Python http server can be started by placing 
the index.html into a directory, moving into that directory, and then issuing the command:

python3 -m http.server 9001

which will start the server on port 9001. Navigating to http://localhost:9001 the menu page will 
be displayed that will let you either list all of the employees or to add an employee to the 
database. 

An installation of the Node.js implementation of the API has been deployed on a Linode instance. 

To see the menu page go to: http://45.56.116.34:9001

From there you can exercise the API.

### Notes

This implementation was my interpretation of the assignment to the best of my understanding. Perhaps a different definition of the API could make the API more RESTful, but as there was a time factor in getting the assignment done, the API exists in its form presented here. 

The index.js file contains elements that pertain specifically to the http serving of the API. These elements can be changed or removed as needed. Perhaps the API can be better packaged to make it more portable. 

