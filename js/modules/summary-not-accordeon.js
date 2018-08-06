/*
 Summary Not Accordeon
 Permet de mettre en place un menu qui scroll à l'élement et ouvre le premier item,
 Permet aussi de gérer les dépliages/repliages

 classes utilisée:
 .js-sna-menu
 .js-sna-item-container
 .js-sna-item-dist-container
 .js-sna-item-dist-link when link and content aren't
 .js-sna-item
 .js-sna-item-link
 .js-sna-item-link-list

 .js-sna-item-content


 @contributors:  Guillaume Focheux (Alsacréations)
 @date-created: 2015-04-21
 @last-update: 2015-06-01
 */
;
(function($) {

  // ScrollTo

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  $('.js-sna-menu a').off('click.sna').on('click.sna', function(e) {
    e.preventDefault();
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - 20;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);

    if ($(href).hasClass('js-sna-item-container')) {
      if ($(href).find('.js-sna-item-link').length > 0) {
        $(href).find('.js-sna-item-link').first().not('.is-active').trigger('click');
      }
    } else if ($(href).find('.js-sna-item-dist-container').length > 0) {
      $(href).find('.js-sna-item-dist-link').first().trigger('click');
    }
  });

  // Click event
  $('.js-sna-item-link').off('click.sna').on('click.sna', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    if ($('.icon-plus', this).length > 0) {
      $('.icon-plus', this).addClass('icon-minus').removeClass('icon-plus');
      $(this).closest('.js-sna-item').children('.js-sna-item-content').addClass('is-open');
    } else if ($('.icon-minus', this).length > 0) {
      $('.icon-minus', this).removeClass('icon-minus').addClass('icon-plus');
      $(this).closest('.js-sna-item').children('.js-sna-item-content').removeClass('is-open');
    }
  });

  // Main trigger of item
  if ($('.js-sna-item-dist-link').length > 0) {

    // Reset container
    function resetContainer($container) {
      $container.removeClass('item-is-open');
      $container.find('.js-sna-item-content').removeClass('is-open');
      $('.is-active', $container).removeClass('is-active');
    }

    $('.js-sna-item-content-btn').off('click.sna').on('click.sna', function() {
      $container = $(this).closest('.js-sna-item-dist-container');
      resetContainer($container);
    });

    $('.js-sna-item-dist-link').off('click.sna').on('click.sna', function(e) {

      e.preventDefault();

      // Get the container
      var $container = $(this).closest('.js-sna-item-dist-container');
      // Defines the container as opened for CSS
      $container.addClass('item-is-open');

      // Reset all active links inside the container and active the current
      $('.is-active', $container).removeClass('is-active');
      $(this).addClass('is-active');

      // Get index of link to open the good .js-sna-item-content in .is-open
      var indexElem = $(this).closest('.js-sna-item').index();
      var $elems = $container.find('.js-sna-item-container .js-sna-item');
      $elems.removeClass('is-open');
      $elems.eq(indexElem).addClass('is-open');
      // Bind the cross button with reset container

    });
  }

})(jQuery);
