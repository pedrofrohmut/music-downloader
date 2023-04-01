const form    = document.querySelector("#main-form")
const textUrl = document.querySelector("#txt-url")
const output  = document.querySelector("#output")

if (! form || !textUrl || ! output) {
    alert("Failed to load the elements in Renderer JS")
}

form.addEventListener("submit", e => {
    e.preventDefault()
    output.innerHTML = textUrl.value
})
