const express = require("express")
const {member,memberList,memberLoan,updateMember,removeMember,addMember}= require("../controller/memberController")

const router = express.Router()

router.get("/",memberList)
router.get("/:id",member)
router.get("/:id/loans",memberLoan)
router.post("/",addMember)
router.put("/:id",updateMember)
router.delete("/:id",removeMember)

module.exports = router