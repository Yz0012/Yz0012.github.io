import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

async function generateSitemap() {
  // 1. 创建一个流
  const smStream = new SitemapStream({ hostname: 'https://yz0012.github.io/source/component_html/sidebar_lis_0.html' });

  // 2. 定义你的链接数据
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  ];

  // 3. 将数据写入流
  const sitemapOutput = await streamToPromise(Readable.from(links).pipe(smStream));
  
  // 4. 输出 XML 字符串
  console.log(sitemapOutput.toString());
}

generateSitemap();