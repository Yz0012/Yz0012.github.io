import MarkdownIt from "markdown-it";
import { readdir, stat, readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path, { resolve, join } from "path";
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
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

    let Tokens_4 = state.push('svg_icon', 'svgicon', 1);
    Tokens_4.attrPush(['onclick', 'copyToClipboard(this.parentElement)']);
    Tokens_4 = state.push('svg_icon', 'svgicon', -1);

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

  if (hexAscii != 3335 && hexAscii != 3337) { return false; }

  let text = state.src.substring(pos, endLine_0);

  switch (hexAscii) {
    case "3335":
      let tag_0 = text.match(/(?<=&).*(?=&)/g);
      let match_0 = text.match(/(?<={).*(?=})/g);
      if (match_0 != null && tag_0 != null) {
        tokenPush('info', '!#', match_0, tag_0, state, startLine, endLine);
        state.line = startLine + 1;
        return true;
      };
      break;
    case "3337":
      let tag_1 = text.match(/(?<=&).*(?=&)/g);
      let match_1 = text.match(/(?<={).*(?=})/g);
      if (match_1 != null && tag_1 != null) {
        tokenPush('warning', '!%', match_1, tag_1, state, startLine, endLine);
        state.line = startLine + 1;
        return true;
      }
      break;
    default: console.log("error_tag_selected");
  }

  function tokenPush(tag_, markup, match, tag, state, startLine, endLine) {

    let Tokens = state.push('info_open', tag_, 1);
    Tokens.markup = markup;
    Tokens.map = [startLine, startLine + 1];

    let Tokens_wrap = state.push('svg_wrap_open', 'svgwrap', 1);
    Tokens_wrap = state.push('html_block', 'svgwrap', 0);

    let Tokens_1 = state.push('svg_icon', 'svgicon', 1);
    Tokens_1 = state.push('svg_icon', 'svgicon', -1);

    let Tokens_3 = state.push('svgtag_open', 'svgtag', 1);
    Tokens_3 = state.push('html_block', 'svgtag', 0);
    Tokens_3.content = tag[0];
    Tokens_3 = state.push('svgtag_close', 'svgtag', -1);

    Tokens_wrap = state.push('svg_wrap_close', 'svgwrap', -1);

    let Tokens_2 = state.push('html_block', 'p', 0);
    Tokens_2.content = md.render(match[0]);
    Tokens_2.children = [];

    Tokens = state.push('html_block', tag_, 0);
    Tokens.map = [startLine, startLine + 1];
    Tokens.children = [];

    Tokens = state.push('info_close', tag_, -1);
  }
});


//未经审核 标记为01
md.block.ruler.before('table', 'front_matter', function (state, startLine, endLine, silent) {
  const pos = state.bMarks[startLine] + state.tShift[startLine];
  const max = state.eMarks[startLine];
  const line = state.src.slice(pos, max);

  if (line.trim() === '---') {
    let nextLine = startLine + 1;
    let hasEnd = false;

    while (nextLine <= endLine) {
      const nextPos = state.bMarks[nextLine] + state.tShift[nextLine];
      const nextMax = state.eMarks[nextLine];
      const nextLineContent = state.src.slice(nextPos, nextMax);

      if (nextLineContent.trim() === '---') {
        hasEnd = true;
        break;
      }
      nextLine++;
    }

    if (hasEnd) {
      state.line = nextLine + 1;
      return true;
    }
  }

  return false;
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
            const metadata = matter(md_Doc_Src);
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
            let timeData_01 = dom.window.document.createElement("div");
            let timeData_svg_1 = dom.window.document.createElement("div");
            let timeData_wrap_1 = dom.window.document.createElement("div");
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
            timeData_wrap_1.id = "timeDataWrap_0";
            timeData_01.id = "timeData_UTC";

            timeData_svg.style.backgroundImage = "url(/images/svgicons/clock-svgrepo-com.svg)";
            timeData_svg.style.width = "2rem";
            timeData_svg.style.height = "2rem";
            timeData_svg.style.backgroundRepeat = "no-repeat";
            timeData_svg.style.backgroundSize = "cover";
            timeData_svg.id = "timeData_svg_0";

            timeData_svg_1.style.backgroundImage = "url(/images/svgicons/folder-edit-svgrepo-com.svg)";
            timeData_svg_1.style.width = "2rem";
            timeData_svg_1.style.height = "2rem";
            timeData_svg_1.style.backgroundRepeat = "no-repeat";
            timeData_svg_1.style.backgroundSize = "cover";
            timeData_svg_1.id = "timeData_svg_0";

            type_svg.style.backgroundImage = "url(/images/svgicons/price-tag-svgrepo-com.svg)";
            type_svg.style.width = "2rem";
            type_svg.style.height = "2rem";
            type_svg.style.backgroundRepeat = "no-repeat";
            type_svg.style.backgroundSize = "cover";
            type_svg.id = "type_svg_0";

            type_wrap.id = "typeWrap_0";
            type_0.id = "type_data_0";
            timeData_0.innerHTML = "编译时间 : " + UTC;
            if (metadata.data != undefined) {
              let typename_ = metadata.data.type;
              type_0.innerHTML = "所属类型 : " + typename_;
              title.innerHTML = metadata.data.title;
              html_Src.setAttribute("src_0", metadata.data.path + fileName.split(".")[0] + ".html");
            } else {
              type_0.innerHTML = "所属类型 : " + fileName.split("_")[0];
              title.innerHTML = fileName.split(".")[0];
              html_Src.setAttribute("src_0", "docs\\htmlDoc\\" + "html_" + fileName.split("_")[0] + "\\" + fileName.split(".")[0] + ".html");
            }
            html_Src.style.display = "none";
            html_Src.id = "html_src_0";
            //这里要修改
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
            if (metadata.data != null) {
              timeData_01.innerHTML = '创建时间 : ' + metadata.data.createTime;
              dom.window.document.getElementById("tag_0_0").appendChild(timeData_wrap_1);
              timeData_wrap_1.appendChild(timeData_svg_1);
              timeData_wrap_1.appendChild(timeData_01);
            }

            //Asymmetric code blocks
            //used in docs\docs_m_genRightbar.js
            if (metadata.data != null) {
              let filepath = metadata.data.path;
              let newDir = filepath;
              // console.log(stats.mtimeMs);
              if (existsSync(newDir)) {
                console.log("The directory exists. Path:" + newDir);
              } else {
                mkdirSync(newDir, { recursive: true }, (err) => {
                  if (err) throw err;
                  console.log("success!");
                });
              }
              setTimeout(() => {
                writeFileSync(
                  newDir + "/" + fileName.split(".")[0] + ".html",//写到新文件夹
                  dom.serialize()
                );
                console.log(
                  "succeed! FileName:" +
                  newDir +
                  fileName.split(".")[0] +
                  ".html"
                );
              }, 2000);
            } else {
              //这段代码会被弃用，但不会被删除
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
          }
          if (isDir) {
            fileDisplay(fileDir);
          }
        }
      });
    });
  });
}
