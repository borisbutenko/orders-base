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
                    "firstDay": 0
                },
            });

            $('#orders-daterange-route + .icon-daterange').on('click', function() {
                dateRangePicker$.trigger('click')
            });
        })($);

        /**
         * noUiSlider
         */
        (function($) {

            var keypressSlider = document.getElementById('orders-distance');

            noUiSlider.create(keypressSlider, {
                start: [800, 3000],
                connect: true,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 0,
                    'max': 5000
                },
                margin: 50,
                padding: 20
            });

            keypressSlider = document.getElementById('orders-weight-distance');

            noUiSlider.create(keypressSlider, {
                start: [500, 4000],
                connect: true,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 0,
                    'max': 5000
                },
                margin: 50,
                padding: 20
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
                start: [800, 3000],
                connect: true,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 0,
                    'max': 5000
                },
                margin: 50,
                padding: 20
            });

            keypressSlider = document.getElementById('orders-weight-distance-route');

            noUiSlider.create(keypressSlider, {
                start: [500, 4000],
                connect: true,
                tooltips: [true, wNumb({ decimals: 1 })],
                range: {
                    'min': 0,
                    'max': 5000
                },
                margin: 50,
                padding: 20
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
            $(this).find('i.fa').toggleClass('fa-star');
        });

    });

})(jQuery);