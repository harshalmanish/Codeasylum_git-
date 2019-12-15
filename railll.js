const form = document.querySelector("#trnSearch");
form.addEventListener("submit", e=>{
	e.preventDefault();
	const train_num = document.querySelector("#trnNumInput");
	let url = `https://api.railwayapi.com/v2/route/train/${train_num.value}/apikey/hiug3cbsmt/`
	getTrainRoute(url);

});

const getTrainRoute = async (url)=> {
	const response = await fetch(url);
	const responseJson = await response.json();
	console.log(responseJson);
	document.querySelector('#trnName').innerHTML = responseJson.train.name;
	let textDiv = "";
	responseJson.route.forEach(stn => {
		textDiv+=`
		<div class="card" style="background-color:grey;padding:5px;margin:15px 0; text-align:center; border-radius:25px">
		<h1>${stn.station.name}</h1>
			<div>
				<h4>Scheduled arrival: ${stn.scharr}</h4>
				<h4>Scheduled departure: ${stn.schdep}</h4>
			</div>
    	</div>`
    });
	document.querySelector('.stations').innerHTML = textDiv;
}
