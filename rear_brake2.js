
import loadScript from "./loadscript.js";
const plugin = ({ widgets, simulator, vehicle }) => {
  


   


        widgets.register("rearbrake", function (box, msg) {
           const div = document.createElement("div");

            div.innerHTML = (`
            <div>hello world</div>
              <div class="speed-chart" style="height:280px !important; width: 280px !important;">
                  <div>
                  <div id="myChart" style="height:280px !important; width: 280px !important;"></div>
                  </div>
              </div>`);


            var x_co = [0, 5, 10, 15, 20, 25, 30];

            var y_co = [0, 15, 30, 47, 50, 45, 30]



            const data = {
                labels: x_co,
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
            loadScript(box.window, "https://cdn.jsdelivr.net/npm/chart.js")
          const myChart = new Chart(

                div.querySelector("#myChart"),
                config
            );
            box.injectNode(div);

            console.log("all good");

            return () => {

                boxGlobal = null
                // Deactivation function for clearing intervals or such.
            }
        });
  

};

export default plugin


