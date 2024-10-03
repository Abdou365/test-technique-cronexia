const fs = require("fs");

const isImage = /\.(jpg|jpeg|png|gif)$/;

const isJSON = /\.json$/;
const fileList = fs
  .readdirSync("./01-classique/un-dossier-peu-importe")
  .filter((file) => !isJSON.test(file));

const readFileContent = (file, encoding = "utf-8") =>
  fs.readFileSync(`./01-classique/un-dossier-peu-importe/${file}`, encoding);

const readFileContentAsync = async (file, encoding = "utf-8") =>
  new Promise((resolve, reject) => {
    fs.readFile(
      `./01-classique/un-dossier-peu-importe/${file}`,
      encoding,
      (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }
    );
  });

module.exports = {
  fileList,
  readFileContent,
  readFileContentAsync,
  isImage,
  isJSON,
};
