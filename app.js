const express = require("express");
const app = express();
const path = require("path");

app.get("/mouse-events", function (req, res) {
	res.sendFile(path.join(__dirname, "/mouse-events/index.html"));
});
app.get("/keyboard-events", function (req, res) {
	res.sendFile(path.join(__dirname, "/keyboard-events/index.html"));
});
app.get("/trigger-from-parent", function (req, res) {
	res.sendFile(path.join(__dirname, "/trigger-from-parent/index.html"));
});

app.listen(8642);
