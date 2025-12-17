document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.calculator');
    const keys = document.querySelector('.calculator__keys');
    const display = document.querySelector('.calculator__display');

    if (!calculator || !keys || !display) return;

    keys.addEventListener('click', e => {
        const key = e.target.closest('button');
        if (!key || !keys.contains(key)) return;

        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        if (!action) {
            // number key
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
            return;
        }

        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue && operator && previousKeyType !== 'operator') {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = String(calcValue);
                calculator.dataset.firstValue = String(calcValue);
            } else {
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
            return;
        }

        if (action === 'decimal') {
            if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.';
            } else if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
            calculator.dataset.previousKeyType = 'decimal';
            return;
        }

        if (action === 'clear') {
            display.textContent = '0';
            delete calculator.dataset.firstValue;
            delete calculator.dataset.operator;
            calculator.dataset.previousKeyType = 'clear';
            return;
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            if (firstValue && operator) {
                display.textContent = String(calculate(firstValue, operator, secondValue));
            }
            calculator.dataset.previousKeyType = 'calculate';
            return;
        }
    });

    function calculate(n1, operator, n2) {
        const a = parseFloat(n1);
        const b = parseFloat(n2);
        if (Number.isNaN(a) || Number.isNaN(b)) return '';
        if (operator === 'add') return a + b;
        if (operator === 'subtract') return a - b;
        if (operator === 'multiply') return a * b;
        if (operator === 'divide') return a / b;
        return '';
    }
});
