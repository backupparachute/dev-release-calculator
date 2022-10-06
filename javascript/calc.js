document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  console.log("loading event listenr...");

  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('blur', event => {
		calcTotals(event);
    })
  })

  calcTotals();

});

function calcTotals(event) {
    console.log("calc totals...");

    let curr_build_number = Number(document.querySelector('#current_build_number').value);

    let day = daysIntoYear(new Date());

    let avg_days_per_build = day / curr_build_number;

	document.querySelector('#details td.current-day-year').innerHTML = day;
  if (Number.isFinite(avg_days_per_build)) {
    document.querySelector('#details td.average-days-per-build').innerHTML = avg_days_per_build;
  }


}

function to_percent(num) {
	if (num) {
		return 	(num / 100);
	}

	return 0;

}

function daysIntoYear(date){
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

function to_currency(num) {
	const formatter = new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'USD',
	  minimumFractionDigits: 2
	});
	return formatter.format(num);
}
