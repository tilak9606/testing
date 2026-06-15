import express from "express"

const app = express();

app.get("/", (req, res)=>{
    res.send(`Hello Tester`)
})
app.listen(4000, () => {
    console.log(`listening on http://localhost:4000`);
})

console.log("hello all");

app.get("/about", (req, res)=> {
    res.send("About us know more")
})