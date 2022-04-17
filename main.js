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
        if (this.displayText === '0') {
            this.displayText = ''
        }
        //check if any 'special btns' have been clicked
        switch (value) {
            case '=':
                //caluclate the answer when they click = sign
                break;
            case 'AC':
                //clear screen and stored values
                break;
            case '.':
                if (this.displayText === 0) {
                    //pass str of '0. ' into add text method
                } else; {
                    //add value to text str
                }

        }
    }
}