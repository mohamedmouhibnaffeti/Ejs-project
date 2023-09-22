import dotenv from "dotenv";
import express from "express";
import expressLayouts from "express-ejs-layouts"
import path from "path";
import fs from 'fs'



dotenv.config();

const app=express()

// setup Layout
app.use(expressLayouts);
app.set('layout','Layouts/layout');
// setting the view engine
app.set('view engine','ejs');
// setting for the root path for views directory
app.set("views",path.join(__dirname,'views'))



// setting for the root path for public directory
app.use(express.static(path.join(__dirname,'public')))


app.get('/',(req,res) => {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        courses.sort((a: any, b: any) => b.views - a.views);

        // Select the top 6 courses
        const topCourses = courses.slice(0, 9);
        res.render('home', {courses: topCourses})
    });
});
app.get('/cours/tous',(req, res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses

        res.render('cours', {courses});
    });
})
app.get('/cours/dev',(req,res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        const filteredCourses = courses.filter(course=> course.category === "developement" )
        res.render('cours_dev', {courses: filteredCourses});
    });
})
app.get('/cours/design',(req,res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        const filteredCourses = courses.filter(course=> course.category === "design" )
        res.render('cours_design', {courses: filteredCourses});
    })
})
app.get('/cours/data_science',(req,res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        const filteredCourses = courses.filter(course=> course.category === "data science" )
        res.render('cours_data_science', {courses: filteredCourses});
    })
})
app.get('/cours/marketing',(req,res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        const filteredCourses = courses.filter(course=> course.category === "Marketing" )
        res.render('cours_marketing', {courses: filteredCourses});
    });
})
app.get('/cours/business',(req,res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        const filteredCourses = courses.filter(course=> course.category === "business" )
        res.render('cours_business', {courses: filteredCourses});
    });
})
app.get('/cours/cyber_securite',(req,res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        const filteredCourses = courses.filter(course=> course.category === "cyber security" )
        res.render('cours_cyber_securite', {courses: filteredCourses});
    });
})

app.get('/',(req,res) => res.render('home'));
app.get('/contact', (req, res)=>res.render('contact'))

app.get('/profil_etudiant', (req, res)=>res.render('profil_etudiant'))
app.get('/cours_achetes',(req,res)=> res.render('cours_achetes'))
app.get('/cours_visites',(req,res)=> res.render('cours_visites'))


app.get('/examplecourspage',(req,res)=> {
    fs.readFile("./src/platform.json", "utf8", (err: any, jsonString: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
          console.log("File read failed:", err);
          return;
        }

        const PlatformData = JSON.parse(jsonString)
        const courses = PlatformData[0].courses
        res.render('examplecourspage', {courses});
    });
})



const PORT =process.env.SERVER_PORT;

app.listen(PORT,()=>{
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`)
})
