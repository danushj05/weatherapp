const fetchWData = async () => {
	if (cityName.value) {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=723c5c4db9e7f3ea14a7d9d727c8d20d&units=metric`)
		// console.log(response);
		response.json().then(data => {
			console.log(data);
			let city = data.name
			let country = data.sys.country
			let currTemp = data.main.temp
			let flTemp = data.main.feels_like
			let time = new Date();
			let wDesc = data.weather[0].main
			
			let humidity = data.main.humidity
			let pressure = data.main.pressure
			let windSpd = data.wind.speed
			let windDir = data.wind.deg

			


			weatherData.innerHTML = `
			<!-- Row 1 -->
			<div class="col-6 fs-5">
			<i class="fa-solid fa-location-dot" fa-xl style="color: #fffff;"></i>
             <span> ${city}</span>,<span>${country}</span>
			 
			</div>
			<!-- Row 2 -->
			<div class="col-12 d-flex" style="font-size: 3rem">${currTemp} °C</div>
			<!-- Row 3 -->
			<div>
			  <div class="col-12 m-1">Time : <span>${time.toTimeString()}</span></div>
			</div>
			<!-- Row 4 -->
			<div class="col-12 fs-6">
			      Temp : <span>${flTemp} °C</span>.
			  <span>${wDesc}</span>
			</div>
			
			<!-- Row 6 -->
			<div class="col-6 fs-6"> <i class="fa-solid fa-water fa-xl style="color: #fffff;"></i>  Humidity : <span>${humidity}</span></div>
			
			<!-- Row 7 -->
			<div class="col-6 fs-6">  <i class="fa-solid fa-wind  fa-xl style="color: #fffff;"></i>  Wind Speed : <span>${windSpd} m/s</span></div>
			`
		}
		)
	}
	else {
		alert("Please enter valid input")
	}

	switch(json.weatherData[0].main){
		case "Clouds":
			img.src="c:\Users\HP\AppData\Local\Temp\Untitled.png";
			break;

	}
}