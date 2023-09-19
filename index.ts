import dotenv from "dotenv";
import express from "express";
import expressLayouts from "express-ejs-layouts"
import path from "path";
import fs from 'fs'
let PlatformData
fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
    if (err) {
        // tslint:disable-next-line:no-console
      console.log("File read failed:", err);
      return;
    }

    PlatformData = JSON.parse(jsonString)
    // tslint:disable-next-line:no-console
    console.log(PlatformData)
    if (Array.isArray(PlatformData)) {
        PlatformData.forEach((platformObject, index) => {
            // tslint:disable-next-line:no-console
            console.log(`Object ${index + 1}:`, platformObject);

            // Access specific properties within each object
            // tslint:disable-next-line:no-console
            console.log(`Name: ${platformObject.name}`);
            // tslint:disable-next-line:no-console
            console.log(`Type: ${platformObject.type}`);
            // Add more properties as needed
        });
    } else {
        // tslint:disable-next-line:no-console
        console.log("PlatformData is not an array.");
    }
    // tslint:disable-next-line:no-console
    console.log(PlatformData[0].users)
});

dotenv.config();

const app=express()

// setup Layout
 app.use(expressLayouts);
 app.set('layout','./Layouts/layout');
// setting the view engine
app.set('view engine','ejs');
// setting for the root path for views directory
app.set("views",path.join(__dirname,'views'))

app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')))

// setting for the root path for public directory
app.use(express.static(path.join(__dirname,'public')))
// Configure routes


app.get('/', (req, res)=>res.render('home'))
app.get('/login', (req, res)=>res.render('login'))
app.get('/register', (req,res)=>res.render('register'))
app.get('/contact', (req, res)=>res.render('contact'))

const PORT =process.env.SERVER_PORT;

app.listen(PORT,()=>{
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`)
})
