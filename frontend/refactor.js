const fs = require('fs');
let content = fs.readFileSync('src/app/blog/[slug]/page.tsx', 'utf8');
const lines = content.split('\n');

const startIndex = lines.findIndex(l => l.includes('export function generateStaticParams'));

const newContent = [
  ...lines.slice(0, 17), 
  'import { blogPostsArray as BLOG_DATA } from "@/data/blogs";', 
  '', 
  ...lines.slice(startIndex)
].join('\n');

// Also, the previous code accessed BLOG_DATA[slug] as if it was a dictionary, but now it's an array.
// So we need to change how `post` is found.
// The old code (lines 472+) probably says something like `const post = BLOG_DATA[slug];`
// We need to change that to `const post = BLOG_DATA.find(p => p.slug === slug);`

let modifiedContent = newContent.replace(
  'const post = BLOG_DATA[slug];', 
  'const post = BLOG_DATA.find(p => p.slug === slug);'
);

// We need to do this for all instances of `BLOG_DATA[slug]` in the file.
modifiedContent = modifiedContent.replace(/BLOG_DATA\[slug\]/g, 'BLOG_DATA.find(p => p.slug === slug)');

// Wait, generateStaticParams might iterate over Object.keys(BLOG_DATA)
modifiedContent = modifiedContent.replace(
  'return Object.keys(BLOG_DATA).map((slug)',
  'return BLOG_DATA.map((post)'
).replace(
  'slug: slug,',
  'slug: post.slug,'
);

fs.writeFileSync('src/app/blog/[slug]/page.tsx', modifiedContent);
console.log('Successfully replaced BLOG_DATA with import in [slug]/page.tsx');
