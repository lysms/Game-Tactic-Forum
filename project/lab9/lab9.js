$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "lab9jsontemplate.json",
        success: function(responseData, status) {
            var list = "<ul>";
            $.each(responseData.menuItem, function(i, item) {
                list += "<li>";
                list += '<a href = "' + item.menuURL + '" target="_blank ">'
                list += item.menuName + "</a> &nbsp&nbsp---&nbsp&nbsp";
                list += item.menuDesc + "</li>";
                //list += "<a href='" + item.menuURL + "' target='_blank'> Link</a></li>";
            });
            list += "</ul>";
            $('#lists').html(list);

        },
        error: function(msg) {
            //this will alert the problem
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }

    });

});