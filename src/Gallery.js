import React from 'react'
import $ from "jquery";
import Carousel from "./components/Carousel"
// var flickrOptions = {
//   api_key: "4d9566916d0dabeb1fa9e8548758aca6",
//   secret: "b6c81a0b8ee17dfb"
// };

class Gallery extends React.Component{
  constructor(p){
    super(p)
    this.state = {
      async: false
    }
  }
  componentDidMount(prevProps, prevState) {
    // if (prevState.pokemons !== this.state.pokemons) {
    //   console.log('pokemons state has changed.')
    // }
    // let ex = new Flickr
    // this.state.async = true
    /*
    let data = [], tmp
    // let flickr = new Flickr({ api_key: "4d9566916d0dabeb1fa9e8548758aca6" }).flickr.photos.search({
      let flickr = new Flickr({ api_key: "4d9566916d0dabeb1fa9e8548758aca6" });
    flickr.photos.search({
      
      tags: "#bikerace,#BoulderBikeTour",
      per_page: 40
    }, function(err, response) {
      // console.log("dans async")
      if(err) {
        console.error(err);
      }
      console.log(response);
      tmp = response
      let divcarousel = $('#myCarousel .carousel-inner')
      response.photos.photo.map((tof,i)=>{
        let div = $("<div/>").addClass('carousel-item')
        let img = $("<img/>").addClass("d-block w-100").attr("src", `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`)
        div.append(img)
        divcarousel.append(div)
        // return `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`
      })
      divcarousel.find("div:first").addClass('active')
    });
    */
   fetch(
     "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4d9566916d0dabeb1fa9e8548758aca6&per_page=40&tags=bikerace,BoulderBikeTour&format=json&nojsoncallback=1"
   ).then(response=>{
      if(response.headers.get('content-type').indexOf("application/json") !== -1){
        return response.json().then((json)=>{
          console.log(json)
          let divcarousel = $('#galleryCarousel .carousel-inner')
          let divindicators = $('#galleryCarousel .carousel-indicators')
          let addIndicator
          json.photos.photo.map((tof,i)=>{
            let div = $("<div/>").addClass('carousel-item text-center')
            let img = $("<img/>").addClass("d-block").attr({"src": `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`, height: 600, class: "d-inline"})
            div.append(img)
            divcarousel.append(div)
            addIndicator = $('<li/>').attr({"data-target": "#galleryCarousel", "data-slide-to": i})
            if(i == 0)addIndicator.attr({class: "active"})
            divindicators.append(addIndicator)
            // return `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`
          })
          divcarousel.find("div:first").addClass('active')

        })
      }else{
        return response.text().then((e)=>{
          alert("erreur => see log")
          console.log(e)
        })
      }
    })
  }
  componentWillUnmount() {
    this.state.async = false
  }
  render(){
    /*
    console.log("out of async");
    // console.log(tmp);
    data = tmp.photos.photo.map((tof,i)=>
      `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`
    )
    */
    return(
      <>
        <Carousel />
      </>
    )
  }
}
export default Gallery
