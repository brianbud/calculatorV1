const keys = document.querySelector('.calculator-btns');

keys.addEventListener('click', event => {
    const {
        target
    } = event;
    const {
        value
    } = target;
    if (!target.matches('button')) {
        return;
        //exit function if user clicks on the calc body and not a btn
    } else {
        //pass value to parse method
        Calculator.parseInput(value)
    }

})

const Calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        //check if any 'special btns' have been clicked
        switch (value) {
            case '=':
                //caluclate the answer when they click = sign
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                //clear screen and stored values
                break;
            case '.':
                if (this.displayText === 0) {
                    //pass str of '0. ' into add text method
                    this.addText('0.')
                } else; {
                    //add value to text str
                    this.addText(value)
                }
                break;
            default:
                //add value to text string
                this.addText(value)
                break;
        }
    },

    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        /*check if last char in display AND entered value are not nums*/
        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
        }
        this.displayText += value
        //output display text to screen
        this.outputText(this.displayText)

    },

    outputText(text) {
        document.querySelector('.calculator-screen').value = text;
    },

    calcAnswer(equation) {
        let result = Function("return " + equation)()
        this.outputText(result)
    }
}