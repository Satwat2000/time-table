const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")

var Slots = {
    S1: [[1, 7], [2, 2], [3, 4]],
    S2: [[3, 2], [4, 4], [5, 7]],
    S3: [[3, 7], [4, 2], [5, 4]],
    S4: [[1, 2], [2, 4], [4, 7]],
    S5: [[1, 5], [2, 3], [4, 8]],
    S6: [[1, 8], [2, 5], [3, 3]],
    S7: [[3, 5], [4, 3], [5, 8]],
    S8: [[1, 3], [3, 8], [4, 5]],
    S9: [[1, 4], [4, 10], [5, 5]],
    S10: [2, 8],
    S11: [5, 3]
}




app.get("/", function (req, res) {
    res.render("table", { Slots: Slots })
})


app.listen(3000, function (req, res) {
    console.log("Server Started")
});

