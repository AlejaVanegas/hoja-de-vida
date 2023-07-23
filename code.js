function toggleSection() {
	var section = document.getElementById("cv-english");
	var section2 = document.getElementById("cv-spanish");

	if (section.style.display === "none") {
	  section.style.display = "block";
	  section2.style.display = "none";
	} else {
	  section.style.display = "none";
	  section2.style.display = "block";
	}
  }