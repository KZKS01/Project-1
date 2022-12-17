// alert(`Ready!`);
$(document).ready(function() { 
  
    const $input = $("#box");   
    
    //trending gif
    $("#trending").on("click", handleGetTrending);
    $("#img1").on("click", handleGetTrending);

    function handleGetTrending(evt){

      // alert("The button is clicked!");
      evt.preventDefault(); // prevents a page refresh on a 'click' event

  $.ajax({
      url: `https://api.giphy.com/v1/gifs/trending?&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc`,
    }).then(
      (data) => {
      // alert("I am working!");
      //console.log(data) //to look at the array
      let i = Math.floor(Math.random()*51); //get a random index to get a random gif
      //console.log(i);
      let gif = data.data[i].images.downsized_medium.url;
      // console.log(gif); //to look at the links
      getTrendingGif(gif);
      
    }),
      
      (error) => {
        console.log("bad request", error)
      }
  }
      
      //will only be called in success path
      function getTrendingGif(gif) {
        // $(".trendingGif").append(`<img src="${gif}">`);
        $("#img1").attr("src", gif);
      }

      
      //search gif
      $("#search").on("click", handleGetSearch);
      $("#img2").on("click", handleGetSearch);
      
      function handleGetSearch(evt){
        evt.preventDefault(); // prevents a page refresh on a 'click' event 
        var userInput = $input.val();
        // console.log($input.val());

      $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=jR8VTUj3x87k9OpjfkvEu41hOtOz1MHc`,
      }).then(
        (data) => {
        // alert("I am working!");
        //console.log(data); //to look at the array
        let i = Math.floor(Math.random()*51); //get a random index to get a random gif
        //console.log(i);
        let gif = data.data[i].images.downsized_medium.url;
        // console.log(gif); //to look at the links
        getSearchedGif(gif);
        },
        
        (error) => {
          console.log("bad request", error)
        }
      )
    }

    function getSearchedGif(gif) {
      $("#img2").attr("src", gif);
    }

})