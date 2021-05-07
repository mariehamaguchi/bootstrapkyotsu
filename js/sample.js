 $.ajaxSetup({
      type: "POST",
      dataType: "html",
      timeout: 11000,
      cache: false
      }
    });
    
    $.ajax({
      url: "/header.html",
      success: function(data) {
          $("#header").html($(data));
      }
    });

    $(window).on("load", function(){ 
      $("#header").load("header.html");
      $("#footer").load("footer.html");
    
    });