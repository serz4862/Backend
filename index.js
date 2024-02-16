const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT= 8000;

app.get("/api/users",(req,res)=>{
    return res.json(users);
})

app
    .route("/api/users/:id")
    .get((req,res)=>{
        const id = Number(req.params.id);
        const user = users.find((user)=> user.id===id);
        return res.json(user);
    })
    .patch((req,res)=>{
        
    })
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id ===id);
    return res.json(user);
});


app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
})