function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min + 1) + min);
}

async function getMeals() {
  console.log('data request');
  const diningRequest = await fetch('/api/wholeMeal');
  const diningData = await diningRequest.json();
  return diningData;
}
const cal =
const barChart = new CanvasJS.Chart('chart', {
  animationEnabled: true,
  title: {
    text: 'Macros and Meals!',
  },
  data:[{
    type: 'stackedBar',
    name: 'Carbs',
    showInLegend: 'true',
    dataPoints: [//data in here of CARBS: x: , y: 
    ]
  },
  {
    type: 'stackedBar',
    name: 'Protein',
    showInLegend: 'true',
    dataPoints: [//data in here of PROTEIN: x: , y: 
    ]
  },
  {
    type: 'stackedBar',
    name: 'Fat',
    showInLegend: 'true',
    dataPoints: [//data in here of FAT: x: , y: 
    ]  
  }]
});

chart.render();

function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

async function windowActions() {
  console.log('window loaded');
  const results = await getMeals();
  const meals = results.data;
  console.table(meals);
  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });
  console.table(selectedMeals)
};

window.onload = windowActions();
