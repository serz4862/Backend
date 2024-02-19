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
    .post((req,res)=>{
    return res.json({status : "pending"})

    })
    .delete((req,res) =>{
    return res.json({status : pending})

    });


app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
})