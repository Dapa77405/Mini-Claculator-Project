const result = document.getElementById('result');
const history = document.getElementById('history');
let historyList = [];
let isHistoryVisible = false;

function toggleHistory() {
    isHistoryVisible = !isHistoryVisible;
    history.classList.toggle('show');
}

function appendToDisplay(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = '';
}

function deleteChar() {
    result.value = result.value.slice(0, -1);
}

function clearHistory() {
    historyList = [];
    updateHistoryDisplay();
    if (isHistoryVisible) {
        toggleHistory();
    }
}

function updateHistoryDisplay() {
    history.innerHTML = historyList.map(item => `<div>${item}</div>`).join('');
    history.scrollTop = history.scrollHeight;
}

function addToHistory(expression, answer) {
    historyList.push(`${expression} = ${answer}`);
    if (historyList.length > 5) {
        historyList.shift();
    }
    updateHistoryDisplay();
}

function calculate(type = '=') {
    try {
        let expression = result.value;
        let answer;

        switch(type) {
            case 'sqrt':
                answer = Math.sqrt(eval(expression.replace(/x/g, '*')));
                addToHistory(`√(${expression})`, answer);
                break;
            case 'sin':
                answer = Math.sin(eval(expression.replace(/x/g, '*')) * Math.PI / 180);
                addToHistory(`sin(${expression})`, answer);
                break;
            case 'cos':
                answer = Math.cos(eval(expression.replace(/x/g, '*')) * Math.PI / 180);
                addToHistory(`cos(${expression})`, answer);
                break;
            case 'tan':
                answer = Math.tan(eval(expression.replace(/x/g, '*')) * Math.PI / 180);
                addToHistory(`tan(${expression})`, answer);
                break;
            default:
                expression = expression.replace(/x/g, '*').replace(/%/g, '/100');
                answer = eval(expression);
                addToHistory(result.value, answer);
        }

        if (!isFinite(answer)) {
            throw new Error('Invalid calculation');
        }

        result.value = Number(answer.toFixed(8));
    } catch (error) {
        result.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Numbers and operators
    if (/[\d\+\-\*\/\.\%]/.test(key)) {
        appendToDisplay(key);
    }
    // Enter or = for calculation
    else if (key === 'Enter' || key === '=') {
        calculate('=');
    }
    // Backspace for delete
    else if (key === 'Backspace') {
        deleteChar();
    }
    // Escape for clear
    else if (key === 'Escape') {
        clearDisplay();
    }
});