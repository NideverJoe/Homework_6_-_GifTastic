//fixbuttoncode
$("#buttonzone").on("click", ".btn-outline-success", gifbuttonclicked)

//fixgifcode
$("#gifzone").on("click", ".gif", animategif)

//render buttons code
var userbuttons = ["ex1", "ex2"];

      function renderButtons() {

        $("#buttonzone").empty();

        for (var i = 0; i < userbuttons.length; i++) {

          var a = $("<button>");
          a.addClass("btn");
          a.addClass("btn-outline-success");
          a.attr("data-name", userbuttons[i]);
          a.text(userbuttons[i]);
          $("#buttonzone").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#addsearch").on("click", function(event) {
        event.preventDefault();

        var userbutton = $("#gifsearch").val().trim();
        userbuttons.push(userbutton);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      renderButtons();


      //
      //
      //pull gifs from api code

function gifbuttonclicked(){        
    event.preventDefault();
        
        var search = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search";
        https://api.giphy.com/v1/gifs/search?api_key=6YuGnCBSyKYiMTjbNLTJ30FfYoVrp72i&q=&limit=25&offset=0&rating=G&lang=en
            console.log(queryURL)

        $.ajax({
          url: queryURL,
          data:{api_key: "6YuGnCBSyKYiMTjbNLTJ30FfYoVrp72i",
          q: search,
          limit: "10",},
          method: "GET",

        })
          .then(function(response) {
            console.log(response)
            var results = response.data;
  
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div class='float-left px-2'>");
  
              var rating = results[i].rating;
  
              var p = $("<p>").text("Rating: " + rating);
  

              //start with frozen image and store animated location. start with still state
              var gifimage = $("<img>");
              gifimage.attr("src", results[i].images.fixed_height_still.url);
              gifimage.attr("data-still", results[i].images.fixed_height_still.url);
              gifimage.attr("data-animate", results[i].images.fixed_height.url);
              gifimage.attr("data-state", "still");
              gifimage.addClass("gif");
              // class="gif"></img>


                // <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" 
                // data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" 
                // data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" 
                // data-state="still" 
                // class="gif"></img>
  
              gifDiv.prepend(p);
              gifDiv.prepend(gifimage);
  
              $("#gifzone").prepend(gifDiv);
            }
          });
      }


      // freeze and animate gifs
    //   $(".gif").on("click", function() {
        function animategif(){        

        var state = $(this).attr("data-state");
      
  
       console.log(state);
  
  if (state==="still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state" ,"animate");
  
  } else {
    (state==="animate") 
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state" ,"still");
  
      }}