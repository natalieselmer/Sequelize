async function windowActions() {
const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
meals = await request.json();
}
window.onload = windowActions;