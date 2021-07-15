import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div>
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>

		<footer className="footer-distributed">

			<div className="footer-left">
				<h3>About<span> Knowgland</span></h3>

				<p className="footer-links">
					<a href="/home">Home</a>
					|
					<a href="/teachers">Teachers</a>
					|
					<a href="/#">Profile</a>
					|
					<a href="/contactus">Contact</a>
				</p>

				<p className="footer-company-name">© GeniusTec</p>
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					  <p><span>Malabe,
						 New Kandy Road</span>
						Sri Lanka - 10115</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+94(0)11 123 456</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@eduonix.com">support@reg.com</a></p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>About the Web Site</span>
					We offer Online conferences, workshops, presentations and research papers</p>
				<div className="footer-icons">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-instagram"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-youtube"></i></a>
				</div>
			</div>
		</footer>
        </div>
  );
}

export default Footer;
