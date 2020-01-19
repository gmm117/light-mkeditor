import marked from 'marked';
import { getCaretPosition, setCaretPosition } from './util';
import { markInitText, boldExam, italicExam, H1Exam, H2Exam, H3Exam, BulletExam, NumberingExam, ImageExam, LinkExam } from './util';

export default class main {
    constructor() {
        this.that = this;
        this.preview = null;
        this.editor = null;
        this.editText = "";
        

        marked.setOptions({
            gfm: true,
            breaks: true
        });

        this.initialize();
    }

    initialize() {
        this.editor = document.getElementById('editor');
        this.preview = document.getElementById('preview');

        if(this.editor !== undefined && this.preview !== undefined) {
            var eventType = /Trident/.test( navigator.userAgent ) ? 'textinput' : 'input';
            this.editor.addEventListener(eventType, this.updateEditChange.bind(this));
            this.editor.addEventListener("keyup", this.updateEditChange.bind(this));

            this.initializeButton();    

            this.updateEditText(markInitText);
            this.updatePreview(markInitText);
        }
    }

    initializeButton() {
        const bold = document.getElementById('bold');
        if(bold !== undefined) {
            bold.addEventListener('click', (e) => {
                this.updateMarkDownButton(boldExam);
            });
        }

        const italic = document.getElementById('italic');
        if(italic !== undefined) {
            italic.addEventListener('click', (e) => {
                this.updateMarkDownButton(italicExam);
            });
        }

        const H1 = document.getElementById('H1');
        if(H1 !== undefined) {
            H1.addEventListener('click', (e) => {
                this.updateMarkDownButton(H1Exam);
            });
        }

        const H2 = document.getElementById('H2');
        if(H2 !== undefined) {
            H2.addEventListener('click', (e) => {
                this.updateMarkDownButton(H2Exam);
            });
        }

        const H3 = document.getElementById('H3');
        if(H3 !== undefined) {
            H3.addEventListener('click', (e) => {
                this.updateMarkDownButton(H3Exam);
            });
        }

        const Bullet = document.getElementById('bullet');
        if(Bullet !== undefined) {
            Bullet.addEventListener('click', (e) => {
                this.updateMarkDownButton(BulletExam);
            });
        }

        const Numbering = document.getElementById('numbering');
        if(Numbering !== undefined) {
            Numbering.addEventListener('click', (e) => {
                this.updateMarkDownButton(NumberingExam);
            });
        }

        const Image = document.getElementById('image');
        if(Image !== undefined) {
            Image.addEventListener('click', (e) => {
                this.updateMarkDownButton(ImageExam);
            });
        }

        const Link = document.getElementById('link');
        if(Link !== undefined) {
            Link.addEventListener('click', (e) => {
                this.updateMarkDownButton(LinkExam);
            });
        }
    }

    updateChildText(childNodes) {
        let prevNode, nextNode;
        for(let node = 0; node < childNodes.length; node++) {
            nextNode = childNodes[node].nextSibling;
            prevNode = childNodes[node].previousSibling;
            if(childNodes[node].nodeType === 3) {
                if(prevNode && (prevNode.nodeName === "DIV" || prevNode.nodeName === "P")) {
                    this.editText += '\n';
                }

                this.editText += childNodes[node].textContent.replace(/(?:\r\n|\r|\n)/g, '\n');

                if(nextNode && (nextNode.nodeName === "DIV" || nextNode.nodeName === "P")) {
                    this.editText += '\n';
                }
            } else if(childNodes[node].nodeName === "BR") { // br태그일경우(IE일경우 P태그 옴)
                this.editText += '\n';
            } else if(childNodes[node].nodeName === "DIV" || childNodes[node].nodeName === "P") {
                if(prevNode && (prevNode.nodeName === "DIV" || prevNode.nodeName === "P")) {
                    this.editText += '\n';
                }

                if(childNodes[node].childNodes.length > 0) {
                    this.updateChildText(childNodes[node].childNodes);
                } 
            }
        }
    }

    updateMarkDownButton(buttonExam) {
        const {line, curPos, totPos, isText, isEndReturn} = getCaretPosition(this.editor);
        let text;

        this.editText = "";
        // ie브라우저 일경우 enter키의 \r\n 중북으로 들어와서 따로 처리함.
        // if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (navigator.userAgent.toLowerCase().indexOf("msie") != -1) ) {
        //     this.updateChildText(this.editor.childNodes);
        // } else {
        //     this.editText = this.editor.outerText.replace(/(?:\r\n|\r|\n)/g, '\n');
        // }
        this.updateChildText(this.editor.childNodes);
 
        text = this.editText.substr(0, totPos) + buttonExam + this.editText.substr(totPos);
        
        this.updateEditText(text);
        this.updatePreview(text);

        setCaretPosition(this.editor, isText === true ? line - 1: line, curPos + buttonExam.length);
    }

    updateEditText(text) {
        this.editor.innerText = text;
    }

    updatePreview(text) {
        this.preview.innerHTML = marked(text);
    }

    updateEditChange(e) {
        this.updatePreview(this.editor.innerText);
    }
}

window["main"] = main;
