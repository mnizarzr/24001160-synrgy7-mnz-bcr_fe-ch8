export default function Footer() {
  return (
    <>
      <footer id="footer" className="container" style={{ paddingBottom: 48 }}>
        <div className="row flex-md-nowrap gap-2 justify-content-between">
          <div className="col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <nav className="col-md-3">
            <ul className="list-unstyled">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-md-3">
            <p>Connect with us</p>
            <div id="footer-socmeds">
              <img
                src="assets/icons/icon_facebook.png"
                alt="Facebook"
                srcSet=""
              />
              <img
                src="assets/icons/icon_instagram.png"
                alt="Instagram"
                srcSet=""
              />
              <img
                src="assets/icons/icon_twitter.png"
                alt="Twitter"
                srcSet=""
              />
              <img src="/assets/icons/icon_mail.png" alt="Youtube" srcSet="" />
              <img src="assets/icons/icon_twitch.png" alt="Twitch" srcSet="" />
            </div>
          </div>
          <div className="col-md-3">
            <p>Copyright © Binar 2022</p>
            <div style={{ width: 150, height: 40, backgroundColor: "blue" }}>
              <span>Brand</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
