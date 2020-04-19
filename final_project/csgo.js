// add ready function with posts into listStyleType

// then print them out

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
				output += "<button type='button' onclick='upvote(" + item.id + ")'>↑</button><button type='button' onclick='downvote(" + item.id + ")'>↓</button></li>";
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
	for(var i=0;i<postObjs.length;i++) {
		if(postObjs[i].id == id) {
			postObjs[i].votes = votes[id]
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
	//$("ul").find("#" + id.toString()).html("Upvotes: " + count + "<br/>");
}