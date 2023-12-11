 const windowBackground = document.getElementById("window-background")
 const windowContainer = document.getElementById("window-container")
 const closeButton = document.getElementById("close-button")
 const reportCard = document.getElementById("report-card")
 const News = document.getElementById("news")
 const Tasks = document.getElementById("tasks")

 function openbutton1() {
    reportCard.addEventListener("click",() => windowBackground.style.display="flex")
 }
 function openbutton2() {
    News.addEventListener("click",() => windowBackground.style.display="flex")
 }

 function openbutton3() {
    Tasks.addEventListener("click",() => windowBackground.style.display="flex")
 }



 const closeWindow = () => {
    windowContainer.classList.add("close")
    setTimeout(() => {
        windowContainer.classList.remove("close")
        windowBackground.style.display = "none"
    }, 1000)
 } 

 closeButton.addEventListener("click", () => closeWindow())
 
 window.addEventListener("click", e => e.target == windowBackground && closeWindow())