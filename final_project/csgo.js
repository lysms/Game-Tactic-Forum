// add ready function with posts into listStyleType

// then print them out

postObjs = []

function printPosts() {
	postObjs = []
	votes = {}
	$.ajax({
		type: "GET",
		url: "posts.json",
		success: function(responseData, status) {
			$('#posts').html("");
			var output="<ul>";
			$.each(responseData, function(i, item) {
				
				votes[item.id] = item.votes;
				
				post = new Object()
				post.name = item.name;
				post.desc = item.desc;
				post.votes = item.votes;
				post.id = item.id;
				postObjs.push(post)
				
				output += "<li id='" + item.id + "'>";
				output += "<b>" + item.name + "</b> <br/>";
				output += "<em>" + item.desc + "</em> <br/> ";
				output += "Upvotes: " + item.votes + "<br/>";
				output += "<button type='button' onclick='upvote(" + item.id + ")'>	&#128147; " + item.votes + "</button><button type='button' onclick='downvote(" + item.id + ")'> &#128148; " + item.votes + "</button></li>";
			});
			output += "</ul>";
			$('#posts').html(output);
		}, error: function(msg) {
		// there was a problem
		alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	})
}

$(document).ready(printPosts());

function upvote(id) {
	votes[id]++;
	update(id, votes[id])
}

function downvote(id) {
	votes[id]--;
	update(id, votes[id])
}

function update(id, count) {
	var x;
	for(var i=0;i<postObjs.length;i++) {
		if(postObjs[i].id == id) {
			postObjs[i].votes = votes[id];
			x = i;
		}
	}
	$.ajax
    ({
        type: "POST",
        dataType : 'json',
        url: 'save_json.php',
        data: { data: JSON.stringify(postObjs) },
        success: function () {alert("SUCCESS"); },
        failure: function() {alert("ERROR");}
    });
	output = "";
	output += "<li id='" + postObjs[x].id + "'>";
	output += "<b>" + postObjs[x].name + "</b> <br/>";
	output += "<em>" + postObjs[x].desc + "</em> <br/> ";
	output += "Upvotes: " + postObjs[x].votes + "<br/>";
	output += "<button type='button' onclick='upvote(" + postObjs[x].id + ")'>&#128147; " + postObjs[x].votes + "</button><button type='button' onclick='downvote(" + postObjs[x].id + ")'>&#128148;" + postObjs[x].votes + "</button></li>";
	$("ul").find("#" + postObjs[x].id).html(output);
}