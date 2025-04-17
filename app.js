// Fake AI check simulation
function analyzeMedia() {
  const fileInput = document.getElementById("mediaUpload");
  const resultBox = document.getElementById("resultBox");

  if (!fileInput.files[0]) {
    alert("Please upload an image or video file.");
    return;
  }

  const file = fileInput.files[0];
  const fileName = file.name;
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "video/mp4", "video/webm"];

  if (!allowedTypes.includes(file.type)) {
    alert("Unsupported file type. Please upload an image or video.");
    return;
  }

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <p class="text-indigo-600 animate-pulse">
      Analyzing <strong>${fileName}</strong>...
    </p>
  `;

  setTimeout(() => {
    const isFake = Math.random() > 0.5;
    const result = isFake ? "FAKE IDENTITY DETECTED" : "REAL IDENTITY - VERIFIED";
    const resultColor = isFake ? "text-red-600" : "text-green-600";
    const confidence = (Math.random() * 20 + 80).toFixed(2); // Random score between 80-100%

    resultBox.innerHTML = `
      <p><strong>File:</strong> ${fileName}</p>
      <p class="mt-2 font-semibold ${resultColor}">${result}</p>
      <p class="mt-1 text-sm text-gray-500">Confidence Score: ${confidence}%</p>
    `;

    // Optionally reset file input
    fileInput.value = "";
  }, 2000);
}
