async function windowActions() {
const request = await fetch('/api/dining');
dininghall = await request.json();
console.log(dininghall)
}
window.onload = windowActions;
