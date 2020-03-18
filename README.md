# neo4j Homework Project
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



