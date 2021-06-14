// Write your JavaScript code here!

window.addEventListener('load', function(){
   let form = document.querySelector("form");
   form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
      } 
      else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)) {
         alert("The pilot and copilot names must be strings!");
      }
      else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)) {
         alert("The cargo and fuel fields must be a number!");
      }
      else if (fuelInput.value < 10000 && cargoInput.value > 10000){
         document.getElementById("faultyItems").faultyItems.style.visibility = "visible";
         document.getElementById("fuelStatus").fuelStatus.innerHTML = "There is not enough fuel for the journey";
         document.getElementById("cargoMass").cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput} is ready for launch.`;
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput} is ready for launch.`;
         document.getElementById("launchStatus").stlye.color = red;
      
      }
      else if (fuelInput.value >= 10000 && cargoInput.value > 10000){
         document.getElementById("faultyItems").faultyItems.style.visibility = "visible";
         document.getElementById("cargoMass").cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput} is ready for launch.`;
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput} is ready for launch.`;
         document.getElementById("launchStatus").stlye.color = red;
      
      }
      else if (fuelInput.value < 10000 && cargoInput.value <= 10000) {        
          document.getElementById("faultyItems").faultyItems.style.visibility = "visible";
          document.getElementById("fuelStatus").fuelStatus.innerHTML = "There is not enough fuel for the journey";
          document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput} is ready for launch.`;
          document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput} is ready for launch.`;
          document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
          document.getElementById("launchStatus").stlye.color = red;
      } 
      else { //(fuelInput.value >= 10000 && cargoInput.value <= 10000) {
         document.getElementById("faultyItems").faultyItems.style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").stlye.color = green;

      }

      
   //event.preventDefault();   
   
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){

         let missionTarget = document.getElementById("missionTarget");
         let randomPlanet = Math.floor(Math.random() *json.length);

         document.getElementById("missionTarget").innerHTML = `
         <div>
            <h2>Mission Destanation</h2>
                <ol>
                   <li>Name: ${json[randomPlanet].name}</li>
                   <li>Diameter: ${json[randomPlanet].diameter}</li>
                   <li>Star: ${json[randomPlanet].Star}</li>
                   <li>Distance from Earth: ${json[randomPlanet].distance}</li>
                   <li>Number of Moons: ${json[randomPlanet].moons}</li>
                </ol>   
               <img src="${json[randomPlanet].image}">
         </div>                                           
         `;
      })
   })
      
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
