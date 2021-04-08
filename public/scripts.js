// router.route ('/api/dining')
//     .get(async (req,res) => {
//         const request = await fetch('/api/dining');
//         dininghall = await request.json();
//         console.log(dininghall)
//     });

//     router.route('/wholeMeal')
//     .get(async(req,res) => {
//         const meals = await db.Meals.findAll();
//         const macros = await db.Macros.findAll();
//         const wholeMeals = meals.map((meal) => {
//             const macroEntry = macros.find((macro) => macro.meal_id === meal.meal_id);
//             console.log('meal', meal.dataValues)
//             console.log('macroEntry', macroEntry.dataValues);
//         return {
//         ...meal.dataValues,
//         ...macroEntry.dataValues
//         };
//     });

async function getMeals(){
    console.log('data request');
    const diningRequest = await fetch('/api/wholeMeal');
    const diningData = await diningRequest.json();
    return diningData;
}
async function windowActions(){
    console.log('window loaded');
    const means = await getMeals();
    console.table(meals.data);

    const mealArray = [1,2,3,4,5,6,7,8,9,10];
    const selected = mealArray.map(element) => {
        const random = getRandomIntInclusive(0, meals.length - 1);
        return meals[random];
    });
}

console.table(meals);

window.onload = windowActions()