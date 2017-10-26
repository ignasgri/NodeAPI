# Building API with Node.js
1. Create folder with to files `package.josn` and `server.js`
2. Add to `package.json` file
```{```
  ```"scripts": {```
  ```"start": "node server.js"```
  ```},```
  ```"name": "**<name here>**",```
  ```"version": "0.0.1"```
```}``` 
3. Install `npm install express --save`
4. Import express package, app and port to `server.js` file (line 3-12)
5. Import static files to `server.js` (line 13-14)
6. Create folder `website` and inside `index.html` then write comment
##### TIP - Install `npm install nodemon -g` so server will restart automatically (to run server use command `nodemon server.js`)
7. Go to `localhost:3000`
8. Adding get request to `server.js` (line 16-26)
9. Create variables `var names` (line 1-5)
10. Add route to expose data (words) in json format (line 33-37)
11. Go to `http://localhost:3000/names`