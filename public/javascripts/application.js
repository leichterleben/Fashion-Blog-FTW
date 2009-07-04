// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {

  $.fn.setNestedAttributeCounter = function(counter) {
    return $(this).each(function() {
      $(this).html(
        $(this).html()
          .replace(/attributes_\d+/gi, "attributes_" + counter)
          .replace(/attributes\]\[\d+/gi, "attributes][" + counter)
      );
    });
  };

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
      .setNestedAttributeCounter(i)
      .insertBefore(this);
    return false;
  }).appendTo('form.edit_post div.markers')

  $('div.foto div.marker').hover(
    function() { 
      $(this).addClass('hover');
      $('div#' + $(this).attr('id') + '_info').addClass('hover');
    },
    function() { 
      $(this).removeClass('hover');
      $('div#' + $(this).attr('id') + '_info').removeClass('hover');
    }
  );
  
  $('div.marker_info').hover(
    function() { 
      $(this).addClass('hover');
      if ( m = $(this).attr('id').match(/^(marker_\d+)/)   ) { $('div.foto div#' + m[1]).addClass('hover')   }
    },
    function() { 
      $(this).removeClass('hover');
      if ( m = $(this).attr('id').match(/^(marker_\d+)/)   ) { $('div.foto div#' + m[1]).removeClass('hover')   }
    }
  )
});

