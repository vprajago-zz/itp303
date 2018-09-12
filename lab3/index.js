$( document ).ready(function() {
  var selectedElement = null;
  $('.thumbnail').click(function() {
    var img = $(this).find('img:first');
    var src = img.prop('src');
    var text = img.prop('alt');

    if (selectedElement) {
      selectedElement.css('border-color', 'black');
      selectedElement.css('opacity', '0.6')
      selectedElement = $(this);
    }
    selectedElement = $(this);
    selectedElement.css('border-color', 'red');
    selectedElement.css('opacity', '1.0')

    $('#main-img').attr('src', src);
    $('#main-img').next().text(text);


  });
});
