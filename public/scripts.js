async function windowActions() {
const request = await fetch('/api/DiningHall');
dininghall = await request.json();
console.log('window loaded');
console.log(dininghall)
}
window.onload = windowActions;
