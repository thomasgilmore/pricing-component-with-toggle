var annualMonthlySwitch = document.getElementById('annualMonthlySwitch');

var counter = 0;

var annualMonthlySwitchFunction = () => {
    counter++;
    if (counter % 2 == 0) {
        $('#monthlyPriceBasic').addClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceBasic').removeClass('hideMonthlyOrAnnualPrice');
        $('#monthlyPriceProfessional').addClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceProfessional').removeClass('hideMonthlyOrAnnualPrice');
        $('#monthlyPriceExpert').addClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceExpert').removeClass('hideMonthlyOrAnnualPrice');
    } else {
        $('#monthlyPriceBasic').removeClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceBasic').addClass('hideMonthlyOrAnnualPrice');
        $('#monthlyPriceProfessional').removeClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceProfessional').addClass('hideMonthlyOrAnnualPrice');
        $('#monthlyPriceExpert').removeClass('hideMonthlyOrAnnualPrice');
        $('#annualPriceExpert').addClass('hideMonthlyOrAnnualPrice');
    }
};

annualMonthlySwitch.addEventListener('click', annualMonthlySwitchFunction);