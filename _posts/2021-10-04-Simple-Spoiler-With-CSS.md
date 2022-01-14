---
layout: post
title: Simple HTML+CSS+JS Spoiler
categories: blog
---

I recently discovered that Markdown (what I use to write this blog) doesn't support the spoiler syntax commonly seen on Reddit & Discord (`>!It looks like this!<`). But since Markdown *does* support inline HTML, I thought I'd set out and create my own.

My site uses SASS/SCSS for its CSS, but all the CSS I will show is vanilla, so it shouldn't matter. Firstly, here's what the spoiler looks like:

<p class="spoiler">Wow look at me!</p>

If you click on the grey box, it will show the text. You can also use inline spoilers like this: <span class="spoiler"> Now it's inline!</span>

I'll also show you how to make spoilers reveal themselves on hover, using <span class="spoiler spoiler-hover">the spoiler-hover class</span>, but this is less accessible for mobile users. It does, however, have the advantage of not requiring any JavaScript

<!--more-->

## CSS

```css
.spoiler {
  color: #828282;
  background-color: #828282;
  border-radius: 3px;
  user-select: none;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}

.spoiler:hover {
  cursor: pointer;
}

.spoiler-hover:hover, .spoiler-shown {
  color: #474747;
  background-color: #c6c6c6;
}
```

## HTML usage

```html
Here is an <span class="spoiler">inline spoiler</span>
```

Here is an <span class="spoiler">inline spoiler</span>

```html
<p class="spoiler">Here is a block spoiler</p>
```

<p class="spoiler">Here is a block spoiler</p>

```html
And finally, an inline, <span class="spoiler spoiler-hover">hover spoiler</span>
```

And finally, an inline, <span class="spoiler spoiler-hover">hover spoiler</span>

## JavaScript for Clickable Spoilers

The final step to getting this to work is to add a little bit of JS to the page, so remember to load the JS using the `<script>` tag:

```html
<head>
  <script src="path/to/script.js"></script>
</head>
```

And in `script.js` (this example doesn't use JQuery):

```js
document.addEventListener("DOMContentLoaded", () => { // When DOM is ready
  document.querySelectorAll(".spoiler")               // Select all .spoiler elements
    .forEach(item => {                                // For each .spoiler element
      item.onclick = () => {                          // When clicked
        if (item.classList.contains("spoiler-shown")) // If the spoiler is shown
          item.classList.remove("spoiler-shown");     // Hide it
        else                                          // Otherwise
          item.classList.add("spoiler-shown");        // Show it
      };
    });
}, false);
```
