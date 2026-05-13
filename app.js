const express = require("express")
const server = express()
const memberRouter = require("./routes/members")
const  db = require("./config/db")

server.use(express.json())
server.use(express.urlencoded())

server.use("/api/members",memberRouter)



server.listen(5000,()=>{
    console.log("server listen 5000 port")
})