// alert(`Ready!`);
$(document).ready(function() { 
  
    const $input1 = $("#box1");
    const $input2 = $("#box2");
    
    
    //trending gif
    $("#trending").on("click", function(evt){

        // alert("The button is clicked!");
        evt.preventDefault(); // prevents a page refresh on a 'click' event 

    $.ajax({
        url: `https://api.giphy.com/v1/gifs/trending?&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc&limit=5`,
      }).then(
        (data) => {
        console.log(data) //to look at the array
         for(let i = 0; i < data.data.length; i++) {
          // alert("I am working!");
          // console.log(gif); //to look at the links
          let gif = data.data[i].images.downsized_medium.url;
          getTrendingGif(gif);
        }
      }),
        
        (error) => {
          console.log("bad request", error)
        }
    })
    
      //will only be called in success path
      function getTrendingGif(gif) {
        $(".trendingGif").append(`<img src="${gif}">`);
      }

      
      //search gif
      $("#search").on("click", function(evt){

        evt.preventDefault(); // prevents a page refresh on a 'click' event 
        var userInput1 = $input1.val();
        // console.log($input1.val());

      $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${userInput1}&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc&limit=5`,
      }).then(
        (data) => {
        console.log(data); //to look at the array
        for(let i = 0; i < data.data.length; i++) {
          // alert("I am working!");
            let gif = data.data[i].images.downsized_medium.url;
            // console.log(gif); //to look at the links
            getSearchedGif(gif);
        }
        $("form").trigger("reset") //clear input after button was clicked  
        
        },
        
        (error) => {
          console.log("bad request", error)
        }
      )
    })

    function getSearchedGif(gif) {
      $(".searchedGif").append(`<img src="${gif}">`);
    }


      //translate gif
      $("#translate").on("click", function(evt){

        evt.preventDefault(); // prevents a page refresh on a 'click' event 
        var userInput2 = $input2.val();
        // console.log($input1.val());

      $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${userInput2}&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc&limit=5`,
      }).then(
        (data) => {
        console.log(data); //to look at the array
        for(let i = 0; i < data.data.length; i++) {
          // alert("I am working!");
            let gif = data.data[i].images.downsized_medium.url;
            // console.log(gif); //to look at the links
            getTranslatedGif(gif);
        }
        $("form").trigger("reset") //clear input after button was clicked  
        
        },
        
        (error) => {
          console.log("bad request", error)
        }
      )
    })

    function getTranslatedGif(gif) {
      $(".translatedGif").append(`<img src="${gif}">`);
    }

})