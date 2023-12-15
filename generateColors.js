const fs = require("fs");
const getAverageColor = require("fast-average-color-node").getAverageColor;

// get files from /public folder
const filenames = fs.readdirSync("./public");

filenames.forEach(async (filename) => {
  getAverageColor("./public/" + filename).then((color) => {
    console.log(filename, color.hex);
  });
});
