const db = require("../config/db")

const memberList = async(req,res)=>{
    const [rows] = await (await db).execute('select * from member')
    console.log(rows)
    res.json({
            status:200,
            massage:"success",
            data:rows
        })
}
const member = (req,res)=>{
    
    
    res.json({
            status:200,
            massage:"success"
        })
}

const addMember = (req,res)=>{
    

    res.json({
            status:200,
            massage:"success"
        })
}

const updateMember = (req,res)=>{
    

    res.json({
            status:200,
            massage:"success"
        })
}

const removeMember = (req,res)=>{
    

    res.json({
            status:200,
            massage:"success"
        })
}

const memberLoan = (req,res)=>{
    

    res.json({
            status:200,
            massage:"success"
        })
}

module.exports = {
    member,
    memberList,
    memberLoan,
    addMember,
    removeMember,
    updateMember
}