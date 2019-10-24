(function($) {
    'use strict';
    var block_featured_events = $('.sial-featured-events_block');
    var events_datas = {};
    var _MS_PER_DAY = 1e3 * 60 * 60 * 24;
    $(document).ready(function() {
        if (block_featured_events.length) {
            getDatas(function() {
                var now = new Date();
                for (var event_data in events_datas) {
                    var start_date = new Date(events_datas[event_data].start_date);
                    var end_date = new Date(events_datas[event_data].end_date);
                    var difference_with_start_date = dateDiffInDays(now, start_date);
                    var difference_with_end_date = dateDiffInDays(now, end_date);
                    var list_element = $('<li class="event-element" data-key="' + event_data + '"><p class="event-shortname"><span>' + events_datas[event_data].shortname + '</span></p><p class="event-country"><span>' + events_datas[event_data].country + '</span></p></li>');
                    if (events_datas[event_data].is_sial_event) {
                        list_element.addClass('is_sial_event');
                    }
                    var countdown_to_append = '';
                    if (difference_with_start_date == 0 || difference_with_start_date < 0 && difference_with_end_date >= 0) {
                        countdown_to_append += ' - <span class="countdown">LIVE</span>';
                    } else if (difference_with_start_date > 0 && difference_with_start_date <= 60) {
                        countdown_to_append += ' - <span class="countdown">D-' + difference_with_start_date + '</span>';
                    }
                    list_element.find('.event-shortname').append(countdown_to_append);
                    block_featured_events.find('.events-list').append(list_element);
                    if (events_datas[event_data].highlighted) {
                        updateHighlightedEvent(list_element);
                    }
                }
                $(document).on('click', '.sial-featured-events_block .event-element:not(.current)', function(e) {
                    e.preventDefault();
                    updateHighlightedEvent($(this));
                });
            });
        }
    });
    /* https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript */    function dateDiffInDays(a, b) {
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    function updateHighlightedEvent(list_element) {
        list_element.addClass('current').siblings('.event-element').removeClass('current');
        var existing_highlighted_event = block_featured_events.find('.align-right .event-highlighted');
        var datas = events_datas[list_element.attr('data-key')];
        var new_highlighted_event = $('<div class="event-highlighted is_sial_event"><p class="event-shortname">' + datas.shortname + '</p><p class="event-country"><span>' + datas.country + '</span></p><p class="event-date">' + datas.displayed_date + '</p><img src="' + datas.image + '" alt="' + datas.shortname + '" /><a href="' + datas.link + '" title="More information about this event">Be inspired</a></div>');
        if (existing_highlighted_event.length) {
            existing_highlighted_event.fadeOut(200, function() {
                $(this).remove();
                block_featured_events.find('.align-right').append(new_highlighted_event);
                new_highlighted_event.fadeIn(200);
            });
        } else {
            block_featured_events.find('.align-right').append(new_highlighted_event);
            new_highlighted_event.fadeIn(200);
        }
    }
    function getDatas(callback) {
        if (typeof ouragan_sial_events_datas != 'undefined') {
            events_datas = ouragan_sial_events_datas;
            if (callback) {
                callback();
            }
        } else {
            $.getJSON(block_featured_events.attr('data-url')).done(function(datas) {
                events_datas = datas;
                if (callback) {
                    callback();
                }
            });
        }
    }
})(jQuery);