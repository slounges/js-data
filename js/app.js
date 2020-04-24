new Chart (document.getElementById('barChart'), {
		type: 'bar',
		data:  {
			labels: ['Gold', 'Silver', 'Bronze'],
			datasets: [
				{
				    label:'Gold Medals (hundreds)',
					data: ['315', '203', '107'],
					backgroundColor: ['#FFEBA7', '#7DBEF5', '#FF5D32'],
				}

			]
		},
		options: {
			legend: {
				display: false
			}
		}

});
new Chart (document.getElementById('pieChart'), {
		type: 'pie',
		data:  {
			labels: ['Men', 'Women'],
			datasets: [
				{
				    label:'Gold Medals (hundreds)',
					data: ['386', '230'],
					backgroundColor: ['#A9E86D', '#DB8DFF'],
				}

			]
		},
		options: {
			legend: {
				display: false
			}
		}

});
new Chart(document.getElementById('lineChart'),{
	type: 'line',
	data: {
		labels: ['Biathlon', 'Bobsleigh', 'Curling', 'Ice Hockey','Skating', 'Skiing'],
		datasets: [
			{
				label: 'Canada',
				data: ['3', '22', '50', '351', '179', '40'],
				fill: false,
				borderColor: 'gold',
			}


		]
	}

});

new Chart(document.getElementById('lineChart2'),{
	type: 'line',
	data: {
		labels: ['1924', '1928', '1932', '1948','1952', '1960', '1964', '1968', '1976', '1984', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
			{
				label: 'Canada',
				data: ['9', '12', '14', '18', '16', '3', '4', '1', '1', '2', '5', '3', '14', '53', '29', '68', '63'],
				fill: false,
				borderColor: 'red',
			}


		]
	}, 
	options: {
		title:{
			display: true,
			text: 'Gold Medal Wins from 1924-2014'
		}
		
	}

});