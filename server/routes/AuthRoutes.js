const { Register, Login } = require("../controllers/authControllers");
const { checkUser } = require("../middlewares/authMiddleware");

const router =require("express").Router();

router.get("/",(req,res)=>{
    res.status(200).send({
        message:"Hello"
    })
})
router.post("/",checkUser)
router.post("/Register",Register)
router.post("/Login",Login);

module.exports=router;