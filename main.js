//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry

function formatPercentageList(input, startFrom = 0) {
    const lines = input.trim().split('\n');
    let formatted = [];
    let totalCount = 0;

    for (let line of lines) {
    line = line.replace('%', '').trim();
    let [numPart, countPart] = line.split('x').map(s => s.trim());
    const num = parseInt(numPart);

    if (isNaN(num) || num < startFrom) continue;

    if (!countPart || countPart === '1') {
        formatted.push(numPart);
        totalCount += 1;
    } else {
        formatted.push(`${numPart}x${countPart}`);
        totalCount += parseInt(countPart);
    }
    }

    return "fails past " + startFrom + ": " + formatted.join(', ') + "\n" + totalCount + " fails total"; //i edited this line to be like this which shows ig

}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy: " + err);
    });
}

function processList() {
    const input = document.getElementById('input').value;
    const startFrom = parseInt(document.getElementById('startFrom').value) || 0;
    const output = formatPercentageList(input, startFrom);

    copyToClipboard(output)
}

//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry
//this was coded by chatgpt im sorry