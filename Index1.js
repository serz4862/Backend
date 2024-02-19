const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

app.get('api/users', (req,res)=>{
    return res.json(users);
})

app
    .route("api/users/:id")
    .get((req,res)=>{
        const id= Number(res.params.id);
        const user = users.find((user)=>{user.id ===id})
        return res.send(user)
    })
    .patch((req,res)=>{
        return res.json({status : "pending"})
    })



app.listen(PORT, ()=>{
    console.log("It's running successfully")
})