import React from 'react'
import './index.scss'
const Footer = () => {
	return (
		<footer className="section bg-footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<div className="">
							<h6 className="footer-heading text-uppercase">Information</h6>
							<ul className="list-unstyled footer-link mt-4">
								<li>
									<a href="https://www.facebook.com/quocminh1904/">Nghiem Quoc Anh Minh</a>
								</li>
								<li>
									<a href="https://www.facebook.com/TaiTran2512">Tran Tan Tai</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="">
							<h6 className="footer-heading text-uppercase">Ressources</h6>
							<ul className="list-unstyled footer-link mt-4">
								<li>
									<a href="https://github.com/nqam1904/book_store_fe">Github Project</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-2">
						<div className="">
							<h6 className="footer-heading text-uppercase">Help</h6>
							<ul className="list-unstyled footer-link mt-4">
								<li>
									<a href="#">Troubleshooting</a>
								</li>
								<li>
									<a href="#">Questions</a>
								</li>
								<li>
									<a href="https://github.com/nqam1904/book_store_fe/issues/new">
										Report a Bug
									</a>
								</li>
								<li>
									<a href="mailto: nghiemminh1904@gmail.com">Get Help</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="">
							<h6 className="footer-heading text-uppercase">Contact Us</h6>
							<p className="contact-info mt-4">Contact us if need help withanything</p>

							<a href="tel:0339190498">
								<p className="contact-info"> +84-339-1904-98</p>
							</a>
							<ul className="list-inline">
								<li className="list-inline-item">
									<a
										href="https://discord.gg/rt7myeRkjd"
										target="_blank"
										className="fab footer-social-icon fa-discord"></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center mt-5">
				<p className="footer-alt mb-0 f-14">2021 © Anh Minh, Tai Tran</p>
			</div>
		</footer>
	)
}
export default Footer
