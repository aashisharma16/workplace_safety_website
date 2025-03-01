const trainingData = {
  "general-safety": {
    title: "General Workplace Safety",
    content: "This training covers basic safety principles, hazard identification, and safe work practices.",
    image: "images/general-safety.jpg"
  },
  "fire-safety": {
    title: "Fire Safety and Emergency Response",
    content: "Learn fire prevention strategies, evacuation protocols, and proper use of fire extinguishers.",
    image: "images/fire-safety.jpg"
  },
  "ergonomics": {
    title: "Ergonomics in the Workplace",
    content: "Discover methods to reduce physical strain through correct posture and equipment setup.",
    image: "images/ergonomics.jpg"
  },
  "first-aid": {
    title: "First Aid and CPR Certification",
    content: "Get certified in life-saving skills, including first aid and CPR, meeting OSHA standards.",
    image: "images/first-aid.jpg"
  },
  "industry-specific": {
    title: "Industry-Specific Safety Programs",
    content: "Custom training for specific industries, such as PPE usage, chemical handling, and machine operation.",
    image: "images/industry-specific.jpg"
  }
};

function showDetails(type) {
  const details = trainingData[type];
  if (details) {
    document.getElementById("details-title").textContent = details.title;
    document.getElementById("details-content").textContent = details.content;
    document.getElementById("details-image").src = details.image;
    document.getElementById("training-details").style.display = "block";
  }
}

function hideDetails() {
  document.getElementById("training-details").style.display = "none";
}
