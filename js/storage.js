export function getCurrentThesis(currentThesis) {
    localStorage.setItem("currentThesis", currentThesis)
}

export function setCurrentThesis() {
    return localStorage.getItem("currentThesis")
}
