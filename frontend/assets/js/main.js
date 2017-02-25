(function() {

    $(function() {

        /**
         * Select2
         */
        $('[data-select]').select2({
            minimumResultsForSearch : Infinity
        });

        /**
         * Daterangepicker
         */
        (function($) {
            var dateRangePicker$ = $('#orders-daterange').daterangepicker({
                "locale" : {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "Применить",
                    "cancelLabel": "Отмена",
                    "fromLabel": "С",
                    "toLabel": "По",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб",
                        "Вс"
                    ],
                    "monthNames": [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Март",
                        "Июнь",
                        "Июль",
                        "Август",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                    "firstDay": 0
                },
                "autoApply" : true,
                "drops" : 'up'
            });

            $('#orders-daterange + .icon-daterange').on('click', function() {
                dateRangePicker$.trigger('click')
            });
        })($);

        (function($) {
            var dateRangePicker$ = $('#orders-daterange-route').daterangepicker({
                "locale" : {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "Применить",
                    "cancelLabel": "Отмена",
                    "fromLabel": "С",
                    "toLabel": "По",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб",
                        "Вс"
                    ],
                    "monthNames": [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Март",
                        "Июнь",
                        "Июль",
                        "Август",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                    "firstDay": 0,
                },
                "autoApply" : true,
                "drops" : 'up'
            });

            $('#orders-daterange-route + .icon-daterange').on('click', function() {
                dateRangePicker$.trigger('click')
            });
        })($);

        (function($) {
            var dateRangePicker$ = $('#orders-daterange-sm').daterangepicker({
                "locale" : {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "Применить",
                    "cancelLabel": "Отмена",
                    "fromLabel": "С",
                    "toLabel": "По",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб",
                        "Вс"
                    ],
                    "monthNames": [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Март",
                        "Июнь",
                        "Июль",
                        "Август",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                    "firstDay": 0
                },
                "autoApply" : true,
                "drops" : 'up'
            });

            $('#orders-daterange-sm + .icon-daterange').on('click', function() {
                dateRangePicker$.trigger('click')
            });
        })($);

        (function($) {
            var dateRangePicker$ = $('#orders-daterange-route-sm').daterangepicker({
                "locale" : {
                    "format": "DD/MM/YYYY",
                    "separator": " - ",
                    "applyLabel": "Применить",
                    "cancelLabel": "Отмена",
                    "fromLabel": "С",
                    "toLabel": "По",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб",
                        "Вс"
                    ],
                    "monthNames": [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Март",
                        "Июнь",
                        "Июль",
                        "Август",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                    "firstDay": 0,
                },
                "autoApply" : true,
                "drops" : 'up'
            });

            $('#orders-daterange-route-sm + .icon-daterange').on('click', function() {
                dateRangePicker$.trigger('click')
            });
        })($);

        /**
         * noUiSlider
         */
        (function($) {

            var keypressSlider = document.getElementById('orders-distance');

            noUiSlider.create(keypressSlider, {
                start: [1000, 10000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 15000
                },
                margin: 50
            });

            keypressSlider = document.getElementById('orders-weight-distance');

            noUiSlider.create(keypressSlider, {
                start: [1000, 25000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 50000
                },
                margin: 50
            });

            keypressSlider.setAttribute('disabled', true);

            $('#orders-weight').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.removeAttribute('disabled');
            });

            $('#orders-no-weight').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.setAttribute('disabled', true);
            });

        })($);

        (function($) {

            var keypressSlider = document.getElementById('orders-distance-route');

            noUiSlider.create(keypressSlider, {
                start: [1000, 10000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 15000
                },
                margin: 50
            });

            keypressSlider = document.getElementById('orders-weight-distance-route');

            noUiSlider.create(keypressSlider, {
                start: [1000, 30000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 50000
                },
                margin: 50
            });

            keypressSlider.setAttribute('disabled', true);

            $('#orders-weight-route').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.removeAttribute('disabled');
            });

            $('#orders-no-weight-route').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.setAttribute('disabled', true);
            });

        })($);

        (function($) {

            var keypressSlider = document.getElementById('orders-distance-sm');

            noUiSlider.create(keypressSlider, {
                start: [1000, 10000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 15000
                },
                margin: 50
            });

            keypressSlider = document.getElementById('orders-weight-distance-sm');

            noUiSlider.create(keypressSlider, {
                start: [1000, 25000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 50000
                },
                margin: 50
            });

            keypressSlider.setAttribute('disabled', true);

            $('#orders-weight').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.removeAttribute('disabled');
            });

            $('#orders-no-weight').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.setAttribute('disabled', true);
            });

        })($);

        (function($) {

            var keypressSlider = document.getElementById('orders-distance-route-sm');

            noUiSlider.create(keypressSlider, {
                start: [1000, 10000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 15000
                },
                margin: 50
            });

            keypressSlider = document.getElementById('orders-weight-distance-route-sm');

            noUiSlider.create(keypressSlider, {
                start: [1000, 30000],
                connect: true,
                step : 10,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 1,
                    'max': 50000
                },
                margin: 50
            });

            keypressSlider.setAttribute('disabled', true);

            $('#orders-weight-route').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.removeAttribute('disabled');
            });

            $('#orders-no-weight-route').on('click', function() {
                if ( $(this).is(':checked') )
                    keypressSlider.setAttribute('disabled', true);
            });

        })($);

        /**
         * Toggle star
         */
        $('.section-orders').on('click', '.section-orders__star', function() {
            var self$ = $(this);

            self$.find('i.fa').toggleClass('fa-star');

            if ( self$.find('i.fa').hasClass('fa-star') ) self$.attr('title', 'Удалить из избранного');
            else self$.attr('title', 'Добавить в избранное');

            var menuIcon$ = $('.header__icon-menu i.fa-star').parent();

            if ( $('.section-orders__star i.fa-star').length ) menuIcon$.addClass('active');
            else menuIcon$.removeClass('active');
        });

        /** 
         * Filter's scroll
         */
        (function($) {

            var filters$ = $('.aside-orders'),
                offset = filters$.offset().top;

            $(window).scroll(function () {
                var windowScroll = $(window).scrollTop();

                // fixedFilter(windowScroll);
            });

            // fixedFilter($(window).scrollTop());

            function fixedFilter(windowScroll) {
                if (windowScroll > offset) {
                    filters$.addClass('aside-orders-fixed');
                 }
                else {
                    filters$.removeClass('aside-orders-fixed');
                }
            }

        })($);

        /**
         * Filter's menu
         */
        (function($) {

            var menu$  = $('.header__menu'),
                offset = menu$.offset().top;

            $(window).scroll(function () {
                var windowScroll = $(window).scrollTop();

                fixedMenu(windowScroll);
            });

            fixedMenu($(window).scrollTop());

            function fixedMenu(windowScroll) {
                if (windowScroll > offset) {
                    menu$.addClass('header__menu-fixed');
                    // $('.header__icon-menu').addClass('header__icon-menu-fixed');
                    // $('.header__logout').addClass('header__logout-fixed');
                }
                else {
                    menu$.removeClass('header__menu-fixed');
                    // $('.header__icon-menu').removeClass('header__icon-menu-fixed');
                    // $('.header__logout').removeClass('header__logout-fixed');
                }
            }

        })($);

    });

})(jQuery);