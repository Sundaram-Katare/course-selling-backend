const express = require('express');
const app = express();
const { userRouter} = require("./Routes/user");
const { courseRouter} = require("./Routes/courses");
app.use("/user", userRouter);
app.use("/course", courseRouter);




app.listen(3000);