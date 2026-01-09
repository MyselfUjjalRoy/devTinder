-learn about package.json and package-lock.json

-initialize git
-gitignore
-create a remote repo on github
-push all code to github origin

-played with routes (wildcard matching)
-lesson:- order of the routes matters a lot
-episode-04:- postman
-write logic to handle GET , POST , PUT , PATCH , DELETE API calls
-in routing explored regex and use of ? , \* , +, ()
-in routes ":" means dynamic routes
-in routing req.params req.query
eg:- /user/:101

-S02E05:
-Handling multiple routes
-difference between app.use() and app.all()
-what is middleware ? why do we need it??
-error handling

-S02E06
-create a free cluster
-install mongoose library
-first connect DB then start the server - it is the best way , using the connection url

-create a user Schema , then convert it to User model , (always the model name in capital letter)
-created POST /signup API to add data to databse
-Push some documents using API calls from postman(I used thunder client)
-Note :- whenever you do some db operations do it inside try catch block

-S02E07
-difference between json and javascript object
-add the express.json() middleware to my app
-make our signup API dynamic to receive data from the end user
-User.findOne() with duplicate email ids, which object will be returned???
-performed CRUD operations
-difference between PUT and PATCH method
-Note :- suppose I pass any data through body in my api and i that field is not present in the schema then it will ignore that field and not update nor store the data

-S02E08
-explored schema type options from the documentation
-added required , unique , lowercase , min , minlength , trim
-Added default

- Created a custom validate function for gender
  -Added API level validations on Patch request & SignUp POSt API
  -Data Sanitization :- Add API validation for each field- so that my api don't get malicious data
  -Note:- npm validator library for validating email
  for that , at first do - npm i validator
  -explore validator library function and use validtor for password , email , phone number , photourl etc.
  -Note :- NEVER TRUST req.body

-S02E09
 -validate data in SignUp API
 -Install bcrypt package
 -Create PasswordHash using bcypt.hash and save the user with hashed password

 -During login don't do information leak , like your password is not correct , use invalid credentials
 -Created login API
 -compare password  and throw errors if email or password is invalid
 
-S02E10
 -install cookie-parser
 -just send a dummy cookie to user
 -create a GET /profile and check if you get the cookie back
 -Install jsonwebtoken
 -In login API , after the email and passwrod validation , create a JWT token and send  it to user in cookies
 -read the cookies inside you profile API and find the logged in user
 -JWT token = header + payload + verification signature

 -Add the userAuth Middleware in profile API and a new secndConnectionRequest API
 -set the expiry of JWT token and cookies to 7 days

 -create userSchema method to getJWT()
 -create userSchema method to comparepassword(passwordInputByUser)
 -so that our code become modular , as we attached method to userSchema which are closely related to user , so that we don't need to explicitly write this in the api


