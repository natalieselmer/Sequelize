async function windowActions() {
const request = await fetch('/api/dining');
dininghall = await request.json();
console.log(dining)
}
window.onload = windowActions;
