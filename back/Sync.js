const { fileList, readFileContent, isImage } = require("./utils");

fileList.forEach((file) => {
  if (isImage.test(file)) {
    const image = readFileContent(file, "base64");
    console.log({ file, content: image });
  } else {
    const fileContent = readFileContent(file);
    console.log({ file, content: fileContent });
  }
});
