let activeInput = 1; // 1 or 2, to track which input is being filled

function addDigit(digit) {
    const input = document.getElementById(`pin${activeInput}`);
    if (input.value.length < 6) {
        input.value += digit;
        toggleInput();
    }
    toggleSubmitButton();
}

function deleteDigit() {
    const input = document.getElementById(`pin${activeInput}`);
    input.value = input.value.slice(0, -1);
    toggleInput();
    toggleSubmitButton();
}

function clearInput() {
    document.getElementById('pin1').value = '';
    document.getElementById('pin2').value = '';
    activeInput = 1;
    toggleSubmitButton();
}

function toggleInput() {
    const input1 = document.getElementById('pin1');
    const input2 = document.getElementById('pin2');

    if (input1.value.length === 6) {
        activeInput = 2;
    } 
    if (input2.value.length === 6) {
        activeInput = 1; // Lock switching when both are filled
    }
}

function toggleSubmitButton() {
    const input1 = document.getElementById('pin1').value;
    const input2 = document.getElementById('pin2').value;
    document.getElementById('submitBtn').disabled = !(input1.length === 6 && input2.length === 6);
}

function validatePin() {
    const input1 = document.getElementById('pin1').value;
    const input2 = document.getElementById('pin2').value;

    if (input1 === input2) {
        alert('Пин-код успешно подтвержден!');
    } else {
        alert('Пин-коды не совпадают. Попробуйте еще раз.');
        clearInput();
    }
}