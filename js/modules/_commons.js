/**!
 COMMONS
 All commons function merged to generics jQuery plugins

 @contributors: Geoffrey Crofte (Alsacréations)
 @date-created: 2015-03-26
 @last-update: 2015-03-26
 */

;
(function ($) {

	//
	// Plugin Name
	// @Description: Do something to create good interaction
	//

	$.fn.plugin_name = function (options) {

		var settings = $.extend({
			param_name: "param_value",
			param_name2: "param_value2"
		}, options);

		return this.each(function () {

		});

	};


	//
	// Toggle Slide
	// @Description: Toggle slide the targetted element
	// @Parameters: speed (int, ms)
	//

	$.fn.toggleSlide = function (options) {

		var settings = $.extend({
			speed: 200
		}, options);

		return this.each(function () {
			var $_this = $(this),
				$trigger = $(this).find('.js-toggle-trigger'),
				$target = $(this).find('.js-toggle-target');

			$trigger.on('click.ts', function () {

				if ($_this.hasClass('is-open')) {
					$target.stop().slideUp(settings.speed);
					$_this.removeClass('is-open');

				}
				else {
					$target.stop().slideDown(settings.speed);
					$_this.addClass('is-open');

				}

				return false;
			});
			$target.on('click.ts', function (e) {
				e.stopPropagation();
			});
			$('body').on('click', function (e) {
				if ($_this.hasClass('is-open')) {
					$trigger.trigger('click.ts');
				}
			});
		});

	};


	//
	// Toggle Fade
	// @Description: Toggle fade the targetted element
	// @Parameters: speed (int, ms)
	//

	$.fn.toggleFade = function (options) {

		var settings = $.extend({
			speed: 200
		}, options);

		return this.each(function () {
			var $_this = $(this),
				$trigger = $(this).find('.js-toggle-trigger'),
				$target = $(this).find('.js-toggle-target');

			$trigger.on('click.ts', function () {

				if ($_this.hasClass('is-visible')) {
					$target.stop().fadeIn(settings.speed);
					$_this.removeClass('is-visible');

				}
				else {
					$target.stop().fadeOut(settings.speed);
					$_this.addClass('is-visible');
				}

				return false;
			});
			$target.on('click.ts', function (e) {
				e.stopPropagation();
			});
		});

	};


}(jQuery));