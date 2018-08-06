/**!
 * CMXP Catalogue display choice
 *
 * @contributors: Damien Senger (Alsacréations)
 * @date-created: 2015-10-15
 * @last-update: 2015-10-15
 * */

;
(function($) {

  $.fn.catalogueDisplayChoice = function() {
    var $button = $(this),
      display = $button.attr('data-display'),
      $target = $('.catal-ex');

    if ($target.length) {
      if ($target.hasClass('catal-ex-array')) {
        $target.removeClass('catal-ex-array');
      }

      if ($target.hasClass('catal-ex-blocs')) {
        $target.removeClass('catal-ex-blocs');
      }

      if (display == 'array') {
        $target.addClass('catal-ex-array');
      } else if (display == 'compact') {
        $target.addClass('catal-ex-blocs');
      }

      $('.crd-toggle .is-active').removeClass('is-active');
      // We're searching for .icon-catal (or .icon) => should begin by icon
      $('.crd-toggle [class^="icon"][data-displayicon="' + display + '"]').addClass('is-active');
    }
  };

  if ($('.crd-toggle').length) {
    $('.crd-toggle').on('click.cataDisplay', function() {
      $('.catal-results-display').toggleClass('is-open');
      e.preventDefault();
    });
  }

  if ($('.crd-button').length) {
    $('.crd-button').on('click.cataDisplay', function() {
      $(this).catalogueDisplayChoice();
      $('.catal-results-display').removeClass('is-open');
      e.preventDefault();
    })
  }
}(jQuery));
