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
    } else {
        //pass value to parse method
        console.log(event)
        console.log(target)
        console.log(value)
    }

})