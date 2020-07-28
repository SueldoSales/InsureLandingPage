import React from 'react';

function NavBar() {
    const clickHandler = () => {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        
        hamburger.classList.toggle('show');
        menu.classList.toggle('show');
    }

    return (
        <nav>
			<div className="container">
				<div className="flex">
					<div className="img-wrapper">
						<img src="./img/logo.svg" alt="logo" />
					</div>

					<button onClick={() => clickHandler()} className="hamburger" id="hamburger">
						<img
							className="open"
							src="./img/icon-hamburger.svg"
							alt="icon-hamburger"
						/>
						<img className="close" src="./img/icon-close.svg" alt="icon-close" />
					</button>

					<ul id="menu">
						<li><a href="https://sueldosales.github.io/">How we work</a></li>
						<li><a href="https://sueldosales.github.io/">Blog</a></li>
						<li><a href="https://sueldosales.github.io/">Account</a></li>
						<li><a className="btn btn-reverse" href="https://sueldosales.github.io/">View plans</a></li>
					</ul>
				</div>
			</div>
		</nav>
    );
}

export default NavBar;