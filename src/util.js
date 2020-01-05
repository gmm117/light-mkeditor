const markInitText = `
Type **Hong's Markdown** here.

---
# Headline 1
## Headline 2
### Headline 3 
#### Headline 4 ####
##### Headline 5 #####
###### Headline 6 ######

---
*Emphasize* _emphasize_

---
**Strong** __Strong__

---    
A [Hong's Blog](https://gmm117.github.io/ "Hong's Blog").

Some text with [Google][1] and
another [Naver][2].

[1]: https://www.google.co.kr// "google"
[2]: https://www.naver.com// "naver"

---
Logo: ![Alt](./img/Hong's.png "Title")

---
Logo: ![Alt][3]

[3]: ./img/Hong's.png "Title"

---
Linked logo: [![alt text](./img/Hong's.png)](https://gmm117.github.io/portfolio/ "Title")

---
* Item
* Item
- Item
- Item

---
1. Item
2. Item

---
1. Item
2. Item
    * Mixed
    * Mixed  
3. Item

---
> Quoted text.
> > Quoted quote.

> * Quoted 
> * List

---
\`This is code\`

~~~~
This is a 
piece of code 
in a block
~~~~

\`\`\`
This too
\`\`\`

\`\`\`css
#button {
    border: none;
}
\`\`\`
`;

const boldExam = " **Strong** ";
const italicExam = " *Emphasize* ";
const H1Exam = " # Headline 1 ";
const H2Exam = " ## Headline 2 ";
const H3Exam = " ### Headline 3 ";
const BulletExam = " * Item ";
const NumberingExam = " 1. Item ";
const ImageExam = ` ![Alt Text](link "Title")`;
const LinkExam = ` [Title](link)`;

function getCaretPosition(node) {
    let range = window.getSelection().getRangeAt(0),
        preCaretRange = range.cloneRange(),
        rangeCount = 0,
        tmp = document.createElement("div"),
        startOffset = 0,
        isEndHtmlTag = false;

    preCaretRange.selectNodeContents(node);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    tmp.appendChild(preCaretRange.cloneContents());
    var childNodes = tmp.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].outerHTML) {
            rangeCount += childNodes[i].outerHTML.replace(/<br>|<br\/>|<br \/>/g, ' ').length;
            startOffset = 0;
            isEndHtmlTag = true;
        } else if (childNodes[i].nodeType == 3) {
            rangeCount += childNodes[i].textContent.length;
            startOffset = range.startOffset;
            isEndHtmlTag = false;
        } 
    }

    return { curPos : startOffset, totPos : rangeCount, line : i === 0 ? i : i-1, isEndHtmlTag : isEndHtmlTag };
}

function setCaretPosition(node, line, pos) {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(node.childNodes[line], pos);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

export {
    markInitText,
    boldExam,
    italicExam,
    H1Exam,
    H2Exam,
    H3Exam,
    BulletExam,
    NumberingExam,
    ImageExam,
    LinkExam
};

export { 
    getCaretPosition,
    setCaretPosition 
};
