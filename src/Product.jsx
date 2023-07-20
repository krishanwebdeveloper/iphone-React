import React from 'react';
import prod from './AllData';

export const Product = ({ cart, setcart }) => {
  function adddetail(data) {
    setcart([...cart, data])
  } 
  return (
    <div className='jill'>
      <div className='flexhead'>
        <img className='pics' src={require("./image/1024px-Noun_Project_list_icon_119366_cc.svg-removebg-preview.png")}></img>
        <h2 className='heads'>iPhone miniTab</h2>
        <h2 className='heads'>Sell</h2>
        <h2 className='heads'>Best seller</h2>
        <h2 className='heads'>Mobile</h2>
        <h2 className='heads'>Today Deals</h2>
        <h2 className='heads'>Customer Service</h2>
        <h2 className='heads'>New Releases</h2>
        <h2 className='heads'>Electronics </h2>
        <h2 className='heads'>Prime</h2>
        <h2 className='heads'>Pay</h2>
      </div>
      <div>


        <img className='widthimage' src={require("./image/8765519_25611.jpg")}></img>
        <img className='crakers' src={require("./image/207857_diwali-crackers-png-removebg-preview.png")}></img>

        <img className='crakers1' src={require("./image/6207999_3207179-removebg-preview.png")}></img>
          

        <img className='crakersoffer' src={require("./image/pngtree-special-offer-poster-png-image_3784433-removebg-preview.png")}></img>
        <div>
          <img className='air' src={require("./image/airpods_pro_case-removebg-preview.png")}></img>
          <h1 className='airpods'>Airpods</h1>
          <h2 className='mobiles'>“One of the best predictors of ultimate success … isn't natural talent or even industry expertise, but how you explain your failures and rejections.”</h2>
        </div>
        <div>
          <img className='homeee' src={require("./image/homepod-mini-accessories-202110-removebg-preview.png")}></img>
          <h1 className='homepod'>Homepod</h1>
        </div>
<h1 className='offers'>1</h1> 
   

      </div>
      {

        prod.map((data) =>
          <div className='flexproduct'>
            <div>
              <img src={data.img} alt="" width="500px" />
            </div>
            <div className='doubleflex'>
              <div>
                {/* <h1>{data.id}</h1> */}

                <p className='content'>{data.content}</p>



                <p className='lining'>{data.line}</p>
                <img className='stars' src={data.star} alt="" width="100px" />

                <div className='thinline'></div>

                <h2 className='price'>Price : {data.price}./</h2>
                <h2 className='mrp'>MRP : 130000</h2>
                <h2 className='all tax'>Inclusive of all taxes</h2>

                <ul className='component'>
                  <li>Free Delivery</li>
                  <li>7 Days Replacement</li>
                  <li>Warrenty Policy</li>
                  <li>Top Brand</li>

                  <li>No Cost EMI</li>
                  <li>Bank Offer</li>
                  <li>Get GST invoice and save up to 28% on business purchases.</li>

                </ul>

              </div>
              <div className='border'>
                <h1 className='withoutchange'>Without Exchange</h1>

                <h2 className='rate'>Price : {data.price}--MRP : 130000</h2>
                <h2 className='june'>FREE Delivery : June To November</h2>
                <h2 className='protection'>Add to Protection Plan</h2>
                <h2 className='applecare'>Protect + with Apple care Service</h2>


                <button className='addtocart' onClick={() => adddetail(data)}>Add to cart</button>
              </div>
            </div>
          </div>)


      }


      <div className='footer'>
        <div className='flexing'>

          <div>
            <h1 className='large'>Shop and Learn</h1>
            <h2 className='small'>Store</h2>
            <h2 className='small'>Mac</h2>
            <h2 className='small'>iPad</h2>
            <h2 className='small'>iPhone</h2>
            <h2 className='small'>Watch</h2>
            <h2 className='small'>AirPods</h2>
            <h2 className='small'>TV & Home</h2>
            <h2 className='small'>AirTag</h2>
            <h2 className='small'>Gift Cards</h2>
          </div>


          <div>
            <h1 className='large'>Entertainment</h1>
            <h2 className='small'>Apple One</h2>
            <h2 className='small'>Apple TV+</h2>
            <h2 className='small'>Apple Music</h2>
            <h2 className='small'>Apple Arcade</h2>
            <h2 className='small'>Apple Podcasts</h2>
            <h2 className='small'>Apple Books</h2>
            <h2 className='small'>App Store</h2>

          </div>



          <div>
            <h1 className='large'>Apple Store</h1>
            <h2 className='small'>Find a Store</h2>
            <h2 className='small'>Genius Bar</h2>
            <h2 className='small'>Today at Apple</h2>
            <h2 className='small'>Apple Camp</h2>
            <h2 className='small'>Apple Trade In</h2>
            <h2 className='small'>Ways to Buy</h2>
            <h2 className='small'>Recycling Programme</h2>
            <h2 className='small'>Order Status</h2>
            <h2 className='small'>Shopping Help</h2>

          </div>

          <div>
            <h1 className='large'>About Apple</h1>
            <h2 className='small'>Newsroom</h2>
            <h2 className='small'>Apple Leadership</h2>
            <h2 className='small'>Career Opportunities</h2>
            <h2 className='small'>Investors</h2>
            <h2 className='small'>Ethics & Compliance</h2>
            <h2 className='small'>Events</h2>
          </div>



        </div>
      </div>

    </div>
  )
}
