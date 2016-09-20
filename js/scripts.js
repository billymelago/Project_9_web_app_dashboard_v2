 $(function() {
              $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html, body').animate({
                      scrollTop: target.offset().top
                    }, 800);
                    return false;
                  }
                }
              });
            });

//prevent form from being submitted by using enter key
$('form input').keydown(function (e) {
    if (e.keyCode == 13) {
        var inputs = $(this).parents("form").eq(0).find(":input");
        if (inputs[inputs.index(this) + 1] !== null) {                    
            inputs[inputs.index(this) + 1].focus();
        }
        e.preventDefault();
        return false;
    }
});

var member_list = [
    "Bernadette", "Billy", "Erondu", "SpiltMilkStudios", "Nuraika", "Su", "Rogie", "Jono","REM", "Brynn", "John", "Sean"
];

$("#autocomplete").autocomplete({
    source: member_list,
    minLength: 0,
    delay: 0
}).autocomplete("widget").addClass("fixed-height");

$("#send-message").click(function() {
    var member = $("#autocomplete").val();
    var message = $("#message").val();
    if (validation()) {
        $("form").submit();
    }
});

//make sure member name is selected and there is content in text box before sending message
function validation() {
    var member = document.getElementById("autocomplete").value;
    var message = document.getElementById("message").value;
    if (member === "" || message === "") {
        $("#dialog").dialog({
            show: "shake",
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $(this).dialog("close");
                        $("#autocomplete").val(" ");
                    }
                }
            ]
        });
        return false;
    } else {
        $("#dialog2").dialog({
            show: "fade",
            dialogClass: "no-close",
            buttons: [
                {
                    text: "Submit",
                    click: function(){
                        $(this).dialog("close");
                        $("form").submit();
                    }
                },
                {
                    text: "Edit",
                    click: function(){
                        $(this).dialog("close");
                    }
                }
            ]
        });
        return false;
    }
}