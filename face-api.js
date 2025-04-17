async function analyzeMedia() {
  const fileInput = document.getElementById("image-upload");
  const resultBox = document.getElementById("resultBox");
  const canvas = document.getElementById("canvas");

  if (!fileInput.files[0]) {
    alert("Please upload an image.");
    return;
  }

  // Show loading
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `<p class="text-indigo-600 animate-pulse">Loading AI models and analyzing...</p>`;

  // Load models (only once)
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.ssdMobilenetv1.loadFromUri("/models"), // for better accuracy
  ]);

  const image = await faceapi.bufferToImage(fileInput.files[0]);
  canvas.style.display = "block";
  canvas.width = image.width;
  canvas.height = image.height;

  const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions());

  if (detections.length > 0) {
    resultBox.innerHTML = `<p><strong>File:</strong> ${fileInput.files[0].name}</p>
    <p class="mt-2 font-semibold text-green-600">REAL FACE DETECTED ✅ (${detections.length} face(s))</p>`;
  } else {
    resultBox.innerHTML = `<p><strong>File:</strong> ${fileInput.files[0].name}</p>
    <p class="mt-2 font-semibold text-red-600">NO FACE DETECTED ❌ (Possible fake)</p>`;
  }

  // Optional: Draw detections on canvas
  faceapi.matchDimensions(canvas, { width: image.width, height: image.height });
  const resized = faceapi.resizeResults(detections, { width: image.width, height: image.height });
  faceapi.draw.drawDetections(canvas, resized);
}
