var spinthewheel_attempts =[];
var points =[];

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const gametxt = document.getElementById("game-txt");

const rotationValues = [
{ minDegree: 0, maxDegree: 30, value: 2 },
{ minDegree: 31, maxDegree: 90, value: 1 },
{ minDegree: 91, maxDegree: 150, value: 10 },
{ minDegree: 151, maxDegree: 210, value: 5 },
{ minDegree: 211, maxDegree: 270, value: 4 },
{ minDegree: 271, maxDegree: 330, value: 3 },
{ minDegree: 331, maxDegree: 360, value: 2 },
];

const data = [16, 16, 16, 16, 16, 16];

var Wheelcolours = [
"#8b35bd",
"#b163da",
"#8b35bc",
"#b163da",
"#8b35bc",
"#b163da",
];

let spinthewheel = new Chart(wheel, {

plugins: [ChartDataLabels],

type: "pie",
data: {

    labels: [1, 2, 3, 4, 5, 10],

    datasets: [
    {
        backgroundColor: Wheelcolours,
        data: data,
    },
    ],
},
options: {

    responsive: true,
    animation: { duration: 0 },
    plugins: {

    tooltip: false,
    legend: {
        display: false,
    },

    datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
    },
    },
},
});

const valueGenerator = (angleValue) => {
for (let i of rotationValues) {

    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
    gametxt.innerHTML = `<p>Congratulations, you won ${i.value} points!</p>`;
    spinBtn.disabled = false;
    localStorage.setItem("points", parseInt(localStorage.getItem("points")) + i.value);
    break;
    }
}
};

let count = 0;

let resultValue = 101;

spinBtn.addEventListener("click", () => {
    if(localStorage.getItem("spin-the-wheel attempt") > 0){
        spinBtn.disabled = true;

        gametxt.innerHTML = `<p>Tries remaining: ${parseInt(localStorage.getItem("spin-the-wheel attempt"))}</p>`;

        let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
        //Interval for rotation animation
        let rotationInterval = window.setInterval(() => {
            //Set rotation for piechart
            /*
            Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
            */
            spinthewheel.options.rotation = spinthewheel.options.rotation + resultValue;
            //Update chart with new value;
            spinthewheel.update();
            //If rotation>360 reset it back to 0
            if (spinthewheel.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            spinthewheel.options.rotation = 0;
            } else if (count > 15 && spinthewheel.options.rotation == randomDegree) {
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;
            }
        }, 10);
        localStorage.setItem("spin-the-wheel attempt", parseInt(localStorage.getItem("spin-the-wheel attempt")) - 1);
    }
    else{
        gametxt.innerHTML = `<p>You have no more tries left.</p>`;
    }

});

