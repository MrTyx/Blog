---
title: Cscript Generator
---

- Output is generated on clicking off the text area.
- Upper case and lower case letters produce the same output.
- Spaces will end a word block.
- Periods and commas produce the same character.
- Periods and commas do not end a word.
- All other characters are ignored.
- There is no protection again you pasting a massive block of text and crashing your browser.
- The output is Level 2 optimization - Vertical Compression
- [Matthew DeBlock's website](http://dscript.ca) and the [Cscript documentation](http://dscript.ca/cscript.pdf)

---

<textarea id="cscript-input" style="width: 100%" rows="4"></textarea>
<span id="cscript-message"></span>
<table id="cscript-table">
  <tr id="cscript-output"></tr>
</table>

<script>
const css = `
  #cscript-table { display: block; }
  #cscript-output td { display: inline-block; border: 1px solid lightgrey; padding: 6px; }
  #cscript-output td img { display: inline-block !important; }
`;
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

const input = document.getElementById("cscript-input");
const output = document.getElementById("cscript-output");
const message = document.getElementById("cscript-message");

input.addEventListener("change", () => {

  let word = document.createElement("td");
  word.className = "test";
  let string = input.value.toLowerCase();
  message.innerHTML = "Loading...";
  output.innerHTML = "";

  for (let i = 0; i < string.length; i++) {
    let node;
    let c = string.charCodeAt(i);
    switch (true) {
      case c === 32:
        output.append(word);
        word = document.createElement("td");
        break;
      case c === 44 || c === 46:
        node = document.createElement("img");
        node.src = "/images/cscript/period.jpg";
        word.append(node);
        if (i === string.length - 1) output.append(word);
      case c >= 97 && c <= 122:
        node = document.createElement("img");
        node.src = "/images/cscript/" + string[i] + ".jpg";
        word.append(node);
        if (i === string.length - 1) output.append(word);
      default:
        break;
    }
  }
  message.innerHTML = "";
});
</script>
