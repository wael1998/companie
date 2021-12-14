const connection = require("./DataBase");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const TodoRouter = require("./routes/todo");
const UserRouter = require("./routes/user");
const PassagerRouter = require("./routes/PassagerRoutes");
const EmployerRouter = require("./routes/EmployerRoutes");
const AvionRouter = require("./routes/AvionRoutes");
connection();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/Passager", PassagerRouter);
app.use("/Employer", EmployerRouter);
app.use("/Avion", AvionRouter);
app.use("/todo", TodoRouter);
app.use("/user", UserRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}.`));