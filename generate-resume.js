const md2resume = require('markdown-resume')
const fs = require('fs');
const ws = fs.createWriteStream('./public/about/resume.html');

md2resume.generate('./source/_template/resume.md', { format: 'html' }, (err, out) => {
  if (err) {
    console.error(err)
    return
  }
  ws.write(out)
  ws.end();
})
