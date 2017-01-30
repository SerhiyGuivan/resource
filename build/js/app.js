(function ($) {
    jQuery.fn.lightTabs = function () {

        return this.each(function () {
            var $tabs = $(this),
                $navItems = $tabs.find(".tabs__nav").children("li"),
                $contentItems = $tabs.find('.tabs__pane');
            initIndex();
            showTab(0);
            $tabs.on('click', '.tabs__title', function () {
                showTab($(this).data('id'));
            });
            $navItems.on('click', function () {
                showTab($(this).data('id'));
            });
            function initIndex() {
                $navItems.each(function (index, element) {
                    var $el = $(element)
                            .data("id", index),

                        $title = $('<div class="tabs__title">')
                            .data("id", index)
                            .html('<div>'+ $el.text() + '</div>');

                    $contentItems.eq(index).before($title);
                });
            }
            function showTab(i) {
                $contentItems
                    .removeClass("active")
                    .eq(i)
                    .addClass("active");
                $navItems
                    .removeClass("active")
                    .eq(i)
                    .addClass("active");

                $tabs
                    .find('.tabs__title')
                    .removeClass("active")
                    .eq(i)
                    .addClass("active");
            }
        });
    };
})(jQuery);

(function ($) {
    $(document).ready(function () {

        initMenu();
        initSlider();
        initTabs();

        function initMenu() {
            var $menu = $('.js-menu');
            var options = {
                label: '',
                prependTo:'.navbar__container'
            };
            $menu.slicknav(options);
        }

        function initSlider() {
            var $slider = $('.js-slider');
            var  options = {
                vertical: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            vertical: false,
                        }
                    }
                ]
            };
            $slider.slick(options);
        }

        function initTabs() {
            var $tabs = $('.js-tabs');
            $tabs.lightTabs();
        }
    });
})(jQuery);