---
title: JQuery-like DOM Selector
date: 2017-07-27 17:44:25
categories:
  - Javascript
tags:
  - javascript
---

I was watching a Play-by-Play video with Lea Verou on Pluralsight and she used to following function to create JQuery like syntax to select DOM nodes. I thought it was good enough to share.

<!--more-->

```javascript
function $(selector, container) {
  return (container || document).querySelector(selector)
}
```

Now I can attach event listeners to an DOM node in the following format;

```javascript
$('button.foo').addEventListener('click', () => {
  //
})
```

Pretty cool.
