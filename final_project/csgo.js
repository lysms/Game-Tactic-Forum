// add ready function with posts into listStyleType

// then print them out

if(window.history.replaceState) {
	window.history.replaceState( null, null, window.location.href );
}

numPosts = 0;
postObjs = [];

function printPosts() {
	postObjs = []
	upvotes = {}
	downvotes = {}
	$.ajax({
		type: "POST",
		url: "posts.json",
		cache:false,
		success: function(responseData, status) {
			$('#posts').html("");
			var output="<ul>";
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
			$.each(responseData, function(i, item) {
				upvotes[item.id] = item.upvotes;
				downvotes[item.id] = item.downvotes;
				
				post = new Object()
				post.name = item.name;
				post.desc = item.desc;
				post.upvotes = item.upvotes;
				post.downvotes = item.downvotes;
				post.id = item.id;
				postObjs.push(post)
				
				output += "<li id='" + item.id + "'>";
				output += "<b>" + item.name + "</b> <br/>";
				output += "<em>" + item.desc + "</em> <br/> ";
				output += "<button type='button' onclick='upvote(" + item.id + ")'>	&#128147; " + item.upvotes + "</button><button type='button' onclick='downvote(" + item.id + ")'> &#128148; " + item.downvotes + "</button></li>";
				numPosts++;
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

function validate(formObj) {
	title = formObj.title.value
	desc = formObj.desc.value
	
	post = new Object();
	post.name = title;
	post.desc = desc;
	post.upvotes = 0;
	post.downvotes = 0;
	post.id = numPosts;
	numPosts++;
	postObjs.push(post);
	
	$.ajax
    ({
        type: "POST",
        dataType : 'json',
        url: 'save_json.php',
        data: { data: JSON.stringify(postObjs) },
        success: function () {alert("SUCCESS"); },
        failure: function() {alert("ERROR");}
    });
}

function upvote(id) {
	upvotes[id]++;
	update(id, upvotes[id], "up")
}

function downvote(id) {
	downvotes[id]++;
	update(id, downvotes[id], "down")
}

function update(id, count, type) {
	var x;
	for(var i=0;i<postObjs.length;i++) {
		if(postObjs[i].id == id) {
			if(type == "up")
				postObjs[i].upvotes = count;
			if(type == "down")
				postObjs[i].downvotes = count;
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
	output += "<button type='button' onclick='upvote(" + postObjs[x].id + ")'>&#128147; " + postObjs[x].upvotes + "</button><button type='button' onclick='downvote(" + postObjs[x].id + ")'>&#128148;" + postObjs[x].downvotes + "</button></li>";
	$("ul").find("#" + postObjs[x].id).html(output);
}