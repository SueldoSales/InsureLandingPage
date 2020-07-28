import React from 'react';

function Footer() {
    return (
        <footer>
			<div className="container">
				<div className="flex border-bottom">
					<div>
						<img src="./img/logo.svg" alt="logo" />
					</div>

					<ul className="flex">
						<li>
							<a href="https://sueldosales.github.io/">
								<img src="./img/icon-facebook.svg" alt="facebook" />
							</a>
						</li>
						<li>
							<a href="https://sueldosales.github.io/">
								<img src="./img/icon-twitter.svg" alt="twitter" />
							</a>
						</li>
						<li>
							<a href="https://sueldosales.github.io/">
								<img src="./img/icon-pinterest.svg" alt="pinterest" />
							</a>
						</li>
						<li>
							<a href="https://sueldosales.github.io/">
								<img src="./img/icon-instagram.svg" alt="instagram" />
							</a>
						</li>
					</ul>
				</div>

				<div className="flex align-start">
					<div>
						<h4>Our company</h4>
						<ul>
							<li><a href="https://sueldosales.github.io/">How we work</a></li>
							<li><a href="https://sueldosales.github.io/">Why Insure?</a></li>
							<li><a href="https://sueldosales.github.io/">View plans</a></li>
							<li><a href="https://sueldosales.github.io/">Reviews</a></li>
						</ul>
					</div>

					<div>
						<h4>Help me</h4>
						<ul>
							<li><a href="https://sueldosales.github.io/">FAQ</a></li>
							<li><a href="https://sueldosales.github.io/">Terms of use</a></li>
							<li><a href="https://sueldosales.github.io/">Privacy policy</a></li>
							<li><a href="https://sueldosales.github.io/">Cookies</a></li>
						</ul>
					</div>

					<div>
						<h4>Contact</h4>
						<ul>
							<li><a href="https://sueldosales.github.io/">Sales</a></li>
							<li><a href="https://sueldosales.github.io/">Support</a></li>
							<li><a href="https://sueldosales.github.io/">Live chat</a></li>
						</ul>
					</div>

					<div>
						<h4>Others</h4>
						<ul>
							<li><a href="https://sueldosales.github.io/">Careers</a></li>
							<li><a href="https://sueldosales.github.io/">Press</a></li>
							<li><a href="https://sueldosales.github.io/">Licenses</a></li>
						</ul>
					</div>
				</div>
			</div>
            <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://sueldosales.github.io/"><strong>Sueldo Sales</strong></a>.</p>
		</footer>
    );
}

export default Footer;