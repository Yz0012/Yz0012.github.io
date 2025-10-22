import { readdir, stat, readFileSync, writeFileSync } from "fs";
import path, { resolve, join } from "path";
import jsdom from "jsdom";
// import {fileTypeFromFile} from 'file-type';
const { JSDOM } = jsdom;
const mainHtml = readFileSync("./source/main.html", "utf-8");
const pathSel = resolve("./");

//you know what im doing
const dom = new JSDOM(mainHtml, {
  runScripts: "dangerously",
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
  }, 2000);
}

function onloadtwo(howToNameThis) {
  onloadone(() => {
    writeFileSync("./docs/main.html", dom.serialize());
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
              var newElm = howToNameThis.document.createElement("div");
              newElm.textContent = "📚" +  fileName;
              newElm.id =
                "body-sidebar-lis-contexts-" +
                fileNum[indexNumber] +
                " idIndex:" +
                indexNumber +
                " " +
                fileQuan++;
              newElm.className =
                "body-sidebar-lis-contexts " + "index:" + indexNumber;
              dom.window.document.getElementById(elementId).append(newElm);
              //Asymmetric code blocks.
              {
                switch(path.extname(fileName)){
                  case ".js" :newElm.setAttribute("fileformat", "language-javascript");
                  break;
                  case ".css" : newElm.setAttribute("fileformat", "language-css");
                  break;
                  case ".md" : newElm.setAttribute("fileformat", "language-markdown");
                  break;
                  default : console.log("Default and Name:" + fileName);
                }
              }
            }
            if (isDir) {
              // ignore files
              if (fileName == "node_modules") return;
              if (fileName == ".git") return;
              if (fileName == "highlights") return;
              // if (fileName == "images") return;
              dirNum.push(-1);
              dirNum[indexNumber]++;
              var newLis = howToNameThis.document.createElement("dir");
              newLis.textContent = "📁" + fileName;
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
