class WidgetButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.innerHTML = `/* By MacWebUI */
widget-button[primary] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 47px;
    width: calc(auto + 14px);
    max-width: 100vw;
    height: 22px;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(255, 255, 255, 0.12),
    0 1px 2px 0 rgba(255, 255, 255, 0.12),
    0 0 1px 0 rgba(255, 255, 255, 0.24);
    background-image: linear-gradient(179deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.00) 96%),
    linear-gradient(to bottom right, #2277ff, #0c61ff);
    background-size: 100% 100%;
    font-size: 11px;
    color: #fff;
    font-family: 'SFPro-Regular', 'PingFang-Regular';
    padding: 2px 5px;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;
}
widget-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 47px;
    width: calc(auto + 14px);
    max-width: 100vw;
    height: 22px;
    border-radius: 5px;
    border: 0.5px solid rgba(0,0,0,0.02);
    background-color: #fff;
    font-size: 11px;
    color: #000;
    font-family: 'SFPro-Regular', 'PingFang-Regular';
    padding: 2px 5px;
    user-select: none;
    -webkit-user-select: none;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.15), 0 1px 0 0 rgba(0,0,0,0.05);
    cursor: default;
}`;
        let p_style = `margin: 0;`;
        const p = document.createElement('p');
        p.innerHTML = this.innerHTML;
        p.setAttribute('style', p_style);

        document.head.appendChild(style);
        shadow.appendChild(p);

        function start_click() {
            this.style.filter = 'brightness(90%)';
        }
        function end_click() {
            this.style.filter = 'none';
        }

        this.addEventListener('mousedown', start_click);
        p.addEventListener('mousedown', start_click);
        this.addEventListener('mouseup', end_click);
        p.addEventListener('mouseup', end_click);
    }
}

class ContainerWindow extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.innerHTML = `/* By MacWebUI */
container-window {
    border-radius: 10px;
    position: absolute;
    box-shadow: 0 18px 100px 0 rgba(0,0,0,0.20), 0 0 1.5px 0 rgba(0,0,0,0.275);
    resize: both;
    overflow: auto;
    &::-webkit-resizer {
        background: transparent;
    }
}`;
        const wintools = document.createElement('div');
        wintools.setAttribute('style', 'z-index: 2; position: absolute; top: 0; left: 0; width: auto; height: auto; display: inline-flex; flex-direction: row; justify-content: center; align-items: center; user-select: none; -webkit-user-select: none;')
        const red = document.createElement('div');
        const yellow = document.createElement('div');
        const green = document.createElement('div');
        red.setAttribute('style', 'cursor: default; font-size: 7px; display: flex; justify-content: center; align-items: center; width: 10px; height: 10px; border-radius: 50%; background-color: #ff5f57; margin-right: 6px;');
        yellow.setAttribute('style', 'cursor: default; font-size: 6px; display: flex; justify-content: center; align-items: center; width: 10px; height: 10px; border-radius: 50%; background-color: #febc2e; margin-right: 6px;');
        green.setAttribute('style', 'cursor: default; font-size: 7px; display: flex; justify-content: center; align-items: center; width: 10px; height: 10px; border-radius: 50%; background-color: #28c840;');
        const header = document.createElement('header');
        header.setAttribute('style', 'white-space: nowrap; overflow: hidden; cursor: default; user-select: none; -webkit-user-select: none; border-radius: 10px 10px 0 0; position: relative; top: -2px; left: 0; width: 0px; height: 22px; background-color: #f5f5f5ee; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 0 0 rgba(0,0,0,0.15);')
        const tit = document.createElement('p');
        tit.setAttribute('style', 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 45%; margin: 0; text-align: center; font-family: \'SFPro-Bold\', \'PingFang-Bold\'; font-size: 13px;');
        const content = document.createElement('div');
        content.innerHTML = this.innerHTML;
        let width = this.getAttribute('width');
        let height = this.getAttribute('height');
        let x = this.getAttribute('x');
        let y = this.getAttribute('y');
        let title = this.getAttribute('title');
        let commands = new Array();
        commands[0] = this.getAttribute('one');
        commands[1] = this.getAttribute('two');
        commands[2] = this.getAttribute('three');
        this.style.width = width + 'px';
        this.style.height = height + 'px';
        this.style.top = y + 'px';
        this.style.left = x + 'px';
        header.style.width = '100%';
        wintools.style.top = 6 + 'px';
        wintools.style.left = 8 + 'px';
        tit.innerHTML = title;
        document.head.appendChild(style);
        shadow.appendChild(wintools);
        shadow.appendChild(header);
        wintools.appendChild(red);
        wintools.appendChild(yellow);
        wintools.appendChild(green);
        header.appendChild(tit);
        shadow.appendChild(content);

        function start_enter() {
            red.innerHTML = '✕';
            yellow.innerHTML = '—';
            green.innerHTML = '□';
        }
        function end_enter() {
            red.innerHTML = '';
            yellow.innerHTML = '';
            green.innerHTML = '';
        }
        function start_click(event) {
            event.target.style.filter = 'brightness(90%)'; 
        }
        function end_click(event) {
            event.target.style.filter = 'none';
        }

        wintools.addEventListener('mouseover', start_enter);
        wintools.addEventListener('mouseout', end_enter);
        red.addEventListener('mousedown', start_click);
        yellow.addEventListener('mousedown', start_click);
        green.addEventListener('mousedown', start_click);
        red.addEventListener('mouseup', end_click);
        yellow.addEventListener('mouseup', end_click);
        green.addEventListener('mouseup', end_click);
    }
}

const font = document.createElement('link');
font.setAttribute('rel', 'stylesheet');
font.setAttribute('href', './font.css');
document.head.appendChild(font);
document.body.innerHTML = document.body.innerHTML.replace('_apple_;', '');

customElements.define('container-window', ContainerWindow);
customElements.define('widget-button', WidgetButton);