import React from 'react';
import './contact.css';
import IMG from '../image/con1.jpg'

export default function contactUs(){
    return(

<div className="container1">
  <div id="contH">
    <h2 >Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div className="row">
    <div className="column">
      <img src={IMG} id="imgId"/>
      {/* <label id="oEm" htmlFor="email">Our Email : CMS@gmail.com</label>
      <label id="oNo" htmlFor="no">Our Number : +9411 232 1242</label> */}
    </div>
    <div className="column">
      <form action="#">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="lastname" placeholder="Your email.."/>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input id="spid" type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>

    );
}