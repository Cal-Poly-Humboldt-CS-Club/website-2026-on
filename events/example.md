---
title: 'Example event page for documentation'
id: 'example-event'
date: '2026-04-15'
time: '5-6:30 pm'
location: 'bss 111'
description: 'This is the description listed at the top of the page and on the event cards on search pages...'
thumbnail: '/event-files/ben-industry/ben_1.jpg'
unlisted: true
tags:
    - 'example-tag'
    - 'tag with spaces'
    - 'tag3'
---


# Heading of first section!

**We use markdown!** This means that you can edit the event files (`.md` files) in the website repo to edit these pages. It uses frontmatter (parsed with `gray-matter`), and is largely CommonMark / standard markdown with some Github markdown extensions.

In markdown, you can have headers, paragraphs, images, tables, lists, and code snippits. If you have any questions, reach out and we can discuss how to properly use `.md` files.

> NOTE: Work needs to be done to make full compatability testing to fully vet what is properly rendered by this.

# Headings!

You can do headings of different sizes, just use multiples of '\#' like in regular markdown...

# H1
## H2
### H3
#### H4

Here is how that is done:


```md
// Language: Markdown
// Creates different levels of headers in .md

# H1
## H2
### H3
#### H4
```

# Images!

Images must be accompantied by alt-text, but we also process a quoted line after the image source url in the markdown as the 'source'. This is to provide better transparancy and promotion of those who took the photo or made the image.

![This is alt-text for the image](../event-files/example_image.jpg "This is the 'source' text below the image")


Here is how that is done:


```md
// Language: Markdown
// Creates image with alt-text and a source in .md

![This is alt-text for the image](../event-files/example_image.jpg "This is the 'source' text below the image")
```


# Links!


You can add links inside paragraphs such as this [link to events page](../events) which should take you back to the page of events on the website.

[Example link to example.com](https://example.com)

```md
// Language: Markdown
// Creates a link in .md

[Example link to example.com](https://example.com)
```

# Code blocks!

Here is another paragraph before a block of code. This `code block` can do automatic syntax coloring through `highlight.js`:

```js
// Language: Javascript

function minusTen(a) {
    // Code block
    int b = -10;
    return a + b;
}
element.addEventListener("click", (event) => {
    var value = event.getTarget().innerHTML;
    value = minusTen(value);
    event.getTarget().setInnerHTML(value);
})
```

The coloring is language dependent. Alghough this website uses a standard coloring, it can handle *many* languages which you can poke through at the [highlight.js website](https://highlightjs.org/demo). To select a language, when making the code block, put the language at the top ticks as shown below.
``````
```
// This does no syntax highlighting
```

```js
// This does JS
```

```cpp
// This does C++
```
``````

# Lists!

Also, you can do a list of items:

- List item 1
- List item 2
- List item with a [link](https://google.com)

Or ordered lists:

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item with a [link](https://google.com)

Both of which are done, quite simply, like this:

```md
// Language: Markdown
// Creates lists in .md

- List item 1
- List item 2
- List item with a [link](https://google.com)

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item with a [link](https://google.com)
```