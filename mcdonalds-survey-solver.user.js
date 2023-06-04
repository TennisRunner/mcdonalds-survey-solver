// ==UserScript==
// @name     mcdonalds-survey-solver
// @version  1
// @run-at document-start
// @require https://unpkg.com/kpg-util@1.0.4/bundle.js
// @require https://code.jquery.com/jquery-3.6.0.js
// @include https://www.mcdvoice.com*
// ==/UserScript==


$(document).ready(async function()
{
	$(".coupon-length-5").each((index, el) =>
	{
		$(el).attr("type", "number")
		.css("width", "80px")
		.on("input", function()
		{
			if($(this).val().trim().length == 5)
				$(this).nextAll("input")[0].focus();
		});

		if(index == 0)
			$(el).first()[0].focus();
	});

	$(".coupon-length-1").on("input", function()
	{
		if($(this).val().trim().length == 1)
			$(this).parent().find(".NextButton")[0].click();
	});

	while(true)
	{
		var el = null;

		try
		{
			el = await waitForElement(".NextButton[value=\"Next\"]");
			
			el[0].click();
		}
		catch{}

		await sleep(1000);
	}
});
