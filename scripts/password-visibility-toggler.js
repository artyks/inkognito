function passwordVisibilityToggle() {
    var x = document.getElementsByClassName("text-input__field--password")[0];
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }