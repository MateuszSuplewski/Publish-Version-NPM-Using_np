import { Header } from './Header.js';
import { Button } from './Button.js';
//Projekt mini z wykorzystaniem Klas? Konstruktorów  

export const Counter = class {
    constructor(selector, startNumber = 0) {
        const container = document.querySelector(selector);

        if (!container) throw new Error('Container element not found !');

        this.selector = selector;
        this.container = container;
        this.number = startNumber;
    }

    init() {
        this.render();
    }

    render() {

        this.container.innerText = '';

        const h1 = new Header(this.number);
        const button = new Button('+', () => this.inc()); //funkcje przekazujemy poprzez cala deklaracje

        this.container.appendChild(h1.render());
        this.container.appendChild(button.render());
    }

    inc() {
        this.number++;
        this.render();
    }

    status2() {
        console.log('Current number is: ' + this.number);
    }

    toString() {
        return 'Current number is: ' + this.number;
    }

    valueOf() {
        return this.number;
    }

}

export default Counter;



