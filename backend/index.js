const express = require("express");
const connectDB =require('./src/database');
const cors = require("cors");

app.use(express.json());
app.use(cors())
const mainRouter = require('./src/router/main.router');
const userRouter = require('./src/router/user.router');
const app = express();

connectDB();

app.use('/api/v1/main',mainRouter);
app.use('/api/v1/user',userRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
