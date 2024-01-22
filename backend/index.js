const express = require("express");
const connectDB =require('./src/database')
const app = express();

app.use(express.json());

connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
