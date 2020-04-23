new Chart(document.getElementById('barChart'), {
	type: 'bar',
	data: {
		labels: ['Gold', 'Silver', 'Bronze']
		datasets: [ 
			{

				labels:'Canadian Gold Medals (Won)',
				data: ['315', '203', '107'],
			}
		]
	}
});