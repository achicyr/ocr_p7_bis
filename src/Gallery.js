import React from 'react'
import Carousel from "./components/Carousel"
import Flickr from './components/vendor/flickr';
import $ from "jquery";
// var flickrOptions = {
//   api_key: "4d9566916d0dabeb1fa9e8548758aca6",
//   secret: "b6c81a0b8ee17dfb"
// };

class Gallery extends React.Component{

  render(){
    let flickr = new Flickr({ api_key: "4d9566916d0dabeb1fa9e8548758aca6" });
    /*let arr = */flickr.photos.search({
        tags: "#bikerace,#BoulderBikeTour",
        per_page: 40
      }, function(err, response) {
        if(err) {
          console.error(err);
        }
        console.log(response);
        let divcarousel = $('#myCarousel .carousel-inner')
        response.photos.photo.forEach((tof,i)=>{
          let div = $("<div/>").addClass('carousel-item')
          let img = $("<img/>").addClass("d-block w-100").attr("src", `https://farm${tof.farm}.staticflickr.com/${tof.server}/${tof.id}_${tof.secret}.jpg`)
          div.append(img)
          divcarousel.append(div)
        })
        divcarousel.find("div:first").addClass('active')
    });

    return(
      <>
        <div className="">oui</div>
        <Carousel/>
      </>
    )
  }
}
export default Gallery
