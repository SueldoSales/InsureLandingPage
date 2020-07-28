import React from 'react';

function About() {
    return (
        <section className="container">
			<h2 className="line-top line-violet">
				We’re different
			</h2>
			<div className="flex">
				<div className="tile">
					<img src="./img/icon-snappy-process.svg" alt="snappy" />
					<h3>
						Snappy Process
					</h3>
					<p>
						Our application process can be completed in minutes, not hours.
						Don’t get stuck filling in tedious forms.
					</p>
				</div>

				<div className="tile">
					<img src="./img/icon-affordable-prices.svg" alt="prices" />
					<h3>
						Affordable Prices
					</h3>
					<p>
						We don’t want you worrying about high monthly costs. Our prices may
						be low, but we still offer the best coverage possible.
					</p>
				</div>

				<div className="tile">
					<img src="./img/icon-people-first.svg" alt="people" />
					<h3>
						People First
					</h3>
					<p>
						Our plans aren’t full of conditions and clauses to prevent payouts.
						We make sure you’re covered when you need it.
					</p>
				</div>
			</div>
		</section>
    );
}

export default About;