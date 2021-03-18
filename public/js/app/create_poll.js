
$(function() {

    $("#use_customized_url").on("change",function () {
        if ($(this).prop("checked")) 
        {
            $("#customized_url_options").removeClass("hidden");
        }
         else
         {
            $("#customized_url_options").addClass("hidden");
        }
    });

    /**
     * Hide/Show password options
     */

    $("#use_password").on("change",function(){
        if ($(this).prop("checked")) {
            $("#password_options").removeClass("hidden");
        } else {
            $("#password_options").addClass("hidden");
        }
    });

    /**
     * Enable/Disable valueMax options
     */

    $("#use_value_max").on("change",function () {
        if ($(this).prop("checked")) {
            $("#value_max_options").removeClass("hidden");
        } else {
            $("#value_max_options").addClass("hidden");
        }
    });

    // Check cookies are enabled too

    var cookieEnabled = function () {
        var cookieEnabled = navigator.cookieEnabled;

        // if not IE4+ nor NS6+
        
        if (!cookieEnabled && typeof navigator.cookieEnabled === "undefined") {
            document.cookie = "testcookie";
            cookieEnabled = document.cookie.indexOf("testcookie") !== -1;
        }

        return cookieEnabled;
    };

    if (cookieEnabled()) {
        // Show the form block
        document.getElementById("form-block").setAttribute("style", "");
    }
     else 
    {
        // Show the warning about cookies
        document.getElementById("cookie-warning").setAttribute("style", "");
    }

    if 
    (
        $("#use_customized_url").is(":checked") ||
        $("#use_password").is(":checked") ||
        $("#use_value_max").is(":checked") ||
        $("#receiveNewVotes").is(":checked") ||
        $("#hidden").is(":checked")
    ) 
    {
        $("#optional").collapse();
    }
});
