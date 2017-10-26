# Building API with Node.js
1. Create folder with to files `package.josn` and `server.js`
2. Add to `package.json` file
```javascript
{
  "scripts": {
  "start": "node server.js"
  },
  "name": "**<name here>**",
  "version": "0.0.1"
}
```
3. Install `npm install express --save`
4. Import express package, app and port to `server.js` file (line 8-17)
5. Import static files to `server.js` (line 18-19)
6. Create folder `website` and inside `index.html` then write comment
##### TIP - Install `npm install nodemon -g` so server will restart automatically (to run server use command `nodemon server.js`)
7. Go to `localhost:3000`
8. Adding get request to `server.js` (line 21-31)
9. Create variables `var names` (line 1-5)
10. Add route to in `server.js` to expose data (names) in json format (line 33-37)
11. Go to `http://localhost:3000/names`
12. Add names to 'var = names' list in `server.js` (line 22-34)
13. Go to http://localhost:3000/add/**<name>**/**<age>** and and change `<>` parameters
14. Add searchName function in `server.js`(line 48-65)
15. Go to `http://localhost:3000/search/<name>`