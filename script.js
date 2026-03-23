function showSection(sectionId) {
const sections = ['home', 'risk', 'guide', 'checklist', 'emergency'];

sections.forEach(sec => {
document.getElementById(sec).classList.add('hidden');
});

document.getElementById(sectionId).classList.remove('hidden');
}

function showTips() {
const area = document.getElementById("area").value;
let tips = "";

if (area === "hotel") {
tips = "Check TV, smoke detectors, lamps, and charging ports.";
} else if (area === "bathroom") {
tips = "Check shower heads, mirrors, and ventilation openings.";
} else {
tips = "Check hooks, shelves, and corners of the room.";
}

document.getElementById("tips").innerText = tips;
}
