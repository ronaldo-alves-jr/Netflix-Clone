const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("change", (e)=>{
    document.body.classList.toggle("dark", e.target.checked);
})