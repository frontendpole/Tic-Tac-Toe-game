export default class ResultTable {
    constructor() {
        this.resultTable = this.createResultTable()
        this.resultContent = this.resultContent()
    }

    createResultTable() {
        const resultTable = document.createElement('div');
        document.body.appendChild(resultTable);
        resultTable.classList.add('resultTable');
    }

    resultContent() {
        const resultTable = document.querySelector('.resultTable');
        const results = document.createElement('h2');
        resultTable.appendChild(results);
        results.innerText = 'Results';

        const resultX = document.createElement('h3');
        resultTable.appendChild(resultX);
        resultX.innerText = `X:`;
        resultX.classList.add('result-x');
        const resultO = document.createElement('h3');
        resultTable.appendChild(resultO);
        resultO.innerText = `O:`;
        resultO.classList.add('result-o');
        const spanX = document.createElement('span');
        resultX.appendChild(spanX);
        const spanO = document.createElement('span');
        resultO.appendChild(spanO);
    }
}

let scores = {
    x: 0,
    o: 0
}

export function addScoreX() {
    scores.x++;
    const spanX = document.querySelector('.result-x span')
    spanX.textContent = ` ${scores.x}`;
}

export function addScoreO() {
    scores.o++;
    const spanO = document.querySelector('.result-o span')
    spanO.textContent = ` ${scores.o}`;
}

