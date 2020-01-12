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

const boldExam = " **Strong** ";
const italicExam = " *Emphasize* ";
const H1Exam = " # Headline 1 ";
const H2Exam = " ## Headline 2 ";
const H3Exam = " ### Headline 3 ";
const BulletExam = " * Item ";
const NumberingExam = " 1. Item ";
const ImageExam = ` ![Alt Text](link "Title")`;
const LinkExam = ` [Title](link)`;

function findCaretInfo(childNodes, range, infos) {
    for (let i = 0; i < childNodes.length; i++) {
        infos.isEndReturn = false;
        if (childNodes[i].nodeName === "BR") {
            infos.rangeCount += 1;
            infos.startOffset = 0;
            infos.isText = false;
            infos.line++;
        } else if (childNodes[i].nodeType == 3) {
            infos.rangeCount += childNodes[i].textContent.length;
            infos.startOffset = range.startOffset;
            infos.isText = true;
            infos.line++;
        } else if(childNodes[i].nodeName === "DIV" || childNodes[i].nodeName === "P") {
            if(childNodes[i].childNodes.length > 0) {
                findCaretInfo(childNodes[i].childNodes, range, infos);     
            } else {
                infos.rangeCount += 1;
                infos.isEndReturn = true;
                infos.startOffset = 0;
                infos.isText = false;
                infos.line++;
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

    if(infos.isEndReturn) { // 마지막 \n일경우 빼주고 innerText할 시 앞에서 추가해주도록 한다.
        infos.rangeCount -= 1;
    }
    
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
