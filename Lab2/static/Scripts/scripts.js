    var URL = "/rest_librarys/";
    var URLL = "/rest_library/";	

    $(document).ready(
       function() {
          $("#librarys").hide();
       }
    );

    function getLibrarys()
    {
       $.getJSON(URL,{},showLibrarys);
    }

    function getLibrary()
    {
       $.getJSON(URLL + $("#code").val())
           .done(showLibrary)   
           .fail(function()    
                 {
                      alert("Sorry! Such book in your library Not Found!");
                 }
           );
    }

    function showLibrary(library)
    {
        $("#book").val(library.book)
        $("#rating").val(library.rating)
        $("#status").val(library.status)
    }

    function showLibrarys(librarys) {
       $("#libraryrows").html("")
       $.each(librarys,
              function(idx,library) {
                 $("#libraryrows").append("<tr><td>" + library.code + "</td><td>" +
                       library.book + "</td><td>" + library.rating + "</td><td>" +
                       library.status + "</td></tr>");
              } 
        ); 

        $("#librarys").show();
   } \

    function addLibrary()
    {
       $.ajax(
          { "url": URL,
             "data": {
                       "code" : $("#code").val(),
                       "book" : $("#book").val(),
                       "rating" : $("#rating").val(),
                       "status" : $("#status").val()
                     },
             "type" : "post",
             "success" : add_success,
             "error" : add_error
          }
      ); 
    }

    function add_success()
    {
      alert("Added book Successfully!");
    }

    function add_error()
    {
      alert("Could not add Book!");
    }

    function deleteLibrary()
    {
       $.ajax(
          {  "url": URLL + $("#code").val(),
             "type" : "delete",
             "success" : delete_success,
             "error" : delete_error
          }
      ); 
    }

    function delete_success()
    {
      alert("Deleted Book Successfully");
    }

    function delete_error()
    {
      alert("Could not delete Book!");
    }
