(this["webpackJsonppreview-mkdwn"]=this["webpackJsonppreview-mkdwn"]||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},17:function(n,e,t){},18:function(n,e,t){},19:function(n,e,t){},20:function(n,e,t){},232:function(n,e,t){},233:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t.n(a),r=t(8),s=t.n(r),o=(t(14),t(15),t(0)),l=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Preview Markdown"})})},d=t(3),c=t(6),h=t.n(c),u=t(9),g=t.n(u),b=(t(17),t.p+"static/media/copy.22dcafbd.svg"),m=t.p+"static/media/cross.213a98b1.svg",p=t.p+"static/media/moon.67680e86.svg",w=t.p+"static/media/sun.7f7b0585.svg",k=function(n){var e=n.initialValue,t=n.changedText,a=n.changeTheme,i=n.themeVal,r=function(){var n=document.querySelector("#clear-btn"),e=document.querySelector("#copy-btn"),a=document.querySelector("#input").value;t(a),""===a?(n.style.display="none",e.style.display="none"):(n.style.display="block",e.style.display="block")};return Object(o.jsxs)("div",{className:"input-area",children:[Object(o.jsx)("h2",{className:"input-area-title",children:"Input"}),Object(o.jsx)("textarea",{title:"Input",id:"input",className:"light"===i?"":"dark",defaultValue:e,onChange:r,placeholder:"## Enter some text!"}),Object(o.jsx)("button",{id:"clear-btn",className:"action-btn",title:"Clear text",onClick:function(){document.querySelector("#input").value="",r()},children:Object(o.jsx)("img",{src:m,alt:"Clear text"})}),Object(o.jsx)("button",{id:"copy-btn",className:"action-btn",title:"Copy text",onClick:function(){var n=document.querySelector("#input");n.select(),n.setSelectionRange(0,n.value.length),document.execCommand("copy")},children:Object(o.jsx)("img",{src:b,alt:"Copy text"})}),Object(o.jsx)("button",{id:"theme-btn",className:"action-btn",title:"Change theme",onClick:a,children:Object(o.jsx)("img",{src:"light"===i?p:w,alt:"Change theme"})})]})},x=(t(18),function(n){var e=n.innerHtml,t=n.themeVal;return Object(o.jsxs)("div",{className:"output-area",children:[Object(o.jsx)("h2",{className:"output-area-title",children:"Output"}),Object(o.jsx)("div",{id:"output",title:"Output",className:"light"===t?"":"dark",dangerouslySetInnerHTML:e?{__html:e}:{__html:"<h2>Enter some text!</h2>"}})]})});t(19),t(20);h.a.setOptions({xhtml:!0,highlight:function(n,e){var a=t(21),i=a.getLanguage(e)?e:"plaintext";return a.highlight(n,{language:i}).value}});var j=function(){var n=Object(a.useState)('<p align="center">\n<img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="30%" />\n<br />\n<h1 align="center">Preview Markdown</h1>\n</p>\n\nMarkdown is a lightweight markup language that can be used to add formatting to plaintext documents.\n\n## Instructions\n\n- Start typing in the input box and Markdown will be rendered live in the output box!\n- Buttons on top of the input box in order\n   - Red cross (\'X\'): **Copy all the Markdown** in the input box.\n   - Clipboard: **Clear all the Markdown**.\n   - Sun/moon: **Toggle the dark theme**.\n- This project is open source. Feel free to [contribute](https://github.com/HarshKapadia2/preview-markdown) or [raise an issue](https://github.com/HarshKapadia2/preview-markdown/issues).\n\n## Markdown Syntax\n\n### 1. Headings\n\n# Largest Heading\n## Second Largest Heading\n### Third Largest Heading\n###### Smallest Heading\n\n---\n\n### 2. Styling Text\n\n`Inline code`\n\n*Italic text* or _Italic text_\n\n**Bold text** or __Bold text__\n\n_**Bold and italic text**_\n\nor\n\n***Bold and italic text***\n\n**Bold with _italic nesting_**\n\n~~Strikethrough text~~\n\n> NOTE: Text is rendered on a new line only if there is an empty line in between.\n\n---\n\n### 3. Lists\n\n- Unordered list\n* Unordered list\n\n1. Ordered list\n1. Ordered list\n\n- **Writing under the same list item**\n\nAdd two to three whitespaces below a list item to render a paragraph under the list item\n\n- **Unordered list nesting**\n- Unordered nested list item\n- Unordered nested list item\n   - Unordered nested list item\n\n1. **Ordered list nesting**\n1. Ordered nested list item\n1. Ordered nested list item\n   1. Ordered nested list item\n\n1. **Ordered and unordered list nesting**\n- Unordered nested list item\n   1. Ordered nested list item\n   1. Ordered nested list item\n- Unordered nested list item\n\n> NOTE: Keep adding 3 whitespaces before hyphen for every level of nesting.\n\n---\n\n### 4. Hyperlinks\n\n- Contribute to [Preview Markdown](https://harshkapadia2.github.io/preview-markdown/) on [GitHub](https://github.com/HarshKapadia2/preview-markdown)!\n- Do [raise issues](https://github.com/HarshKapadia2/preview-markdown/issues) if any bugs are found.\n- [Relative link to the `Images` section below.](#5-images)\n- [Relative link to Preview Markdown\'s logo.](/preview-markdown/logo.svg)\n\n---\n\n### 5. Images\n\n![Alt text]()\n\n![Absolute link](https://user-images.githubusercontent.com/50140864/121142987-2ba86480-c85a-11eb-82bf-16621156b329.png)\n\n![Relative link](/preview-markdown/logo.svg)\n\n<img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="10%" />\n\n---\n\n### 6. Quoting Text\n\nIn the words of [Selena Gomez](https://www.selenagomez.com/):\n\n> "Kindness always wins."\n\nAlso,\n\n> Quoted text\n>\n>> Nested quote\n\n---\n\n### 7. Quoting Code\n\n```javascript\nlet message = "Thank you for using Preview Markdown!";\nconsole.log(message);\n```\n\n---\n\n### 8. Task Lists\n\n- [x] Complete task\n- [x] Complete task\n- [x] Complete task\n- [ ] Incomplete task\n\n---\n\n### 9. Escaping Markdown Syntax\n\n*The asterisks should be rendered.*\n\nThis is how it is done: *The asterisks should be rendered.*\n\n\nCharacters that can be escaped with a backslash (`\\`) before them:\n- \\   backslash\n- `   backtick\n- \\*   asterisk\n- _   underscore\n- {}  curly braces\n- []  square brackets\n- ()  parentheses\n- \\#   hash mark\n- \\+   plus sign\n- \\-   minus sign (hyphen)\n- .   dot\n- !   exclamation mark\n\n---\n\n### 10. Tables\n\nTable head | Table head | Table head\n---------- | ---------- | ----------\nfoo | bar | baz\n| bar | baz\nfoo | | baz\nfoo | bar\nfoo\n\n#### Table Alignment\n\nLeft Aligned | Center Aligned | Right Aligned\n:----------- | :------------: | ------------:\nfoo | bar | baz\n| bar | baz\nfoo | | baz\nfoo | bar\nfoo\n\n---\n\n### 11. Misc\n\n#### Horizontal Rule\n\n---\nor\n***\nor\n<hr />\ncan be used.\n\n#### Line Break\n\nText can rendered on a new line\n\nby adding an empty line in between.\n\nLines can also be broken and images can be spaced<br />using the `<br />` tag.\n\n#### Bold And Italic Tags\n\nThis text is <b>bold</b>, just like **this text**.\n\nThis text is in <i>italics</i>, just like *this text*.\n\n#### Paragraph Tag\n\nThe paragraph tag (`<p></p>`) can be used with the `align` attribute to align items to the center.\n\nEg:\n\n<p align="center">\nThis text is center aligned!\n<br />\n**Markdown syntax** will <b>not</b> work within a \'p\' tag.\n<br />\n<img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="20%" />\n</p>\n\n#### Collapsible Section\n\n<details>\n<summary>Click to toggle collapse</summary>\n\n- Hi!\n- Usual **Markdown** works in `here`.\n</details>\n\n## Resources\n\n- [What is Markdown?](https://www.markdownguide.org/getting-started)\n- [Markdown tutorial](https://www.youtube.com/watch?v=HUBNt18RFbo)\n- [Basic Markdown syntax](https://www.markdownguide.org/basic-syntax/)\n- [Extended Markdown syntax](https://www.markdownguide.org/extended-syntax/)\n- [Common Markdown mistakes](https://gist.github.com/DavidAnson/006a6c2a2d9d7b21b025)\n\n---\n\n<p align="center">\nThank you for using Preview Markdown!\n</p>\n'),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(),s=Object(d.a)(r,2),l=s[0],c=s[1],u=Object(a.useState)("light"),b=Object(d.a)(u,2),m=b[0],p=b[1];Object(a.useEffect)((function(){var n=h()(t),e=g.a.sanitize(n);c(e)}),[t]);return Object(o.jsxs)("main",{children:[Object(o.jsx)(k,{initialValue:t,changedText:function(n){i(n)},changeTheme:function(){p("light"===m?"dark":"light")},themeVal:m}),Object(o.jsx)(x,{innerHtml:l,themeVal:m})]})},v=(t(232),function(){return Object(o.jsxs)("footer",{children:["Made by\xa0",Object(o.jsx)("a",{href:"https://linktr.ee/harshgkapadia",target:"_blank",rel:"noreferrer",children:"Harsh Kapadia"}),"\xa0|\xa0",Object(o.jsx)("a",{href:"https://github.com/HarshKapadia2/preview-markdown",target:"_blank",rel:"noreferrer",children:"GitHub repo"})]})}),f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)(v,{})]})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[233,1,2]]]);