import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import mongoose from "mongoose"
import pkg from 'statuses';
const { redirect } = pkg;
const app = express();
const port = "3000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb://127.0.0.1:27017';
mongoose.connect(url + "/BlogApp");

const blogSchema = new mongoose.Schema({
    title: String,
    content: String
});

const blogDye = mongoose.model("blog", blogSchema)


app.get("/", async (req, res) => {

    const blog = await blogDye.find({});

    if (blog.length == 0) {
        const post = new blogDye({
            title: 'HELLO MY NAME IS ARNAV',
            content: 'I CREATED THIS BLOG WEBSITE!!!',
        });
        await post.save();
    }

    console.log(blog);
    res.render("index.ejs", { data: blog })
});


app.get(`/post/:i`, async(req, res) => {
    const blog = await blogDye.find({});
    var blogNo = req.params.i;
    if (blogNo < blog.length) {
        console.log(blog[blogNo] + "-------------------------------------------------");
        res.render("singlepost.ejs", { datas: blog[blogNo] });
    } else {
        res.redirect('/');
    }


});

app.get("/composeose", (req, res) => {

    res.render("compose.ejs");
});

app.post("/composeose/submit", async (req, res) => {
    var tit = req.body.composeTitle;
    var con = req.body.composeContent;
    const post = new blogDye({
        title: tit,
        content: con
    });
    await post.save();

    res.redirect('/');
});

app.listen(port, () => {
    `Server started on ${port}`
});

