import MarkdownIt from "markdown-it";
import { readdir, stat, readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join } from "path";
import jsdom from "jsdom";

const { JSDOM } = jsdom;
const mainHtml = readFileSync("./docs/htmlDoc/Y_z00_0000.html", "utf-8");
const pathSel = resolve("./docs/mdDoc");
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
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
            let md_Doc_Src = readFileSync(
              "./docs/mdDoc/" + fileName,
              "utf-8"
            );
            //you know what im doing _2
            const dom = new JSDOM(mainHtml);
            let html = md.render(md_Doc_Src);
            let a = dom.window.document.createElement("div");
            let html_Url = dom.window.document.createElement("a");
            let title = dom.window.document.createElement("title");
            a.innerHTML = html;
            a.id = "wrap_0";
            // it will order htmlurl
            html_Url.id = "html_url_0";
            html_Url.href = "./" + fileName.split(".")[0] + ".html";
            html_Url.innerHTML = "🚙本文链接:" + html_Url.href;
            title.innerHTML = fileName.split(".")[0] + ".html";
            dom.window.document.getElementById("tag_0_0").appendChild(html_Url);
            dom.window.document.getElementById("body_0").appendChild(a);
            dom.window.document.getElementsByTagName("head")[0].appendChild(title);
            //Asymmetric code blocks
            //used in docs\docs_m_genRightbar.js
            let newDir = "./docs/htmlDoc/" + "html_" + fileName.split("_")[0];
            // console.log(stats.mtimeMs);
            if (existsSync(newDir)) {
              console.log("The directory exists. Path:" + newDir);
            } else {
              mkdirSync(newDir, (err) => {
                if (err) throw err;
                console.log("success!");
              });
            }
            setTimeout(() => {
              writeFileSync(
                //现行命名规定:第一个字符 "_" 前为分类的文件类型，后为该类型文件的数字标号，同时表示文件数，第二个字符 "_" 后为文件名
                newDir + "/" + fileName.split(".")[0] + ".html",//写到新文件夹
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
