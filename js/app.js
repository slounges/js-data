new Chart (document.getElementById('barChart'), {
		type: 'bar',
		data:  {
			labels: ['Gold', 'Silver', 'Bronze'],
			datasets: [
				{
				    label:'Gold Medals (hundreds)',
					data: ['315', '203', '107'],
					backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
				}

			]
		},
		options: {
			legend: {
				display: false
			}
		}

});
new Chart (document.getElementById('barCharttwo'), {
		type: 'bar',
		data:  {
			labels: ['Men', 'Women'],
			datasets: [
				{
				    label:'Gold Medals (hundreds)',
					data: ['386', '230'],
					backgroundColor: ['#FF8B4B', '#45EFF5'],
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
				label: 'Canadian Medals',
				data: ['3', '22', '50', '351', '179', '40'],
				fill: false,
				borderColor: '#3e95cd',
			}


		]
	}

});