# Installation
```sh
git clone git@github.com:sidbav/public-health-app.git
cd public-health-app
npm install --force
cd client && npm install --force
```

# Running App
To start the client (frontend)
```sh
cd client && npm start
```

To start the server (backend)
```sh
npm start
```

Currently unable to run the app locally from what I am able to tell, there used to be a `.env` file, but that no longer exists (nor was there an example `.env` file), thus we will need to recreate it from scratch.
If we reach out to the previous team probably can get access to it. Gaining access will definitely make it easier to use.

# Questions/Tasks specifically regarding the repo
 - [ ] Get access to or recreate .env file
 - [ ] MongoDB, are we able to get access to the team's database, or do we need to recreate the database instance?
 - [ ] Are we able to access their heroku instance, does Jonathan have access to that?
______
# Here is the link to our website:
URL: https://publichealthapp.herokuapp.com/register


# `Common issue`
## How do I resolve git saying "Commit your changes or stash them before you can merge"?
Check out this link:
https://stackoverflow.com/questions/15745045/how-do-i-resolve-git-saying-commit-your-changes-or-stash-them-before-you-can-me


\Stash it.
Stashing acts as a stack, where you can push changes, and you pop them in reverse order.

To stash, type
test


`git stash`
Do the merge, and then pull the stash:

`git stash pop`
Discard the local changes
using `git reset --hard`
or `git checkout -t -f remote/branch`

Or: Discard local changes for a specific file
using `git checkout <filename>`



# csce 606 Coding Touchdown : Public Health App




# 1. Iteration 1

### 1.  Technical stack

TEST tool : `jest`  `postman`

Frontend： `React js`

Backend： `Node.js`

Database(not decided yet)： `MongoDB/MySQL`(or other relational database)

Deployment: Heroku.

# 2. Workflow of authentication

## 2.1 Some library we might use in the signup workflow

1. `jsonwebtoken`

     reason:


    1. Authorization: We want the user who is signed in to access the service on our website.
    2. `FAQ`
        How to check if the user is logged in ?
            - if json web token is included in user’s request which is sent from the front-side.
            - only the user whose request contains the json web token could access the routes, services and resources on our website.
        How did the user sent the request with their json web token
            - The image below illustrates it.  The `register` controller on the `nodejs`  will sending response back to the client side.  In the `reactjs` , we could add the token we got from the controller into the localstorage of the browser.  When react.js make axios request to the backend, it can get json web token from the localstorage and add it into the request.
            - To know more information about where to store json web token. Here is a link to a website
            - [https://stackoverflow.com/questions/48712923/where-to-store-a-jwt-token-properly-and-safely-in-a-web-based-application]      (https://stackoverflow.com/questions/48712923/where-to-store-a-jwt-token-properly-and-safely-in-a-web-based-application)


2. `bcryptjs`

```yaml
Link to the library : https://www.npmjs.com/package/bcryptjs
```
- `FAQ`
   - Why do we need to use this library
    -  For security.
    - `bcryptjs`  could help us encrypt the user’s important information before we store it into the database. For example, we could encrypt the user’s password in the `register` controller and store them into the database.



3. `axios`

```yaml
Link to this library: https://www.npmjs.com/package/axios
```
    - Why do we need to use this library
    - we need to send request from client-side (`reactjs`) to the controller on the back-end(`nodejs`) of the application.



4. `express` - web application installed on the back-end to handle the request sent from the client-side.

```yaml
Link to this library: https://expressjs.com/
```



5. `nodemon`

- nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- Why need this library ?
    - We don't have to restart the server everytime when we make some changes.
    - The configuration of the nodemon is in the `package.json` file.





6.  `dotenv`
- Why we need this library ?
- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- we could store token into the env and load them directly inside our nodejs server
- For exmaple, inside the `server.js`, I load the port number from env.

<!-- ![Untitled Notebook (18)-1|50x50](https://user-images.githubusercontent.com/34131663/193482249-5aae643d-ff3d-425e-a7ac-e571a9ccbbe0.jpg) -->

<img width="800" height = "600" src="https://user-images.githubusercontent.com/34131663/193482249-5aae643d-ff3d-425e-a7ac-e571a9ccbbe0.jpg">

<img width="800" height = "600" src="https://user-images.githubusercontent.com/34131663/193482380-05d76516-9fc0-4880-b30a-ea8a9b2cece4.png">


# 3. Download the code on your local machine
## 1. clone the repo on your local machine and install all the dependencies
1. ```git clone```
2. run the command ```npm install``` to install all the dependency
3. Run the server by running the command ```npm start```. Then you could see the server will listen on port 4000.

## 2. change the branch to the `dev-master`
1. change the branch by running the `git checkout dev-master` on the terminal
2. Don't forget to run `git pull origin master` before coding (update the latest version of the code).

# Git Workflow
![git workflow](https://user-images.githubusercontent.com/90015500/194197185-7d72bad9-4b6b-403e-9381-54447f574d5e.jpg)



