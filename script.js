function generateQuestion() {

    document.getElementById("answer").dataset.interest = '';
    document.getElementById("answer").dataset.totalAmount = '';
    document.getElementById("answer").dataset.futureValueAnnuity = '';
    document.getElementById("answer").innerText = ''; // Clear the previous answer text

    let topic = Math.floor(Math.random() * 3); // 0: Simple Interest, 1: Compound Interest, 2: Future Value of Annuity
    let principal = Math.floor(Math.random() * 1000) + 100;
    let rate = Math.floor(Math.random() * 10) + 1;
    let time = Math.floor(Math.random() * 10) + 1;
    let compoundingFrequency = Math.floor(Math.random() * 12) + 1; // For compound interest
    let payment = Math.floor(Math.random() * 100) + 10; // For annuity

    switch (topic) {
        case 0: // Simple Interest
            let questionTextSI = `Se você investir $${principal} a uma taxa de  ${rate}% por ${time} years, quanto você ganhará em juros simples?`;
            document.getElementById("question").innerText = questionTextSI;
            let interest = (principal * rate * time) / 100;
            document.getElementById("answer").innerText = '';
            document.getElementById("answer").dataset.interest = interest;
            break;

        case 1: // Compound Interest
            let questionTextCI = `Se você investir $${principal} a uma taxa de ${rate}% por ${time} years, capitalizada ${compoundingFrequency} vezes ao ano, quanto você terá ao todo?`;
            document.getElementById("question").innerText = questionTextCI;
            let totalAmount = principal * Math.pow((1 + (rate / (compoundingFrequency * 100))), compoundingFrequency * time);
            document.getElementById("answer").innerText = '';
            document.getElementById("answer").dataset.totalAmount = totalAmount.toFixed(2);
            break;

        case 2: // Future Value of Annuity
            let questionTextFVA = `Se você depositar $${payment} todos os anos em uma conta com taxa de juros de ${rate}% por ${time} anos, quanto você terá ao todo?`;
            document.getElementById("question").innerText = questionTextFVA;
            let futureValueAnnuity = payment * ((Math.pow((1 + rate/100), time) - 1) / (rate/100));
            document.getElementById("answer").innerText = '';
            document.getElementById("answer").dataset.futureValueAnnuity = futureValueAnnuity.toFixed(2);
            break;
    }
}

function showAnswer() {
    if (document.getElementById("answer").dataset.interest) {
        document.getElementById("answer").innerText = `Juros Simples: $${document.getElementById("answer").dataset.interest}`;
    } else if (document.getElementById("answer").dataset.totalAmount) {
        document.getElementById("answer").innerText = `Montante (Juros Compostos): $${document.getElementById("answer").dataset.totalAmount}`;
    } else if (document.getElementById("answer").dataset.futureValueAnnuity) {
        document.getElementById("answer").innerText = `Valor Futuro da Anuidade: $${document.getElementById("answer").dataset.futureValueAnnuity}`;
    }
}

