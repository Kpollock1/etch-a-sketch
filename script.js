const columns = document.querySelector("#columnsRows")
columns.addEventListener("click", () => {
    const value = prompt()
    playRound(value);
})




function playRound(grid) {
    for (let i = 0; i < grid && i < 100; i++) {

        const container = document.querySelector('#container');
        const squareLength = document.createElement("div");
        squareLength.classList.add("squareLength");

        container.appendChild(squareLength);
        console.log(`${i + 1}`)

        for (let i = 0; i < grid && i < 100; i++) {
            const squareHeight = document.createElement("div");
            squareHeight.classList.add("squareHeight");
            squareLength.appendChild(squareHeight);

            let randomColor = Math.floor(Math.random()*16777215).toString(16);

            squareHeight.addEventListener("mouseover", () => {
                squareHeight.style.backgroundColor = "#" + randomColor;

            })
        }
    }


}




