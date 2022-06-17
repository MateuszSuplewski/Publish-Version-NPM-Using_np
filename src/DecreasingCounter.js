import { Counter } from "./Counter.js";
import { Button } from './Button.js';

export const DecreasingCounter = class extends Counter {
    //jeżeli nie ma konstuktora to automatycznie będzie wykonywany konstruktor klasy dziedziczoenj
    constructor(...all) {
        super(...all); //lub możemy wywołać konstuktor
    }

    dec() {
        this.number--;
        this.render();
    }


    render() {
        //Counter.prototype.render.call(this); 
        super.render(); //odwołujemy do klasy expends i używamy jej metody
        const button = new Button('-', () => this.dec());
        this.container.appendChild(button.render());
    }
}

export default DecreasingCounter;

