import { readdir, stat, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from 'url';
import path, { resolve, join } from "path";
import jsdom from "jsdom";
// import {fileTypeFromFile} from 'file-type';
const { JSDOM } = jsdom;
const mainHtml = readFileSync("./source/sidebar_lis_0.html", "utf-8");
const pathSel = resolve("./");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//you know what im doing
const dom = new JSDOM(mainHtml, {
  resources: "usable",
});

//onload
dom.window.onload = function () {
  onloadtwo(this);
};

function onloadone(callBack, howToNameThis) {
  fileDisplay(pathSel, 0, dom, "body-sidebar-lis-o-1", howToNameThis);
  setTimeout(() => {
    callBack();
  }, 5000);
}

function onloadtwo(howToNameThis) {
  onloadone(() => {
    writeFileSync("./source/component_html/sidebar_lis_0.html", dom.serialize());
  }, howToNameThis);
}

var fileNum = new Array(1);
var dirNum = new Array(0);
// to know how many files or dir in file
var fileQuan = 0;
var dirQuan = 0;
// 为了方便给数组赋值
function fileDisplay(filePath, indexNumber, dom, elementId, howToNameThis) {
  // return file list
  readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err, "读取文件夹错误！");
    } else {
      // foreach files list
      files.forEach(function (fileName) {
        // get file path
        const fileDir = join(filePath, fileName);
        // return fs.Stats
        stat(fileDir, async function (error, stats) {
          if (error) {
            console.warn("获取文件 stats 失败");
          } else {
            const isFile = stats.isFile();
            const isDir = stats.isDirectory();
            if (isFile && indexNumber != 0) {
              fileNum.push(-1);
              fileNum[indexNumber]++;
              var newElm = howToNameThis.document.createElement("a");
              newElm.target = "_self";
              newElm.rel = "noopener noreferrer";
              newElm.setAttribute("classname_con_2", fileName);
              newElm.setAttribute("file_title", fileName.split(".")[0]);
              newElm.id =
                "body-sidebar-lis-contexts-" +
                fileNum[indexNumber] +
                " idIndex:" +
                indexNumber +
                " " +
                fileQuan++;
              newElm.className =
                "body-sidebar-lis-contexts " + "index:" + indexNumber;
              if (filePath.split("\\docs\\htmlDoc\\")[1] != undefined) {
                //考虑后续拓展
                newElm.href = "\\docs\\htmlDoc\\" + filePath.split("\\docs\\htmlDoc\\")[1] + "\\" + fileName;
              }
              //Asymmetric code blocks
              // {
              //   var newIfo = howToNameThis.document.createElement("info");
              //   newIfo.textContent = stats.mtimeMs;
              //   newElm.append(newIfo);
              // }
              {
                switch (path.extname(fileName)) {
                  case ".js": newElm.setAttribute("fileformat", "language-javascript");
                    newElm.textContent = "🔞" + fileName;
                    dom.window.document.getElementById(elementId).append(newElm);
                    break;
                  case ".css": newElm.setAttribute("fileformat", "language-css");
                    newElm.textContent = "🎨" + fileName;
                    dom.window.document.getElementById(elementId).append(newElm);
                    break;
                  case ".md": newElm.setAttribute("fileformat", "language-markdown");
                    newElm.textContent = "📚" + fileName;
                    dom.window.document.getElementById(elementId).append(newElm);
                    break;
                  case ".html": newElm.setAttribute("fileformat", "language-html");
                    newElm.textContent = "📜" + fileName;
                    dom.window.document.getElementById(elementId).append(newElm);
                    addAnchorLink();
                    break;
                  default:
                    newElm.textContent = "🎈" + fileName;
                    console.log("Default and Name:" + fileName);
                    dom.window.document.getElementById(elementId).append(newElm);
                }
              }

              function addAnchorLink() {
                const secHtml = readFileSync(fileDir)
                const dom_2 = new JSDOM(secHtml);
                const title = dom_2.window.document.querySelectorAll("h1, h2, h3, h4, h5, h6");
                var newCon_2 = howToNameThis.document.createElement("dir");
                newCon_2.id = 'anchorLink';
                newCon_2.setAttribute("classname_con_2", fileName);
                newCon_2.setAttribute('affiliatedname',fileName);
                newCon_2.style.cssText = `
                border-color:#0091ff;
                `;
                newCon_2.className =
                  "body-sidebar-contents " + "index:" + indexNumber;
                newCon_2.id =
                  "body-sidebar-contents-" +
                  dirNum[indexNumber] +
                  " idIndex:" +
                  indexNumber +
                  " " +
                  dirQuan++ +
                  " " + "📁" + fileName + ' anchorlink'; //convenient
                dom.window.document.getElementById(elementId).appendChild(newCon_2);
                title.forEach(function (currentValue, index, array) {
                  var newElm_2 = howToNameThis.document.createElement("a");
                  newElm_2.style.margin = '2px';
                  newElm_2.setAttribute("classname_con_2", fileName);
                  //无引用
                  newElm_2.setAttribute("file_title", fileName.split(".")[0]);
                  newElm_2.className = 'AnchorLink';
                  newElm_2.textContent = "✨" + currentValue.innerHTML;
                  newElm_2.setAttribute("fileformat", "language-html");
                  newElm_2.title = "锚点";
                  newCon_2.appendChild(newElm_2);
                  if (filePath.split("\\docs\\htmlDoc\\")[1] != undefined) {
                    //考虑后续拓展
                    newElm_2.href = '#' + currentValue.innerHTML.toLowerCase()
                      .trim()
                      .replace(/[^\w\u4e00-\u9fa5\s-]/g, '')
                      .replace(/\s+/g, '-')
                      .replace(/-+/g, '-')
                      .replace(/^-|-$/g, '');;
                  }
                })
                console.log('genAnchorLink Succeed! ' + 'fileDir:' + fileDir)
                return true;
              }
            }
            if (isDir) {
              // ignore files
              if (fileName == "node_modules") return;
              if (fileName == ".git") return;
              if (fileName == "highlights") return;
              if (fileName == "secret") return;
              // if (fileName == "images") return;
              dirNum.push(-1);
              dirNum[indexNumber]++;
              var newLis = howToNameThis.document.createElement("dir");
              newLis.textContent = "📁" + fileName;
              newLis.setAttribute("classname_2", fileName);
              newLis.id =
                "body-sidebar-lis-" +
                dirNum[indexNumber] +
                " idIndex:" +
                indexNumber +
                " " +
                dirQuan +
                " " + "📁" + fileName;
              newLis.className = "body-sidebar-lis " + "index:" + indexNumber;
              dom.window.document.getElementById(elementId).append(newLis);
              var newCon = howToNameThis.document.createElement("dir");
              newCon.id =
                "body-sidebar-contents-" +
                dirNum[indexNumber] +
                " idIndex:" +
                indexNumber +
                " " +
                dirQuan++ +
                " " + "📁" + fileName; //convenient
              newCon.className =
                "body-sidebar-contents " + "index:" + indexNumber;
              newCon.setAttribute("classname_con_2", fileName);
              dom.window.document.getElementById(elementId).append(newCon);
              fileDisplay(
                fileDir,
                indexNumber + 1,
                dom,
                newCon.id,
                howToNameThis
              );
              // continue foreach the files in the folder
            }
          }
        });
      });
    }
  });
}
