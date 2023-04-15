const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const currentStatus = document.querySelectorAll(".tracker__card-current");
const previousStatus = document.querySelectorAll(".tracker__card-previous");

dailyBtn.addEventListener("click", () => {
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
    getDailyData();
});

weeklyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
    getWeeklyData();
});

monthlyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");
    getMonthlyData();
});

const getDailyData = () => {
    fetch("../json/data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach((stat) => {
                currentStatus.forEach((element, index) => {
                    currentStatus[index].innerHTML =
                        data[index].timeframes.daily.current + "hrs";
                    previousStatus[
                        index
                    ].innerHTML = `Last Week - ${data[index].timeframes.daily.previous}hrs`;
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getWeeklyData = () => {
    fetch("../json/data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach((stat) => {
                currentStatus.forEach((element, index) => {
                    currentStatus[index].innerHTML =
                        data[index].timeframes.weekly.current + "hrs";
                    previousStatus[
                        index
                    ].innerHTML = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getMonthlyData = () => {
    fetch("../json/data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach((stat) => {
                currentStatus.forEach((element, index) => {
                    currentStatus[index].innerHTML =
                        data[index].timeframes.monthly.current + "hrs";
                    previousStatus[
                        index
                    ].innerHTML = `Last Week - ${data[index].timeframes.monthly.previous}hrs`;
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

window.addEventListener("load", () => {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
    getWeeklyData();
});
