function createPieChart(id, xValuesSchool, yValuesSchool, pieColors) {
    new Chart(id, {
      type: "pie",
      data: {
        labels: xValuesSchool,
        datasets: [{
          backgroundColor: pieColors,
          data: yValuesSchool
        }]
      },
      options: {
        // rotation:380,
        plugins: {
          rotation : 220,

          labels: {
            render: (ctx) => {
              return ctx.value + " mb ";
            },
            position: "outside",
            fontColor: pieColors
          },

          datalabels: {
            formatter: (value,ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = (value * 100 / sum).toFixed(0) + "%";
              return percentage;
            },
            //color: '#fff',
  
          },
         
          legend: {
            display: true,
            position: 'left',
            align: 'end',
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              fontColor: '#333',
              boxWidth: 8,
              boxHeight: 8,
              borderRadius: "50"
            }
          },
  
        },
        responsive: true,
        aspectRatio: 2,
        rotation: 210,
        borderAlign: "inner",
      },
    });
  }
  
  
  const xValuesSchool = ["Multimedia", "Audio Notes", "Notes", "Free Space"];
  const pieColors = [
    "#386CB5",
    "#7DB0F7",
    "#286BCB",
    "#CCCCCC"
  ];
  
  
  const yValuesSchool1 = [49, 23, 17, 11];
  const yValuesSchool2 = [49, 15, 30, 21];
  const yValuesSchool3 = [40, 20, 19, 14];
  const yValuesSchool4 = [35, 27, 21, 98];
  
  
  
createPieChart("school-1", xValuesSchool, yValuesSchool1, pieColors);
createPieChart("school-2", xValuesSchool, yValuesSchool2, pieColors);
createPieChart("school-3", xValuesSchool, yValuesSchool3, pieColors);
createPieChart("school-4", xValuesSchool, yValuesSchool4, pieColors);

  
  
  function showPieFromIndex(index) {
  
    document.querySelector(".pie-chart-container .options .drop-down span").innerHTML = `School_name_0${index}`;
    let pie_container = document.getElementsByClassName("pie-chart-container")[0];
    let canvasElements = pie_container.getElementsByTagName("canvas");
    for (let i = 0; i < canvasElements.length; i++) {
      canvasElements[i].style.display = "none";
    }
    canvasElements[index - 1].style.display = "block";
  }
  
  showPieFromIndex(1);