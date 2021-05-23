const express = require("express");
const app = express();
const cors = require("cors");

//middleware

const corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions));
app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
