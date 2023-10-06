document.addEventListener("DOMContentLoaded", () => {
    const descriptionMainContainers = document.getElementById("descriptionMainContainers")
    const shelfsCountryNames = document.getElementById("bite")
    // const shelfsCountryNames = document.querySelectorAll(".shelfs")

    shelfsCountryNames.addEventListener("click", () => {
        descriptionMainContainers.classList.toggle("hide")
        descriptionMainContainers.style.transition = "0.6s"
    })
})