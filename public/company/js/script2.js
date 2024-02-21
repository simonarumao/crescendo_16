const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

  // Function to download PDF
  function downloadPDF() {
	// Options for PDF generation
	const options = {
		margin: 10,
		filename: 'example.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
	};

	// Get the content element
	const content = document.getElementById('content');

	// Generate PDF from content
	html2pdf().from(content).set(options).save();
}

// Attach event listener to the "Download PDF" button
document.querySelector('.btn-download').addEventListener('click', downloadPDF);



		
	// Static sample data
	const data = [
		{ "Ingredients deal month": "January", "faults": "Yes", "fault found": 5, "reported before lab testing": 3, "report in lab testing": 2, "resolved": 1, "sold now": 10 },
		{ "Ingredients deal month": "February", "faults": "No", "fault found": 3, "reported before lab testing": 2, "report in lab testing": 1, "resolved": 3, "sold now": 15 },
		{ "Ingredients deal month": "March", "faults": "Yes", "fault found": 7, "reported before lab testing": 4, "report in lab testing": 3, "resolved": 2, "sold now": 20 },
		// Add more sample data as needed
	  ];
	
	  // Process data for the pie chart
	  const labelsPie = ['Yes', 'No'];
	  const dataPie = [
		data.filter(entry => entry['faults'] === 'Yes').length,
		data.filter(entry => entry['faults'] === 'No').length
	  ];
	
	  // Process data for the line chart
	  const labelsLine = data.map(entry => entry['Ingredients deal month']);
	  const dataFaultFound = data.map(entry => entry['fault found']);
	  const dataReportBeforeLab = data.map(entry => entry['reported before lab testing']);
	  const dataReportInLab = data.map(entry => entry['report in lab testing']);
	  const dataResolved = data.map(entry => entry['resolved']);
	
	  // Render pie chart
	  const pieChartCtx = document.getElementById('faults-chart').getContext('2d');
	  const pieChart = new Chart(pieChartCtx, {
		type: 'pie',
		data: {
		  labels: labelsPie,
		  datasets: [{
			label: 'Faults',
			data: dataPie,
			backgroundColor: ['#FF6384', '#36A2EB'],
			borderWidth: 1
		  }]
		},
		options: {
		  responsive: true,
		  maintainAspectRatio: false
		}
	  });
	
	  // Render line chart
	  const lineChartCtx = document.getElementById('line-chart').getContext('2d');
	  const lineChart = new Chart(lineChartCtx, {
		type: 'line',
		data: {
		  labels: labelsLine,
		  datasets: [{
			label: 'Fault Found',
			data: dataFaultFound,
			borderColor: '#FF6384',
			fill: false,
			borderWidth: 2
		  }, {
			label: 'Reported Before Lab Testing',
			data: dataReportBeforeLab,
			borderColor: '#36A2EB',
			fill: false,
			borderWidth: 2
		  }, {
			label: 'Report in Lab Testing',
			data: dataReportInLab,
			borderColor: '#FFCE56',
			fill: false,
			borderWidth: 2
		  }, {
			label: 'Resolved',
			data: dataResolved,
			borderColor: '#4CAF50',
			fill: false,
			borderWidth: 2
		  }]
		},
		options: {
		  responsive: true,
		  maintainAspectRatio: false,
		  scales: {
			y: {
			  beginAtZero: true
			}
		  }
		}
	  });
	
	  // Function to generate PDF
	  function generatePDF() {
		window.print();
	  }
	
	  // Event listener for the PDF button
	  document.getElementById('pdf-btn').addEventListener('click', generatePDF);



	
	  function updateNumbers() {
		const crispsSoldElement = document.getElementById('crispsSold');
		const faultFoundElement = document.getElementById('faultFound');
		const crispsManufacturedElement = document.getElementById('cripsManufactured');

		let crispsSoldValue = parseInt(crispsSoldElement.querySelector('h3').textContent);
		let faultFoundValue = parseInt(faultFoundElement.querySelector('h3').textContent);
		let crispsManufacturedValue = parseInt(crispsManufacturedElement.querySelector('h3').textContent);

		// Increment the values
		crispsSoldValue += 5;
		faultFoundValue += 5;
		crispsManufacturedValue += 5;

		// Update the text content
		crispsSoldElement.querySelector('h3').textContent = crispsSoldValue;
		faultFoundElement.querySelector('h3').textContent = faultFoundValue;
		crispsManufacturedElement.querySelector('h3').textContent = crispsManufacturedValue;
	}

	// Call the function every 5 seconds (5000 milliseconds)
	setInterval(updateNumbers, 5000);