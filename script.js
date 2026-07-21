const timeElement = document.getElementById("time");

function updateTime() {
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

const checklist = document.querySelector("ul");
const item = document.createElement("li");
item.textContent = "✅ JavaScript loaded";
checklist.appendChild(item);

console.log("Website loaded successfully!");
