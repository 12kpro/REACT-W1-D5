const SiteFooter = (props) => (
  <footer className="container text-secondary text-bg-dark">
    <div className="row">
      <div className="col-8 offset-2">
        <div className="row mb-3">
          <div className="col-12">
            <div className="fs-2">
              <a className="me-2" href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a className="me-2" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="me-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="me-2" href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <div className="d-flex flex-column">
              <a href="#">Audio and Subtitles</a>
              <a href="#">Media Center</a>
              <a href="#">Privacy</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-column">
              <a href="#">Audio Description</a>
              <a href="#">Investor Relations</a>
              <a href="#">Legal Notices</a>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-column">
              <a href="#">Help Center</a>
              <a href="#">Jobs</a>
              <a href="#">Cookie Preferences</a>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-column">
              <a href="#">Gift Cards</a>
              <a href="#">Terms of Use</a>
              <a href="#">Corporate Information</a>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <button className="btn btn-outline-secondary btn-sm">Service Code</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>&copy 1997-2019 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default SiteFooter;
