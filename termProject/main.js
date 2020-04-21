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
		output = ($(".lol").html());
		output += "<p id='" + responseData[0].id + "'>";
		output += "<b>" + responseData[0].name + "</b> <br/>";
		output += "<em>" + responseData[0].desc + "</em> <br/> </p>";
		$(".lol").html(output);
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
		output = ($(".pubg").html());
		output += "<p id='" + responseData[0].id + "'>";
		output += "<b>" + responseData[0].name + "</b> <br/>";
		output += "<em>" + responseData[0].desc + "</em> <br/> </p>";
		$(".pubg").html(output);
	}, error: function(msg) {
		alert("There was a problem: " + msg.status + " " + msg.statusText);
	}
})