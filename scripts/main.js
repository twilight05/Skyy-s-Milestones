document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(17, 25);

        // Array to map day indices to full day names
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayIndex = now.getUTCDay();
        const fullDay = daysOfWeek[dayIndex];

        document.getElementById('current-time').innerText = utcTime;
        document.getElementById('current-day').innerText = fullDay;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

