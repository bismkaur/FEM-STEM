document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").textContent = "Yay! We can't wait to see you there!";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * (window.innerWidth - 100) + "px";
    this.style.top = Math.random() * (window.innerHeight - 50) + "px";
});
