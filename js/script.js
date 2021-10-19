function changeText (element){
  element.classList.add("centerText")
}

const nameInput = document.getElementById("name")
const email = document.getElementById("email")
const birthday = document.getElementById("birthday")

nameInput.addEventListener("input", () => changeText(nameInput))
email.addEventListener("input", () => changeText(email))
birthday.addEventListener("input", () => changeText(birthday))
