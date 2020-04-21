$.ajax({
	type: "POST",
	url: "./csgo/csgo.json",
	success: function(responseData, status) {
		responseData.sort(function(a, b) {
			net_votes_a = a.upvotes - a.downvotes;
			net_votes_b = b.upvotes - b.downvotes;
			if(net_votes_a > net_votes_b) {
				return -1;
			}
			else
			{
				return 1;
			}
		})
		output = ($(".cs").html());
		output += "<p id='" + responseData[0].id + "'>";
		output += "<b>" + responseData[0].name + "</b> <br/>";
        output += "<em>" + responseData[0].desc + "</em> <br/> </p>";
        output += "<button id='u" + responseData[0].id + "' type='button' >	&#128147; " + responseData[0].upvotes + "</button><button id='d" + responseData[0].id + "' type='button' > &#128148; " + responseData[0].downvotes + "</button>";
		$(".cs").html(output);
	}, error: function(msg) {
		alert("There was a problem: " + msg.status + " " + msg.statusText);
	}
})

$.ajax({
	type: "POST",
	url: "./lol/lol.json",
	success: function(responseData, status) {
		responseData.sort(function(a, b) {
			net_votes_a = a.upvotes - a.downvotes;
			net_votes_b = b.upvotes - b.downvotes;
			if(net_votes_a > net_votes_b) {
				return -1;
			}
			else
			{
				return 1;
			}
		})
		output = ($(".lol2").html());
		output += "<p id='" + responseData[0].id + "'>";
		output += "<b>" + responseData[0].name + "</b> <br/>";
        output += "<em>" + responseData[0].desc + "</em> <br/> </p>";
        output += "<button id='u" + responseData[0].id + "' type='button' >	&#128147; " + responseData[0].upvotes + "</button><button id='d" + responseData[0].id + "' type='button' > &#128148; " + responseData[0].downvotes + "</button>";
		$(".lol2").html(output);
	}, error: function(msg) {
		alert("There was a problem: " + msg.status + " " + msg.statusText);
	}
})

$.ajax({
	type: "POST",
	url: "./pubg/pubg.json",
	success: function(responseData, status) {
		responseData.sort(function(a, b) {
			net_votes_a = a.upvotes - a.downvotes;
			net_votes_b = b.upvotes - b.downvotes;
			if(net_votes_a > net_votes_b) {
				return -1;
			}
			else
			{
				return 1;
			}
		})
		output = ($(".pubg2").html());
		output += "<p id='" + responseData[0].id + "'>";
		output += "<b>" + responseData[0].name + "</b> <br/>";
        output += "<em>" + responseData[0].desc + "</em> <br/> </p>";
        output += "<button id='u" + responseData[0].id + "' type='button' >	&#128147; " + responseData[0].upvotes + "</button><button id='d" + responseData[0].id + "' type='button' > &#128148; " + responseData[0].downvotes + "</button>";
		$(".pubg2").html(output);
	}, error: function(msg) {
		alert("There was a problem: " + msg.status + " " + msg.statusText);
	}
})