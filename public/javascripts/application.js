// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
  $('div.foto').each( function() {
    var img = $(this).find('img:first');
    $(this).height( img.height() ).width( img.width() );
  });
  $('form.edit_post div.marker_form div.marker').each(function() {
    /* TODO Prozent */
    var pos_x_field = $(this).siblings('input.pos_x');
    var pos_y_field = $(this).siblings('input.pos_y');
    var image = $('form.edit_post div.foto');
    $(this)
      .css('left', pos_x_field.val() + '%')
      .css('top', pos_y_field.val() + '%')
      .appendTo( image )
      .draggable({
        containment: image,
        stop: function(event, ui) {
          console.debug('drag finished at', ui.position);
          pos_x_field.val( 100 * ui.position.left / image.width() );
          pos_y_field.val( 100 * ui.position.top / image.height() );
        }
      });

  });
});
