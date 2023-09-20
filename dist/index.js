"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// setup Layout
app.use(express_ejs_layouts_1.default);
app.set('layout', 'Layouts/layout');
// setting the view engine
app.set('view engine', 'ejs');
// setting for the root path for views directory
app.set("views", path_1.default.join(__dirname, 'views'));
// setting for the root path for public directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        courses.sort((a, b) => b.views - a.views);
        // Select the top 6 courses
        const topCourses = courses.slice(0, 9);
        res.render('home', { courses: topCourses });
    });
});
app.get('/cours/tous', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        res.render('cours', courses);
    });
});
app.get('/cours/dev', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        const filteredCourses = courses.filter(course => course.category === "developement");
        res.render('cours_dev', { courses: filteredCourses });
    });
});
app.get('/cours/design', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        const filteredCourses = courses.filter(course => course.category === "design");
        res.render('cours_design', { courses: filteredCourses });
    });
});
app.get('/cours/data_science', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        const filteredCourses = courses.filter(course => course.category === "data science");
        res.render('cours_data_science', { courses: filteredCourses });
    });
});
app.get('/cours/marketing', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        const filteredCourses = courses.filter(course => course.category === "Marketing");
        res.render('cours_marketing', { courses: filteredCourses });
    });
});
app.get('/cours/business', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        const filteredCourses = courses.filter(course => course.category === "business");
        res.render('cours_business', { courses: filteredCourses });
    });
});
app.get('/cours/cyber_securite', (req, res) => {
    fs_1.default.readFile("./src/platform.json", "utf8", (err, jsonString) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("File read failed:", err);
            return;
        }
        const PlatformData = JSON.parse(jsonString);
        const courses = PlatformData[0].courses;
        const filteredCourses = courses.filter(course => course.category === "cyber security");
        res.render('cours_cyber_securite', { courses: filteredCourses });
    });
});
app.get('/contact', (req, res) => res.render('contact'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map