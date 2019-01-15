var row1 = {
	moniker: 'wancloud',
	votingpower: 1003,
	status: 'active',
	uptime: "234324"
}
var row2 = {};
row2.moniker = "wetez";
row2.votingpower = 555;
row2.status = "jailed";
row2.uptime = "1111"

var objs = [];
objs.push(row1);
objs.push(row2);

$(document).ready(function() {
	$("th").click(function() {
		console.log($(this).context.innerText);
	});	

	console.log(objs.length);

	var a = $("#thh");
	for (var i = 0, size = objs.length; i < size; i++) {

		a.after('<tr>' +
			'<td>' + objs[i].moniker + '</td>' +
			'<td>' + objs[i].votingpower + '</td>' +
			'<td>' + objs[i].status + '</td>' +
			'<td>' + objs[i].uptime + '</td>' +
			'</tr>');
	}
});
