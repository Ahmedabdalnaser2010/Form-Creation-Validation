document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", function (e) {
        e.preventDefault()

        const username = document.getElementById("username").value.trim()
        const email = document.getElementById("email").value.trim()
        const password = document.getElementById("password").value.trim()


        // check username validition

        let isValid = true
        let messages = []
        if (username.length < 3) {
            isValid = false
            messages.push('Username must be at least 3 characters long.')
        }
        if (!email.split("").includes("@") || !email.split("").includes(".")) {
            isValid = false
            messages.push('Please enter a valid email address.')
        }
        if (password.length < 10) {
            isValid = false
            messages.push('Password must be at least 6 characters long.')
        }
        console.log(messages)
        let feedbackDiv = document.getElementById("form-feedback")
        feedbackDiv.style.display = "block"
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
            console.log(feedbackDiv)

        } else {
            feedbackDiv.innerHTML = messages.join("<br>")
            feedbackDiv.style.color = "#dc3545"
        }
    }
    )
})