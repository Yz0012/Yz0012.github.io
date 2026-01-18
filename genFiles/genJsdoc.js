import jsdoc2md from 'jsdoc-to-markdown';
import { globSync } from 'glob'; // 最新版的正确导入方式
import fs from 'fs';
import path from 'path';

const inputDir = 'source';
const outputDir = 'docs/mdDoc_compilation_Area/';
const htmlDir = 'test';

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
            const targetPath = path.join(htmlDir, relativePath).replace(/\.js$/, '.html');

            // YAML Front Matter
            const yamlHeader = [
                '---',
                `source: ${file}`,
                `target: ${targetPath.replace(/\\/g, '/')}`, // 统一路径斜杠
                `generated_at: ${new Date().toLocaleString()}`,
                '---\n\n'
            ].join('\n');

            // const pathInfo = `> **File Path**: \`${targetPath}\` \n\n`;

            const finalContent = yamlHeader + markdown;

            // 4. 创建目录并写入 (utf8 保证无乱码)
            fs.mkdirSync(path.dirname(targetPath), { recursive: true });
            fs.writeFileSync(outputDir, finalContent, 'utf8');

            console.log(`Successfully generated: ${targetPath}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }
    console.log('--- 所有文档处理完毕 ---');
}

generateDocs();