import MarkdownIt from "markdown-it";
import { readdir, stat, readFileSync, writeFileSync } from "fs";
import { resolve, join } from "path";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
const mainHtml = readFileSync("./docs/htmlDoc/Y_z00_0000.html", "utf-8");
const pathSel = resolve("./docs/mdDoc");
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

//you know what im doing _2
const dom = new JSDOM(mainHtml, {
  runScripts: "dangerously",
  resources: "usable",
});

fileDisplay(pathSel);

function fileDisplay(filePath) {
  readdir(pathSel, function (err, files) {
    // foreach files list
    files.forEach(function (fileName) {
      // get file path
      const fileDir = join(filePath, fileName);
      // return fs.Stats
      stat(fileDir, function (error, stats) {
        if (error) {
          console.warn("获取文件 stats 失败");
        } else {
          const isFile = stats.isFile();
          const isDir = stats.isDirectory();
          if (isFile) {
            const md_Doc_Src = readFileSync(
              "./docs/mdDoc/" + fileName,
              "utf-8"
            );
            const html = md.render(md_Doc_Src);
            let a = dom.window.document.createElement("div");
            a.innerHTML = html;
            dom.window.document.getElementById("body_0").appendChild(a);
            setTimeout(() => {
              writeFileSync(
                //命名规定:第一个字符 "_" 前为分类的文件类型，后为该类型文件的数字标号，同时表示文件数，第二个字符 "_" 后为文件名
                "./docs/htmlDoc/html_" + fileName.split("_")[0] + "/" + fileName.split(".")[0] + ".html",//创建新文件夹
                dom.serialize()
              );
              console.log(
                "succeed! FileName:" +
                "./docs/htmlDoc/" +
                fileName.split(".")[0] +
                ".html"
              );
            }, 2000);
          }
          if (isDir) {
            fileDisplay(fileDir);
          }
        }
      });
    });
  });
}
