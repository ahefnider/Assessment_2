  $(document).ready(function () {
    getAnimals();

    $('#addAnimal').on('submit', postAnimal);



 // This will add a new animal to the DOM.

    function postAnimal(event) {

           var values = {};

           $.each($('#addAnimal').serializeArray(), function(i, field) {
             values[field.name] = field.value;
           });

         $.ajax({
           type: 'POST',
           url: '/addanimal',
           data: values,
           success: function (data) {
             getAnimals();
           },
         });
       };


//  **show animals function**

    function getAnimals() {
  event.preventDefault();
  $('.container').empty();
    $.ajax({
      type: 'GET',
      url: '/animals',
      success: function (zooanimals) {
        console.log(zooanimals);

        for (i = 0; i < zooanimals.length; i++) {
           appendDom(zooanimals[i]);
        }
      },
    });
  };

  function appendDom(values) {
    $('.container').append('<div class="animal"></div>');
    var $el = $('.container').children().last();

    $el.append('<p>Animal Type: ' + values.species + '</p>');
    $el.append('<p>Quantity: ' + values.quantity + '</p>');
}
});
