(function () {
    $(document).ready(function () {
        $(".paymentplan_add").unbind("click").click(function () {
            if ($(".paymentplan_input_wrapper").eq(2).hasClass("hide")) $(".paymentplan_input_wrapper").eq(2).removeClass("hide");
            else if ($(".paymentplan_input_wrapper").eq(3).hasClass("hide")) $(".paymentplan_input_wrapper").eq(3).removeClass("hide");
        });

        $("#paymentPlanDialog").on("click", ".arrow", function () {
            if ($(this).parents(".paymentplan_input_wrapper").hasClass("open")) {
                $(this).parents(".paymentplan_input_wrapper").removeClass("open");
            } else {
                $(".paymentplan_input_wrapper").removeClass("open");
                $(this).parents(".paymentplan_input_wrapper").addClass("open");
            }
        });
    });
})();