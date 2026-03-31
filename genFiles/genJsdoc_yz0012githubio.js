import jsdoc2md from 'jsdoc-to-markdown';
import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';

const inputDir = 'source';
const outputDir = 'mddocs/yz0012githubio/';
const htmlDir = 'yz0012githubio';

async function generateDocs() {

    // 在 generateDocs 函数开始处添加
    if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, { recursive: true, force: true });
    }
    // 1. 获取所有 .js 文件路径
    // 使用正斜杠是 glob 的标准，即使在 Windows 上也是如此
    const files = globSync(`${inputDir}/**/*.js`.replace(/\\/g, '/'));

    if (files.length === 0) {
        console.warn('未找到任何 .js 文件，请检查 inputDir 路径是否正确。');
        return;
    }

    for (const file of files) {
        try {
            // 2. 渲染 Markdown
            const markdown = await jsdoc2md.render({ files: file });

            // 跳过没有 JSDoc 的空文件
            if (!markdown || markdown.trim().length === 0) {
                console.log(`Skipping (no JSDoc): ${file}`);
                continue;
            }

            // 3. 计算镜像路径
            const relativePath = path.relative(inputDir, file);
            // 将 .js 替换为 .md
            const targetPath = path.join(htmlDir, relativePath).replace(/\.js$/, '.md');

            // YAML Front Matter
            const yamlHeader = [
                '---',
                `title: ${path.basename(file)}`,
                `source: ${file}`,
                `type: JSDOC`,
                `path: docs\\${inputDir}\\${path.dirname(targetPath)}`, // 统一路径斜杠
                `createTime: ${new Date().toUTCString()}`,
                '---\n\n'
            ].join('\n');

            // const pathInfo = `> **File Path**: \`${targetPath}\` \n\n`;

            const finalContent = yamlHeader + markdown;

            // 4. 创建目录并写入文件
            fs.mkdirSync(outputDir, { recursive: true });
            fs.writeFileSync(outputDir + path.basename(file, '.js') + '.md', finalContent, 'utf8');

            console.log(`Successfully generated: ${targetPath}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }
    console.log('--- 所有文档处理完毕 ---');
}

generateDocs();