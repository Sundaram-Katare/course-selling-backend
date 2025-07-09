const { Router} = require("express");
const courseRouter = Router();

courseRouter.get('/preview',function(req, res){
     res.json({
    message : "all the courses are visible here"
})
})

courseRouter.post('/purchase', function(req, res){
 res.json({
    message : "make the payment"
})
})

module.exports = {
    courseRouter : courseRouter
}