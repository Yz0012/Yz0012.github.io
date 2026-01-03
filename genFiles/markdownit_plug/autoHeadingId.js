//未经审核，标记为20260103_1
export default function autoHeadingId(md, options = {}) {
  const defaults = {
    level: [1, 2, 3, 4, 5, 6],
    slugify: (str) => {
      return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\u4e00-\u9fa5\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    },
    uniqueSlug: true,
    prefix: '',
    suffix: '',
  };
  
  const opts = { ...defaults, ...options };
  const usedSlugs = new Set();
  
  const originalHeadingOpen = md.renderer.rules.heading_open;
  
  md.renderer.rules.heading_open = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const level = parseInt(token.tag.slice(1));
    
    if (!opts.level.includes(level)) {
      return originalHeadingOpen 
        ? originalHeadingOpen(tokens, idx, options, env, self)
        : self.renderToken(tokens, idx, options);
    }
    
    let headingText = '';
    let inlineIndex = idx + 1;
    
    while (inlineIndex < tokens.length && tokens[inlineIndex].type !== 'heading_close') {
      if (tokens[inlineIndex].type === 'inline') {
        headingText = tokens[inlineIndex].content;
        break;
      }
      inlineIndex++;
    }
    
    let slug = opts.slugify(headingText);
    if (opts.prefix) slug = opts.prefix + slug;
    if (opts.suffix) slug = slug + opts.suffix;
    
    if (opts.uniqueSlug) {
      let originalSlug = slug;
      let counter = 1;
      while (usedSlugs.has(slug)) {
        slug = `${originalSlug}-${counter}`;
        counter++;
      }
      usedSlugs.add(slug);
    }
    
    token.attrSet('id', slug);
    
    return originalHeadingOpen 
      ? originalHeadingOpen(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options);
  };
  
  md.core.ruler.push('reset_slugs', function(state) {
    usedSlugs.clear();
  });
}