document.addEventListener('DOMContentLoaded', function() {
  var imageInput = document.getElementById('image-input');
  var fileLabel = document.querySelector('.upload-label');
  var compressButton = document.getElementById('compress-button');
  var selectedImageContainer = document.getElementById('selected-image-container');
  var compressedImageContainer = document.getElementById('compressed-image-container');
  var downloadButton = document.getElementById('download-button');

// Function to handle image compression
  fileLabel.addEventListener('click', function() {
    imageInput.click();
  });

  imageInput.addEventListener('change', function() {
    var file = imageInput.files[0];

    if (file) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var selectedImage = document.createElement('img');
        selectedImage.src = event.target.result;
        selectedImage.classList.add('selected-image-preview');
        selectedImageContainer.innerHTML = '';
        selectedImageContainer.appendChild(selectedImage);
      };
      reader.readAsDataURL(file);
    } else {
      selectedImageContainer.innerHTML = '';
    }
  });

  compressButton.addEventListener('click', function() {
    var file = imageInput.files[0];

    if (file) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var selectedImage = document.createElement('img');
        selectedImage.src = event.target.result;
        selectedImage.classList.add('selected-image-preview');
        selectedImageContainer.innerHTML = '';
        selectedImageContainer.appendChild(selectedImage);
      };
      reader.readAsDataURL(file);

      compressButton.disabled = true;
      compressButton.textContent = 'Compressing...';

      setTimeout(function() {
        new Compressor(file, {
          quality: 0.6,
          success: function(result) {
            var reader = new FileReader();
            reader.onload = function(event) {
              var compressedImage = document.createElement('img');
              compressedImage.src = event.target.result;
              compressedImageContainer.innerHTML = '';
              compressedImageContainer.appendChild(compressedImage);
              downloadButton.href = event.target.result;
              downloadButton.setAttribute('download', 'compressed_image.jpg');

              compressButton.disabled = false;
              compressButton.textContent = 'Compress Image';
              document.getElementById('result-container').style.display = 'block';
              document.getElementById('quiz-container').style.display = 'block';
              showNextQuestion();
            };
            reader.readAsDataURL(result);
          },
          error: function(e) {
            compressedImageContainer.innerHTML = 'An error occurred while compressing the image.';
            console.error(e);

            compressButton.disabled = false;
            compressButton.textContent = 'Compress Image';
          }
        });
      }, 1000);
    } else {
      selectedImageContainer.innerHTML = 'Please select an image.';
      compressedImageContainer.innerHTML = '';
    }
  });
});




