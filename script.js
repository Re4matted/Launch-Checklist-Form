// Write your JavaScript code here!

window.addEventListener('load', function(){
   let form = document.querySelector("form");
   form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let fuelTest = Number(fuelInput.value);
      let cargoInput = document.querySelector("input[name=cargoMass]");
      let cargoTest = Number(cargoInput.value);
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");


      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") { //can't be empty
         alert("All fields are required!");
         } 
       else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)) { //must be strings
          alert("The pilot and copilot names must be strings!");
       }
       else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)) { //must be a number
          alert("The cargo and fuel fields must be a number!");
       }
       else {
         //faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilotInput.value} is ready for launch.`;
         //launchStatus.innerHTML = "Shuttle is ready for launch";
         //launchStatus.style.color = "green";

            if (fuelTest < 10000 && cargoTest > 10000) { //fuel & mass fail
             faultyItems.style.visibility = "visible";
             fuelStatus.innerHTML = "There is not enough fuel for the journey";
             cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
             //pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
             //copilotStatus.innerHTML = `Copilot ${copilotInput.value} is ready for launch.`;
             launchStatus.innerHTML = "Shuttle not ready for launch";
             launchStatus.style.color = "red";
      
            }
            else if (fuelTest >= 10000 && cargoTest > 10000) { //mass fail
               faultyItems.style.visibility = "visible";
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
               //pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
               //copilotStatus.innerHTML = `Copilot ${copilotInput.value} is ready for launch.`;
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
      
            }
            else if (fuelTest < 10000 && cargoTest < 10000) { //fuel fail      
               faultyItems.style.visibility = "visible";
               fuelStatus.innerHTML = "There is not enough fuel for the journey";
               //pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
               //copilotStatus.innerHTML = `Copilot ${copilotInput} is ready for launch.`;
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
            } 
            else {  //(fuelTest >= 10000 && cargoTest <= 10000) {
              faultyItems.style.visibility = "visible";
              //pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
              //copilotStatus.innerHTML = `Copilot ${copilotInput.value} is ready for launch.`;
              launchStatus.innerHTML = "Shuttle is ready for launch";
              launchStatus.style.color = "green";

            }
         }
      
   event.preventDefault();   
   
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
