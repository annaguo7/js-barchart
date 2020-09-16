// TODO: load the dataset 

 
let attractions;
var elem;



fetch('attractions.json')
	.then(response => response.json())
	.then(data => {

		//Loading Data in
		attractions = data;
		attractions.sort(function(a,b){
			return b['Visitors'] - a['Visitors'];
		});

		//Fitering Data
		function filterData(categories) {
			if (categories == 'all') {
				return attractions;
			}
			attraction = attractions.filter(function(a) {
				return a["Category"] == categories;
			});
			console.log(categories);
			console.log(attraction);
			return attraction;			
		}

		function eventHandler(event) {
			var sel_category = event.target.value;
			
			filter_Data = filterData(sel_category);

			top_five = filter_Data.slice(0,5);
			renderBarChart(top_five);

			console.log(top_five);
			console.log(sel_category);
		}


		//Getting category based on user click
		const elem = document.querySelector("#attraction-category");
		elem.addEventListener('change',eventHandler);


	})
