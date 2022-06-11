import './hotel.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { MailList } from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

export const Hotel = () => {

  const[slideNumber, setSlideNumber] = useState(0);
  const[open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://www.hotel-osmine.hr/assets/cms_page_image/cms_page_home_accommodation_110_image_1568138814.jpg"
    }, {
      src: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/88/23/88237_v4.jpeg"
    }, {
      src: "https://q-xx.bstatic.com/xdata/images/hotel/max500/170328342.jpg?k=126e588eebf6c5ec4984706e3d4d93631baf0a4e83bdda1966d569ff1855fa83&o="
    }, {
      src: "https://pix10.agoda.net/hotelImages/363/3632298/3632298_17120802300060292407.jpg?ca=6&ce=1&s=1024x768"
    }, {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/127207876.jpg?k=35c7fe84315d83f6608a29580ea0a3f8733a0c3fc097c285d8eac54db95c2ff0&o=&hp=1"
    }, {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d4/0b/07/new-hotel.jpg?w=900&h=-1&s=1"
    }, {
      src: "https://sarajevo.travel/assets/photos/places/big/hotel-europe-1579722111.jpg"
    }
  ];

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotelContainer'>
        {open && <div className='slider'>
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=> setOpen(false)} />
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=> handleMove("l")}/>
        <div className='sliderWrapper'>
          <img src={photos[slideNumber].src} alt="" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=> handleMove("r")}/>
        </div>}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Travnička br.15 Sarajevo</span>
          </div>
          <span className='hotelDistance'>Excellent location - 500m from center</span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free  airport taxi
          </span>
          <div className='hotelImgs'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsText'>
              <h1 className='hotelTitle'>Stay in the heart of Sarajevo</h1>
              <p className='hotelDesc'>
                You're eligible for a Genius discount at Hotel Europe! To save at this property, all you have to do is sign in.

                The 5-star Hotel Europe, with over 130 years of tradition, is centrally situated in Sarajevo. It offers free WiFi, free swimming pool and gym access as well as a 24-hour reception.

                Europe Hotel is entirely air-conditioned and it provides rooms with cable TV, a wellness centre with a Turkish bath, saunas, massage rooms and beauty treatments.

                The Europe is situated at the prime location between the Ottoman Old Town core, Baščaršija, and the central part of Sarajevo showcasing the Austro-Hungarian buildings.

                Bečka Kafana (The Viennese Café) serves delicious coffee beverages and the à la carte restaurant offers local and international cuisine.

                All major historical and cultural attractions, such as cathedrals, mosques and synagogues in Sarajevo are located within a 300 m radius from Hotel Europe.

                Within 50 m there is a supermarket, restaurants and bars and a park. Europe Hotel is 3 km from the Main Train and Bus Station and 12 km away from Sarajevo International Airport. Two long promenades available within the radius of 300m, ideal for recreational activities.

                This is our guests' favourite part of Sarajevo, according to independent reviews.

                Couples particularly like the location — they rated it 9.8 for a two-person trip.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Sarajevo, this property has an excellent location score of 8.9!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
