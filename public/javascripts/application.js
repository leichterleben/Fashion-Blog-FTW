// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
  $('div.foto').each( function() {
    var img = $(this).find('img:first');
    $(this).height( img.height() ).width( img.width() );
  });
  $('form.edit_post div.marker_form div.marker').livequery(function() {
    var pos_x_field = $(this).parent().find('input.pos_x');
    var pos_y_field = $(this).parent().find('input.pos_y');
    var image = $('form.edit_post div.foto');
    var marker = $(this)
      .clone()
      .css('left', (pos_x_field.val() || 99 * Math.random() )+ '%')
      .css('top',  (pos_y_field.val() || 99 * Math.random() )+ '%')
      .appendTo( image )
      .show()
      .draggable({
        containment: image,
        stop: function(event, ui) {
          pos_x_field.val( 100 * ui.position.left / image.width() );
          pos_y_field.val( 100 * ui.position.top / image.height() );
        }
      });
    $(this).parent().find(':input')
      .focus( function() { marker.addClass('hover') })
      .blur( function()  { marker.removeClass('hover') });
    $(this).hide();
  });

  $('<p><a href="#">Neu</a></p>').click(function() {
    var form = $('form.edit_post div.markers div.marker_form:last');
    var i = parseInt(form.find('div.marker').text()) + 1;
    form
      .clone()
      .find('div.marker, label[for=post_name]')
        .text( i )
      .end()
      .insertBefore(this);
    return false;
  }).appendTo('form.edit_post div.markers')
});
