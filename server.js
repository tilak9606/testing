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

app.get("/contact", (req, res)=> {
    res.send("Contact us know more")
})

app.get("/services", (req, res)=> {
    res.send("Services us know more")
})  

app.post("/getUser", (req, res)=> {
    res.send("Get user know more")
})

app.put("/updateUser", (req, res)=> {
    res.send("Update user know more")
})  

app.delete("/deleteUser", (req, res)=> {
    res.send("Delete user know more")
})

