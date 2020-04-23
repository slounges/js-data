new Chart (document.getElementById('barChart'), {
		type: 'bar',
		data:  {
			labels: ['Gold', 'Silver', 'Bronze']
			datasets: [
				{
				    labels:'Canadian Gold Medals (Won)',
					data: ['315', '203', '107'],
					backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
				}

			]
		}




});
