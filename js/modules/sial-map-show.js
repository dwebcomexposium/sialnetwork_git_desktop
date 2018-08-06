/**!
 * Sial Map Show(pasteque)
 *
 * @contributors: Guillaume Focheux (Alsacréations)
 * @date-created: 2015-11-30
 * @last-update: 2015-11-30
 * */

;
(function($, window, document, undefined) {

  // Create the defaults once
  var pluginName = 'sialMapShow',
    defaults = {};

  // The actual plugin constructor
  function sialMapShow(_caller, options) {
    this._caller = _caller;
    this.$caller = $(_caller);
    //options override
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    // initialization
    this.init();
  }

  //Prototype of the object
  sialMapShow.prototype = {
    init: function() {
      var _self = this;
      _self.smsBinding();
      _self.smsLoadEvent();
      return this;
    },
    // register eventlistener
    smsBinding: function() {
      var _self = this,
        $_self = $(_self),
        $container = $(this._caller);
      $('.sms-map .sms-map-pointer').on('click', _self.smsSelectPointer );
      $container.on('smsSelectChange', _self.smsSelectChange );
    },
    // action Select an country
    smsSelectPointer: function( e ) {
      e.preventDefault();
      var _self = this,
        $_self = $(_self);
      if( ! $_self.hasClass('js-current') ){
        $_self.parent().find('.js-current').removeClass('js-current');
        $_self.addClass('js-current');
        $_self.closest('.js-sialMapShow').trigger('smsSelectChange');
      }
      return this;
    },
    // change selection
    smsSelectChange: function() {
      var _self = this,
        $_self = $(_self),
        plugin = $_self.data('sialMapShow'),
        $containerInfo = $_self.find('.sms-info'),
        country = $_self.find('.js-current').data('country'),
        lstEvents = $containerInfo.data('json');

      //send the right object to load in the container info
      plugin.smsLoadInfo(lstEvents[country]);
      return this;
    },
    // on Load get JSON and the next event
    smsLoadEvent: function() {
      var _self = this,
        $_self = $(_self),
        container = this._caller,
        $container = $(this._caller),
        country = $container.find('.js-current').data('country'),
        $containerInfo = $container.find('.sms-info'),
        url = $containerInfo.data('url');

        //Get Event Detail JSON
        $.getJSON( url )
          .done( function(json) {
            var next = {},
            plugin = $container.data('sialMapShow') ,
            index = '';
            $containerInfo.data('json',json),
            //Get tag next on event
            $.each( json, function( i ) {
              var event = this;
              if( event.next ) {
                next = event;
                index = i;
                return false;
              }
            });

            $containerInfo.removeClass('sms-hidden');

            //send to information block
            plugin.smsLoadInfo(next);
            $container.find('.'+index).addClass('js-current');
          });

      return this;
    },
    //Load information in Info
    smsLoadInfo: function(json) {
      var _self = this,
        $_self = $(_self),
        $container = $(this._caller),
        $containerInfo = $container.find('.sms-info');
        $containerInfo.fadeOut(0);
        if( json.next ){
          $containerInfo.find('.sms-next').show();
        } else {
          $containerInfo.find('.sms-next').hide();
        }
        $containerInfo.find('.sms-info-title').html(json.country);
        $containerInfo.find('.sms-info-date').html(json.date);
        $containerInfo.find('.sms-info-location').html(json.location);
        $containerInfo.find('.sms-info-title').html(json.country);
        $containerInfo.find('.sms-info-img').prop('src',json.image);
        $containerInfo.find('.sms-info-link').prop('href',json.link);
        $containerInfo.fadeIn(500);
    }

  };

  // Instanciate the plugin and put it in a variable
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, pluginName)) {
        $.data(this, pluginName, new sialMapShow(this, options));
      }
    });
  };
  if ($('.js-sialMapShow').length > 0) {
    $('.js-sialMapShow').sialMapShow();
  }

})(jQuery, window, document);
