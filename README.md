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
12. Add names to temporaty database in `server.js` (line 22-34)
13. Go to `http://localhost:3000/add/**<name>**/**<age>**`  and change `<>` parameters (temporary adding)
14. Add searchName function in `server.js`(line 48-65)
15. Go to `http://localhost:3000/search/<name>`
##### Saving data to JSON file
16. Create new file `names.json` in root directory
17. Move `var = names` from `server.js` to `names.json` (line 1-5)
18. Import file system package (line 2)
19. Sync `names.json` file with `server.js` file (line 3)
20. Change (line 37-51) to save names and age into `names.json` file
```javascript
var data = JSON.stringify(names);
        fs.writeFile('names.json', data, finished);

        function finished(err) {
            console.log('all set.');
            reply = {
                name: name,
                age: age,
                status: "Success",
                msg: "Name and age was added, thanks you!"
            }
            response.send(reply);
        }
    }
}
```
21. Go to `http://localhost:3000/add/**<name>**/**<age>**`  and change `<>` parameters (permanently adding to `names.json` file)
22. Inport p5.js library and overwrite index.html
23. Import JSON file with names `sketch.js`(line 3)
24. Write function to display names in random order on screen (line 7-20)
25. Create input fields for name and age in index.html
26. Create button SUBMIT
27. Add var button to `sketch.js` file to select DOM element with the ID 'submit' (line 7-)

### Deploy to server
1.
2.
3.
