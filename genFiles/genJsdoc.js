import jsdoc2md from 'jsdoc-to-markdown';
import { writeFileSync } from 'fs';

jsdoc2md.render({ files: 'source/component_html/sidebar_lis_1_js.js' }).then(output => {
    // 使用标准的 utf8 写入，不带 BOM
    writeFileSync('docs/mdDoc_compilation_Area/sidebar_lis_1_js.md', output, 'utf8');
    console.log('文档已成功生成');
});