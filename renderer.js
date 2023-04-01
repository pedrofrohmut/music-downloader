const form   = document.getElementById("main-form")
const output = document.getElementById("output")

form.addEventListener("submit", e => {
    e.preventDefault()
    output.innerText = "Hello, Output!"
})
