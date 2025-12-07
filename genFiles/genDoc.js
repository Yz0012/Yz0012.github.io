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

//add some rule to markdown-it
md.block.ruler.before('paragraph', '!@codeblock_0', function replace(state, startLine, endLine) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let endLine_0 = state.eMarks[startLine] + state.tShift[startLine];
  let hexAscii = state.src.charCodeAt(pos).toString() + state.src.charCodeAt(pos + 1).toString();

  if (hexAscii != 3364) { return false; }
  if (pos == (endLine_0 - 2)) {
    for (let i = 1; i <= endLine; i++) {
      let pos_1 = state.bMarks[startLine + i] + state.tShift[startLine + i];
      let hexAscii_1 = state.src.charCodeAt(pos_1).toString() + state.src.charCodeAt(pos_1 + 1).toString();
      if (hexAscii_1 == 3364) {
        let text = state.src.substring(pos + 2, pos_1);

        if (text != null) {
          tokenPush(text, startLine, endLine);
          state.line = startLine + i + 1;
          return true;
        }

        break
      };
    }
  } else {

    let text = state.src.substring(pos, endLine_0);
    let match = text.match(/(?<=!@).*(?=!@)/g);

    if (match != null) {
      tokenPush(match[0], startLine, endLine);
      state.line = startLine + 1;
      return true;
    }

  }

  function tokenPush(match, startLine, endLine) {
    let Tokens = state.push('codeblock_open', 'pre', 1);
    Tokens.markup = '!@';
    Tokens.map = [startLine, startLine + 1];

    let Tokens_2 = state.push('codeblock_open_1', 'code', 1);

    Tokens_2 = state.push('html_block', 'code', 0);
    Tokens_2.content = match;
    Tokens_2.children = [];

    Tokens = state.push('html_block', 'code', 0);
    Tokens.map = [startLine, startLine + 1];
    Tokens.children = [];

    Tokens_2 = state.push('codeblock_close_1', 'code', -1);

    Tokens = state.push('codeblock_close', 'pre', -1);
    Tokens.markup = '!@';
  }
});

//add some rule to markdown-it
md.block.ruler.before('paragraph', '!#info_0', function replace(state, startLine, endLine) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let endLine_0 = state.eMarks[startLine] + state.tShift[startLine];
  let hexAscii = state.src.charCodeAt(pos).toString() + state.src.charCodeAt(pos + 1).toString();

  if (hexAscii != 3335) { return false; }

  let text = state.src.substring(pos, endLine_0);
  let tag = text.match(/(?<=&).*(?=&)/g);
  let match = text.match(/(?<={).*(?=})/g);
  if (match != null && tag != null) {
    let Tokens = state.push('info_open', 'info', 1);
    Tokens.markup = '!#';
    Tokens.map = [startLine, startLine + 1];

    let Tokens_1 = state.push('svg_icon', 'svgicon', 0);
    Tokens_1 = state.push('svg_icon', 'svgicon', -1);

    // let Tokens_3 = state.push('html_block', 'div', 0);
    // Tokens_3 = state.push('html_block', 'div', -1);
    // Tokens_3.content = tag[0];

    let Tokens_2 = state.push('html_block', 'p', 0);
    Tokens_2.content = md.render(match[0]);
    Tokens_2.children = [];

    Tokens = state.push('html_block', 'info', 0);
    Tokens.map = [startLine, startLine + 1];
    Tokens.children = [];

    Tokens = state.push('info_close', 'info', -1);

    state.line = startLine + 1;
    return true;
  }
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
            let timeData_0 = dom.window.document.createElement("div");
            let timeData_svg = dom.window.document.createElement("div");
            let timeData_wrap = dom.window.document.createElement("div");
            let type_0 = dom.window.document.createElement("div");
            let type_svg = dom.window.document.createElement("div");
            let type_wrap = dom.window.document.createElement("div");
            let title = dom.window.document.createElement("title");
            let html_Src = dom.window.document.createElement("src");

            const UTC = new Date().toUTCString();

            a.innerHTML = html;
            a.id = "wrap_0";
            // it will order htmlurl
            html_Url.id = "html_url_0";
            html_Url.href = "./" + fileName.split(".")[0] + ".html";
            html_Url.innerHTML = "o(*≧▽≦)ツ┏━┓本文链接:" + html_Url.href;

            timeData_wrap.id = "timeDataWrap_0";
            timeData_0.id = "timeData_UTC";

            timeData_svg.style.backgroundImage = "url(/images/svgicons/clock-svgrepo-com.svg)";
            timeData_svg.style.width = "2rem";
            timeData_svg.style.height = "2rem";
            timeData_svg.style.backgroundRepeat = "no-repeat";
            timeData_svg.style.backgroundSize = "cover";
            timeData_svg.id = "timeData_svg_0";

            type_svg.style.backgroundImage = "url(/images/svgicons/price-tag-svgrepo-com.svg)";
            type_svg.style.width = "2rem";
            type_svg.style.height = "2rem";
            type_svg.style.backgroundRepeat = "no-repeat";
            type_svg.style.backgroundSize = "cover";
            type_svg.id = "type_svg_0";

            type_wrap.id = "typeWrap_0";
            type_0.id = "type_data_0";
            timeData_0.innerHTML = "编译时间 : " + UTC;
            type_0.innerHTML = "所属类型 : " + fileName.split("_")[0];
            title.innerHTML = fileName.split(".")[0];
            html_Src.style.display = "none";
            html_Src.id = "html_src_0";
            //这里要修改
            html_Src.setAttribute("src_0", "docs\\htmlDoc\\" + "html_" + fileName.split("_")[0] + "\\" + fileName.split(".")[0] + ".html");
            dom.window.document.getElementById("tag_0_0").appendChild(html_Url);
            dom.window.document.getElementById("tag_0_0").appendChild(timeData_wrap);
            dom.window.document.getElementById("tag_0_0").appendChild(type_wrap);
            dom.window.document.getElementById("body_0").appendChild(a);
            dom.window.document.getElementById("body_0").appendChild(dom_2.window.document.getElementsByTagName("script")[0]);
            dom.window.document.head.appendChild(title);
            dom.window.document.body.appendChild(html_Src);
            timeData_wrap.appendChild(timeData_svg);
            timeData_wrap.appendChild(timeData_0);
            type_wrap.appendChild(type_svg);
            type_wrap.appendChild(type_0);

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
