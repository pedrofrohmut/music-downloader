const info = document.querySelector("#info")

info.innerText = `This is app using Chrome (v${versions.chrome()}), ` +
    `Node (v${versions.node()}) and Electron (v${versions.electron()})`

window.versions.ping().then(response => {
    alert(response)
})

// URL Form
const form = document.querySelector("#main-form")
const urlInput = document.querySelector("#url-input")

// Choose Directory
const dirOutput = document.querySelector("#dir-output")
const dirButton = document.querySelector("#dir-button")

// Output Box
const output = document.querySelector("#output")

form.addEventListener("submit", e => {
    e.preventDefault()
    output.innerText = urlInput.value
})

dirButton.addEventListener("click", e => {
    alert("Hello, Dib Button!")
})
