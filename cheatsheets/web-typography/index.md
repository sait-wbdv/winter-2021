---
layout: page
title: "Web Typography"
---

## Relevant cheatsheets
- [Readable Text](readable-text)
- [Units](../units)

## Key Takeaways
1. Font settings are inhertited.
2. The `font-family` declaration has built-in fallbacks separated by commas.
3. When in doubt, use `rem` over `em` when setting font-based units to avoid strange inheritance issues.
4. The length of the `ch` unit is dependent on the currently loaded font.

## Font-family types and fallbacks
In general, you will be setting two or more fonts in a `font-family` declaration:

    ```css
    font-family: [custom font], [system font(s)], [generic keyword];
    ```

### 1. Generic keywords
- Source: [MDN font-family documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- Codepen: [Generic Font Families](https://codepen.io/browsertherapy/pen/wvzZPqK)

Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the last item in the list of font family names. The following keywords are defined:
- serif
- sans-serif
- monospace
- cursive
- fantasy
- system-ui
- emoji
- math
- fangsong

### 2. System fonts
Also refered to as "web-safe fonts", system fonts are the font families that are installed by default on Windows and Mac systems. Many are installed on one OS and not the other so here is a list of common fallback combinations. See the Codepen: [Web-safe Font Stacks](https://codepen.io/browsertherapy/pen/eYNmYQP)
- Arial, Helvetica, Sans-Serif
- Arial Black, Gadget, Sans-Serif
- Comic Sans MS, Textile, Cursive
- Courier New, Courier, Monospace
- Georgia, Times New Roman, Times, Serif
- Impact, Charcoal, Sans-Serif
- Lucida Console, Monaco, Monospace
- Lucida Sans Unicode, Lucida Grande, Sans-Serif
- Palatino Linotype, Book Antiqua, Palatino, Serif
- Tahoma, Geneva, Sans-Serif
- Times New Roman, Times, Serif
- Trebuchet MS, Helvetica, Sans-Serif
- Verdana, Geneva, Sans-Serif
- MS Sans Serif, Geneva, Sans-Serif
- MS Serif, New York, Serif

Source: [Font stacks for Window & Mac browsers](https://coderwall.com/p/57imrw/common-fonts-for-windows-mac)

### 3. Imported/Custom Fonts
We've had the ability to import custom fonts into our stylesheets since 2010. There are many openly licensed font services and foundries but the most popular is currently [Google Fonts](https://fonts.google.com/).

#### Using Google Fonts
1. Browse the list and select a font that you like.
    - Recommended: pick a font that comes with multiple styles. Single-style fonts are often missing fundamentals like bold versions.
2. Add a font to your "cart" with `Select this style`.
    - Note: each style is considered its own font-face and adds signifcantly to your page's file size. Limit yourself to three font styles or less.
3. Choose whether you want to embed the font using the `link` or `@import` method.
    - `link` is more performant because it's "non-blocking".
    - `@import` is slower (it's "blocking"; CSS won't load until the font loads) but it's often more convenient for development. It's also the only way to use custom fonts in CodePen.
4. Copy and paste the relevant embed code into your file.
    - `link` -> `head` of the html document
    - `@import` -> the _top_ of an external CSS file
5. Use your new font in a `font-family` declaration. Google Fonts provides text that you can copy and paste.