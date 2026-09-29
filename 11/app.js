
const fs = require("fs");

// 1. Create and write to a file
fs.writeFileSync("data.txt", "Hello, this is the first line.\n");

console.log("File created successfully.");

// 2. Read the file
let data = fs.readFileSync("data.txt", "utf8");

console.log("\nFile contents:");
console.log(data);

// 3. Append new content
fs.appendFileSync("data.txt", "This is the second line.\n");

console.log("Content appended successfully.");

// 4. Read the updated file
data = fs.readFileSync("data.txt", "utf8");

console.log("\nUpdated file contents:");
console.log(data);

// 5. Modify the file
fs.writeFileSync(
    "data.txt",
    data.replace("first line", "mod first line")
);

console.log("File modified successfully.");

// 6. Read the modified file
data = fs.readFileSync("data.txt", "utf8");

console.log("\nFinal file contents:");
console.log(data);
