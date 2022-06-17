export const Button = class {

    constructor(label, onClick) {
        this.label = label;
        this.onClick = onClick;
    }

    render() {

        const button = document.createElement('button'); //mozemy uzywac zmiennej button spokojnie :) tutaj
        button.innerText = this.label;


        button.style.border = '1px solid rgba(0,0,0,0.1)';
        button.style.outline = 'none';
        button.style.borderRadius = '4px';
        button.style.background = '#ffffff';
        button.style.padding = '4px';
        button.style.margin = '4px';
        button.style.minWidth = '20px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => this.onClick()); //rownież dziwne ale tak już jest

        //button.addEventListener('click', this.onClick); //BARDZIEJ zrozumiałą funkcja dla mnie i działa jak powinna :)

        return button;
    }
}

export default Button;
