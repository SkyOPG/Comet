const e = function clid(directoryPath) {
  let lineCount = 0;

  function countLinesInFile(filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContents.split('\n');
    lineCount += lines.length;
  }

  function traverseDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);
      const fileStats = fs.statSync(filePath);

      if (fileStats.isFile()) {
        countLinesInFile(filePath);
      } else if (fileStats.isDirectory()) {
        traverseDirectory(filePath);
      }
    });
  }

  traverseDirectory(directoryPath);

  return lineCount;
}

module.exports= { e }