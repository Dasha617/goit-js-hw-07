const fonSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');


fonSizeControlRef.addEventListener("input", handleInputRange);

function handleInputRange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}