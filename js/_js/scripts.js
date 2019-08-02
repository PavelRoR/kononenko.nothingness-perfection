//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend flipclock.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    let head = document.getElementsByTagName("head")[0],
        link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}
/*План*/

$(document).ready(function () {
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });

    /*Записи*/
    (function ($) {
        jQuery.fn.lightTabs2 = function (options) {
            var createTabs2 = function () {
                let tabs2 = this,
                    i = 0,
                    showPage2 = function (i) {
                        $(tabs2).children("div").children("div").hide();
                        $(tabs2).children("div").children("div").eq(i).show();
                        $(tabs2).children("ul").children("li").removeClass("active2");
                        $(tabs2).children("ul").children("li").eq(i).addClass("active2")
                    };
                showPage2(1);
                $(tabs2).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page-2", i);
                    i++;
                });
                $(tabs2).children("ul").children("li").click(function () {
                    showPage2(parseInt($(this).attr("data-page-2")));
                });
            };
            return this.each(createTabs2);
        };
    })(jQuery);
    $(".recs-container").lightTabs2();
    /* Таймер */
    var clock;
    var futureDate = new Date("July 20, 2019 00:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        $('.clock-stop').addClass("alert-danger");
        $('.clock-stop').html("Скидка уменьшилась!");
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                $('.clock-stop').addClass("alert-danger");
                $('.clock-stop').html("Скидка уменьшилась!");
            }
        },
    });

    /*Конец документа*/
});