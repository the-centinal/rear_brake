import loadScript from "./loadscript";

const plugin = ({ widgets, simulator, vehicle }) => {
    widgets.register("rearbrake", (box) => {
        return (box) => {
            const div = document.createElement("div")
            div.innerHTML = (`
            <div class="speed-chart" style="height:300px !important; width: 300px !important;">
                <div>
                <canvas id="myChart" style="height:300px !important; width: 300px !important;"></canvas>
    
                </div>
            </div>`)

            var i = 0;
            var x_co = [0, 5, 10, 15, 20, 25, 30];
            var j = 0;
            var y_co = [0, 15, 30, 47, 50, 45, 30]
            const labels = x_co


            const data = {
                labels: labels,
                datasets: [{
                    label: 'Rear Brake Temperature',
                    backgroundColor: '#34d2eb',
                    borderColor: '#34d2eb',
                    data: y_co
                }]
            };

            const config = {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Temp (in °C)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Time (in mins.)'

                            }
                        }
                    }
                }
            };
            const myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
            box.injectNode(div)

            loadScript(box.window, "https://cdn.jsdelivr.net/npm/chart.js")
        }

    })
}

export default plugin





// const SignalPills = (pills, vehicle) => {
//     return (box) => {
//         const div = document.createElement("div")
//         div.innerHTML = (`
//         <style>
//         @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
//         * {
//             box-sizing: border-box;
//         }
//         body {
//             font-family: 'Lato', sans-serif;
//         }
//         </style>
//         <div style="height: 100%; padding: 10px; display: flex; flex-direction: column;">
//             ${pills.map((pill, i) => (`
//                 <div style="display: flex; height: 100%; background-color: rgb(0 80 114); color: white; padding: 15px; border-radius: 15px; user-select: none; align-items: center;${i !== pills.length - 1 && 'margin-bottom: 7px;'}" data-signal="${pill.signal}">
//                     <div style="display: flex; flex-direction: column; overflow: hidden; width: 100%;">
//                         <div style="margin-bottom: 10px; overflow: hidden;text-overflow: ellipsis; font-size: 0.75em;" title="${pill.signal}">${pill.signal}</div>
//                         <div style="font-size: 1.1em;" class="signal-value">No Value Yet</div>
//                     </div>
//                     ${pill.icon && `<div style="margin-left: auto; height: 100%; margin-left: 6px;">${pill.icon}</div>`}
//                 </div>
//             `)).join("")}
//         </div>
//         `)

//         const intervalId = setInterval(async () => {
//             for (const { signal } of pills) {
//                 const strippedApi = signal.split(".").slice(1).join(".")
//                 div.querySelector(`[data-signal="${signal}"] .signal-value`).textContent = await vehicle[strippedApi].get()
//             }
//         }, 300)

//         box.injectNode(div)

//         loadScript(box.window, "https://kit.fontawesome.com/c37d34b852.js")

//         return () => {
//             clearInterval(intervalId)
//         }
//     }
// }

// export default SignalPills