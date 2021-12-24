const express = require("express");
const app = express(); // create express app
const path = require("path");


app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// // start express server on port 3000
// app.listen(3000, () => {
//   console.log("server started on port 3000");
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
    console.log(`Server is up and running on ${port}`);
});