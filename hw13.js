$("#filme").DataTable({
	"ajax" : "hw13.json",
	"searching" : false,
	"order" : [[ 1, 'asc' ]],
	"pageLength" : 5
});

$("#fave").tooltipster({
	content: $("#favecontent").detach()
});