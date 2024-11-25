


for (let i = 0; i < 16; i++) {

    const container = document.querySelector('#container');
    const squareLength = document.createElement("div");
    squareLength.classList.add("squareLength");
    squareLength.textContent = `${i}`;
    container.appendChild(squareLength);
    console.log(`${i + 1}`)

    for (let i = 0; i < 16; i++) {
        const squareHeight = document.createElement("div");
        squareHeight.classList.add("squareHeight");
        squareHeight.textContent = `${i}`;
        squareLength.appendChild(squareHeight);
    }
}

