import marked from 'marked';
import { getCaretPosition, setCaretPosition } from './util';
import { markInitText, boldExam, italicExam, H1Exam, H2Exam, H3Exam, BulletExam, NumberingExam, ImageExam, LinkExam } from './util';

export default class main {
    constructor() {
        this.that = this;
        this.preview = null;
        this.editor = null;

        this.initialize();
    }

    initialize() {
        this.editor = document.getElementById('editor');
        this.preview = document.getElementById('preview');

        this.editor.focus();

        if(this.editor !== undefined && this.preview !== undefined) {
            var eventType = /Trident/.test( navigator.userAgent ) ? 'textinput' : 'input';
            this.editor.addEventListener(eventType, this.updateEditChange.bind(this));

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

    updateMarkDownButton(buttonExam) {
        const {line, curPos, totPos, isEndHtmlTag} = getCaretPosition(this.editor);
        let text, editText = '';
        
        for(let node in this.editor.childNodes) {
            if(this.editor.childNodes[node].nodeType === 3) {
                editText += this.editor.childNodes[node].textContent;
            } else if(this.editor.childNodes[node].nodeType === 1) { // br태그일경우
                editText += '\n';
            }
        }
        text = editText.substr(0, totPos) + buttonExam + editText.substr(totPos);
        
        this.updateEditText(text);
        this.updatePreview(text);

        setCaretPosition(this.editor, isEndHtmlTag === true ? line +1 : line, curPos + buttonExam.length);
        this.editor.focus();
    }

    updateEditText(text) {
        this.editor.innerText = text;
    }

    updatePreview(text) {
        this.preview.innerHTML = marked(text);
    }

    updateEditChange(e) {
        this.updatePreview(e.target.innerText);
    }
}

window["main"] = main;
