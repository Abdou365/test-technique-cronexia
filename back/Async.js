const { fileList, readFileContentAsync, isImage } = require("./utils");

fileList.forEach(async (file) => {
  if (isImage.test(file)) {
    const image = await readFileContentAsync(file, "base64");
    console.log({ file, content: image });
  } else {
    const fileContent = await readFileContentAsync(file);
    console.log({ file, content: fileContent });
  }
});
