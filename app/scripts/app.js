/**
 * Created by harshilkumar on 5/18/17.
 */

$(document).ready(function() {


    $(document).on("click", "#menu_btn", function () {
        console.log("on click menu btn");
        $( ".collapsable_div" ).slideToggle( "slow" );
    });
});