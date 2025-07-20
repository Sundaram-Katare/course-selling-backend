const express = require('express');
const cors = require('cors');

const { userRouter} = require("./Routes/user");
const { courseRouter} = require("./Routes/courses");

const app = express();

// This will handle the CORS Error.
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);

//Indicates that server is runnign on PORT 3000.
app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
});