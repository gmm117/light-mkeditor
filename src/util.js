const markInitText = `Type **Hong's Markdown** here.

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
Logo: ![Alt](./img/Hongs.png "Title")

---
Logo: ![Alt][3]

[3]: ./img/Hongs.png "Title"

---
Linked logo: [![alt text](./img/Hongs.png)](https://gmm117.github.io/portfolio/ "Title")

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

const boldExam = "**Strong**";
const italicExam = "*Emphasize*";
const H1Exam = "# Headline 1";
const H2Exam = "## Headline 2";
const H3Exam = "### Headline 3";
const BulletExam = "* Item";
const NumberingExam = "1. Item";
const ImageExam = `![Alt Text](link "Title")`;
const LinkExam = `[Title](link)`;

function findCaretInfo(childNodes, range, infos) {
    let prevNode, nextNode;
    for (let node = 0; node < childNodes.length; node++) {
        nextNode = childNodes[node].nextSibling;
        prevNode = childNodes[node].previousSibling;
        infos.isEndReturn = false;
        if (childNodes[node].nodeName === "BR") {
            infos.rangeCount += 1;
            infos.startOffset = 0;
            infos.isText = false;
            infos.line++;
        } else if (childNodes[node].nodeType == 3) {
            infos.rangeCount += childNodes[node].textContent.replace(/(?:\r\n|\r|\n)/g, '\n').length;
            infos.startOffset = range.startOffset;
            infos.isText = true;
            infos.line++;

            // text element후에 바로 div올 경우에는 line break를 추가해줘야해서 아래 예외처리추가
            if((nextNode && (nextNode.nodeName === "DIV" || nextNode.nodeName === "P")) ||
                (prevNode && (prevNode.nodeName === "DIV" || prevNode.nodeName === "P"))) {
                infos.rangeCount += 1;
                infos.isText = false;
                infos.line++;
            }
        } else if(childNodes[node].nodeName === "DIV" || childNodes[node].nodeName === "P") {
            if(prevNode && (prevNode.nodeName === "DIV" || prevNode.nodeName === "P")) {
                infos.rangeCount += 1;
                infos.isEndReturn = false;
                infos.startOffset = 0;
                infos.isText = false;
                infos.line++;
            }

            if(childNodes[node].childNodes.length > 0) {
                findCaretInfo(childNodes[node].childNodes, range, infos);
            } 
        } 
    }
}

function getCaretPosition(node) {
    let range = window.getSelection().getRangeAt(0),
        preCaretRange = range.cloneRange(),
        tmp = document.createElement("div"),
        infos = {rangeCount : 0, startOffset: 0, line : 0, isText : false, isEndReturn : false};

    preCaretRange.selectNodeContents(node);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    tmp.appendChild(preCaretRange.cloneContents());
    
    findCaretInfo(tmp.childNodes, range, infos);
   
    return { curPos : infos.startOffset, totPos : infos.rangeCount, line : infos.line, isText : infos.isText, isEndReturn : infos.isEndReturn };
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
