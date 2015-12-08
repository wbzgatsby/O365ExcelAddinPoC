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

        $("input.confirm").click(function () {
            var sum = 0;
            $(".inputbox input.payamount").each(function (index) {
                if ($(this).val()) {
                    sum += parseInt($(this).val());
                }
            });
            if (sum != 100) {
                alert("Total should be 100%.");
                return false;
            }
        });

        $(".inputbox input.paydate").datepicker({
            minDate: 0,
            onSelect: function (dateText, instance) {
                console.log($(this).parents(".paymentplan_input_wrapper").children(".payment_date"));
                $(this).parents(".paymentplan_input_wrapper").children(".paymentplan_input_title").children(".payment_date").html(dateText);
            },
            dateFormat: "mm/dd/yy",
            constrainInput: true
        });
    });
})();