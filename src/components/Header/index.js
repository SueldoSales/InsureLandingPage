import React from 'react';

function Header() {
    return (
        <header>
			<div className="container">
				<div className="flex align-start reverse-mobile">
					<div>
						<h1 className="line-top">
							Humanizing your insurance.
						</h1>
						<p>
							Get your life insurance coverage easier and faster. We blend our
							expertise and technology to help you find the plan that’s right
							for you. Ensure you and your loved ones are protected.
						</p>

						<button className="btn">
							View plans
						</button>
					</div>

					<div>
						<img
							src="./img/image-intro-desktop.jpg"
							alt="intro"
							className="ivan-from-peru"
						/>
					</div>
				</div>
			</div>
		</header>
    );
}

export default Header;