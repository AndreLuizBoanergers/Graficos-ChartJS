		let  ctxHora = document.getElementsByClassName("graficoHora");
		let config = {
			type: 'line',
			data:{
				labels: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
				datasets:[
					{
						label: 'BTC - Segunda',
						data:[1,10,14,20,8,2,10,3,10,20,18,21,4,22,10,12,15,16,10,22,26,10,17,25],
						borderWidth: 5,
						borderColor: 'rgba(77,166,253,0.85)',
						backgroundColor: ' transparent',
					},
					{
						label: 'BTC - Terça',
						data:[5,12,15,20,8,2,16,3,15,26,15,21,4,20,15,12,16,16,10,27,23,13,12,23],
						borderWidth: 5,
						borderColor: '#4CAF50',
						backgroundColor: ' transparent',
				    },
				    {
						label: 'BTC - Quarta',
						data:[10,12,15,20,8,2,16,3,15,26,15,21,4,20,15,12,16,16,10,27,30,13,12,23],
						borderWidth: 5,
						borderColor: '#FBC02D',
						backgroundColor: ' transparent',
				    },
				    {
						label: 'BTC - Quinta',
						data:[20,10,15,23,5,4,12,8,17,29,12,24,6,23,14,13,14,18,11,25,18,20,19,20],
						borderWidth: 5,
						borderColor: '#FF5722',
						backgroundColor: ' transparent',
				    },
				    {
						label: 'BTC - Sexta',
						data:[11,12,15,20,8,2,16,3,15,26,15,21,4,27,15,12,16,16,10,27,28,13,12,28],
						borderWidth: 5,
						borderColor: '#283593',
						backgroundColor: ' transparent',
				    },
				    {
						label: 'BTC - Sabado',
						data:[18,12,15,21,8,2,16,12,15,23,15,21,4,10,12,15,16,13,10,20,21,10,14,24],
						borderWidth: 5,
						borderColor: '#9C27B0',
						backgroundColor: ' transparent',
				    },
				    {
						label: 'BTC - Domingo',
						data:[24,12,15,20,8,2.3,16,3,15,26,15,21,4,20,15,12,16,16,10,27,25,15,10,15],
						borderWidth: 5,
						borderColor: '#F57F17',
						backgroundColor: ' transparent',
				    },
			    ]
			}
		};
		let chartGrafico = new Chart(ctxHora,config);