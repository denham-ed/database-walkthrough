//Add Materialize Functionality
$(document).ready(function(){
    //Nav Side Bar
    $('.sidenav').sidenav();
  });

  document.addEventListener('DOMContentLoaded', function() {
    let datepicker = document.querySelectorAll('.datepicker');
     M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });
  });

  $(document).ready(function(){
    $('select').formSelect();
  });
