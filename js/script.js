// alert(`Ready!`);
$(document).ready(function() { 
  
    const $input1 = $("#box1");
    
    
    $("#trending").on("click", function(evt){

        // alert("The button is clicked!");
        evt.preventDefault(); // prevents a page refresh on a 'click' event 
        // console.log($input1.val());
        var userInput1 = $input1.val();
        

    $.ajax({
        url: `https://api.giphy.com/v1/gifs/trending?q=${userInput1}&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc&limit=5`,
      }).then(
        (data) => {
        console.log(data)
         for(let i = 0; i < data.data.length; i++) {
          // alert("I am working!");
            let gif = data.data[i].images.downsized_medium.url;
            console.log(gif);
            getGif(gif);
        }
        
        (error) => {
          console.log("bad request", error)
        }
    })
    
      //will only be called in success path
      function getGif(gif) {
        $(".trendingGif").append(`<img src="${gif}">`);
      }
    
      // $.ajax({
      //   url: `https://api.giphy.com/v1/gifs/search?q=${userInput1}&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc&limit=5`,
      // }).then(
      //   (data) => {
      //     // console.log(data);  
            
      //     $("form").trigger("reset") //clear input after button was clicked
      //   },
        
      //   (error) => {
      //     console.log("bad request", error)
      //   }
      // )

      // $.ajax({
      //   url: `https://api.giphy.com/v1/gifs/translate?q=${userInput1}&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc&limit=5`,
      // }).then(
      //   (data) => {
      //     // console.log(data);  
            
      //     $("form").trigger("reset") //clear input after button was clicked
      //   },
        
      //   (error) => {
      //     console.log("bad request", error)
      //   }
      // )
})


      
      })