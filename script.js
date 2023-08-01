function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    const timeElement = document.getElementById("time");
    timeElement.textContent = timeString;
}

// 初回表示
updateClock();

// 1秒ごとに更新
setInterval(updateClock, 1000);