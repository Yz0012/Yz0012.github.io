import MarkdownIt from "markdown-it";
import { readdir, stat, readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path, { resolve, join } from "path";
import { fileURLToPath } from 'url';
import jsdom from "jsdom";

const { JSDOM } = jsdom;
const mainHtml = readFileSync("./docs/htmlDoc/Y_z00_0000.html", "utf-8");
const sidebar = readFileSync("./source/giscus/giscus.html", "utf-8");
const pathSel = resolve("./docs/mdDoc_compilation_Area");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
              "./docs/mdDoc_compilation_Area/" + fileName,
              "utf-8"
            );
            //you know what im doing _2
            const dom = new JSDOM(mainHtml);
            const dom_2 = new JSDOM(sidebar);
            // const dom_2 = new JSDOM(sidebar);
            let html = md.render(md_Doc_Src);
            let a = dom.window.document.createElement("div");
            let html_Url = dom.window.document.createElement("a");
            let timeData_0 = dom.window.document.createElement("time");
            let title = dom.window.document.createElement("title");
            let html_Src = dom.window.document.createElement("src");

            const UTC = new Date().toUTCString();

            a.innerHTML = html;
            a.id = "wrap_0";
            // it will order htmlurl
            html_Url.id = "html_url_0";
            html_Url.href = "./" + fileName.split(".")[0] + ".html";
            html_Url.innerHTML = "o(*≧▽≦)ツ┏━┓本文链接:" + html_Url.href;
            timeData_0.id = "timeData_UTC";
            timeData_0.innerHTML = "更新时间 : " + UTC;
            title.innerHTML = fileName.split(".")[0];
            html_Src.style.display = "none";
            html_Src.id = "html_src_0";
            //这里要修改
            html_Src.setAttribute("src_0", "docs\\htmlDoc\\" + "html_" + fileName.split("_")[0] + "\\" + fileName.split(".")[0] + ".html");
            dom.window.document.getElementById("tag_0_0").appendChild(html_Url);
            dom.window.document.getElementById("tag_0_0").appendChild(timeData_0);
            dom.window.document.getElementById("body_0").appendChild(a);
            dom.window.document.getElementById("body_0").appendChild(dom_2.window.document.getElementsByTagName("script")[0]);
            dom.window.document.head.appendChild(title);
            dom.window.document.body.appendChild(html_Src);

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
