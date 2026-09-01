const fs = require("fs").promises;

async function fetchData() {
  try {
    const data1 = await fs.readFile("./file1.txt", "utf-8");
    const data2 = await fs.readFile("./file2.txt", "utf-8");
    await fs.writeFile("./demo.txt", data1 + "\n" + data2);
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}
fetchData();




