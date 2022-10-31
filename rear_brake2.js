import loadScript from "./loadscript.js";

const plugin = ({ widgets, simulator, vehicle }) => {
    widgets.register("rearbrake", (box) => {
        return (box) => {
            const div = document.createElement("div")
            div.innerHTML = (`
            <div class="speed-chart" style="height:300px !important; width: 300px !important;">
                <div>
                <canvas id="myChart" style="height:300px !important; width: 300px !important;"></canvas>
                <h1>hello</h1>
    
                </div>
            </div>`)

                var x_co = [0, 5, 10, 15, 20, 25, 30];
            var y_co = [0, 15, 30, 47, 50, 45, 30];


            loadScript(box.window, "https://cdn.jsdelivr.net/npm/chart.js")
            const ctx =  div.querySelector("#myChart");
            const myChart  = new Chart(ctx, {

                type: 'line',
                data : {
                    labels: x_co,
                    datasets: [{
                        label: 'Rear Brake Temperature',
                        backgroundColor: '#34d2eb',
                        borderColor: '#34d2eb',
                        data: y_co
                    }]
                },

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

            })
            box.injectNode(div)
        
            
        }

    })
}

export default plugin





