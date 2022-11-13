const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

let users = {};

app.get("/user", (req, res) => {
    res.send(users);
})

app.post("/user", (req, res) => {
    // save user details in db received from database.
    console.log(req.body);
    users = req.body;
    res.json({
        message: "Data received successfully.",
        user: req.body,
    });
});

app.patch("/user", (req, res) => {
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated) {
        users[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "Data updated successfully",
    });
})

app.delete("/user", (req, res) => {
    users = {};
    res.json({
        message: "Data deleted successfully."
    })
})

app.listen(5000, () => {
    console.log("methods listening on port 5000.");
})