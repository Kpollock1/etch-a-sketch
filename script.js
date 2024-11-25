for (i = 0; i < 256; i++) {
    const container = document.querySelector('#container');

    const square = document.createElement("div")
    square.classList.add("square");
    square.textContent = i;
    container.appendChild(square);
    console.log(`${i + 1}`)
}