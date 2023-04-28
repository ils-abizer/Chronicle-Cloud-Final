// Teacher 

{
new Chart('teacher-plot', {
    type: 'bar',
    data: {
      labels: ["Teacher_Name_01",'Teacher_Name_02','Teacher_Name_03','Teacher_Name_04'],
      datasets: [{
        // label: 'Active',
        data: [250,270,160,150],
        borderWidth: 1,
        backgroundColor:['#F9AC32'],
        barThickness :25,
        hoverBackgroundColor: "#5BCDA2"
      },
      {
        // label: 'Inactive',
        data: [20,60,40,40],
        borderWidth: 1,
        backgroundColor:['#EEEEEE'],
        barThickness :25
      }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:true,
        plugins :{
            legend :{

                display:false,
            }

        },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
          grid :{
            drawBorder : false,
          },
          border:{
            display : false ,
          }
        },
        x: {
            stacked:true,
            grid: {
              display :false
            }
        },
        // layout:{
        //     padding:24
        // }
    },
    responsive:true,
    aspectRatio:2,

      }
    });

}

// Roster 
new Chart('roster-plot', {
    type: 'bar',
    data: {
      labels: ["School_Name_01",'School_Name_02','School_Name_03','School_Name_04'],
      datasets: [{
        // label: 'Active',
        data: [180,240,360,280],
        borderWidth: 1,
        backgroundColor:['#F9AC32'],
        barThickness :25,
        hoverBackgroundColor: "#5BCDA2"
      },
      {
        // label: 'Inactive',
        data: [20,60,40,40],
        borderWidth: 1,
        backgroundColor:['#EEEEEE'],
        barThickness :25
      }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:true,
        plugins :{
            legend :{

                display:false,
            }

        },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
          grid :{
            drawBorder : false,
          },
          border:{
            display : false ,
          }
        },
       
        x: {
            stacked:true,
            grid: {
              display :false
            },
            
        },
        // layout:{
        //     padding:24
        // }
    },
    responsive:true,
    aspectRatio:2,

      }
    });


 




function createRosterPlot() {
    document.getElementById("teacher-plot").style.display = "none";
    let ctx = document.getElementById("roster-plot");
    ctx.style.display = "block";
  }
  
  
  function createTeacherPlot() {
    document.getElementById("roster-plot").style.display = "none";
    let ctx = document.getElementById("teacher-plot");
    ctx.style.display = "block";
  }
  
  
  function showRosterPlot() {
    let [rosterButton, teacherButton] = document.getElementsByClassName("bar-tab");
    rosterButton.classList.add("active");
    rosterButton.classList.remove("deactive");
    teacherButton.classList.add("deactive");
    teacherButton.classList.remove("active");
    createRosterPlot();
  }
  
  function showTeacherPlot() {
    let [rosterButton, teacherButton] = document.getElementsByClassName("bar-tab");
    rosterButton.classList.add("deactive");
    rosterButton.classList.remove("active");
    teacherButton.classList.add("active");
    teacherButton.classList.remove("deactive");
    createTeacherPlot();
  }
  
  
showRosterPlot();