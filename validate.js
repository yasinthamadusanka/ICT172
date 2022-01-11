<script>
function validateForm() {
    var a = document.forms["form"]["stdName"].value;
    var b = document.forms["form"]["stdRegNum"].value;
    if (a == "") {
      alert("Name must be filled out");
      return false;
    }
    if (b == "") {
        alert("Register Number must be filled out");
        return false;
      }
  }
</script>
