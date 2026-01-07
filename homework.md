-learn about package.json and package-lock.json

-initialize git 
-gitignore
-create a remote repo on github
-push all code to github origin

-played with routes (wildcard matching)
-lesson:- order of the routes matters a lot
-episode-04:- postman
-write logic to handle GET , POST , PUT , PATCH , DELETE API calls
-in routing explored regex and use of ? , * , +, ()
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

  -create a user Schema , then convert  it to User model , (always the model name in capital letter)
  -created POST /signup API to add data to databse
  -Push some documents using API calls from postman(I used thunder client)
  -Note :- whenever you do some db operations do it inside try catch block
-