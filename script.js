document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", function (e) {
        e.preventDefault()

        const userNameValue = document.getElementById("username").value.trim()
        const emailValue = document.getElementById("email").value.trim()
        const passwordValue = document.getElementById("password").value.trim()


        // check username validition

        let isValid = true
        let messages = []
        if (userNameValue.length < 3) {
            isValid = false
            messages.push('Username must be at least 3 characters long.')
        }
        if (!emailValue.split("").includes("@") || !emailValue.split("").includes(".")) {
            isValid = false
            messages.push('Please enter a valid email address.')
        }
        if (passwordValue.length < 10) {
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