const imageUpload = document.getElementById('imageUpload');
const previewContainer = document.getElementById('previewContainer');

imageUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  }
});

function detectFace() {
  alert("Fake face detection model will be integrated here.");
}
