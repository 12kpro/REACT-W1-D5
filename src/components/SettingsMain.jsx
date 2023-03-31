import avatar from "../assets/img/avatar.png";
const SettingsMain = (props) => (
  <main className="container">
    <div className="row">
      <div className="col-8 offset-2">
        <h1 className="border-bottom">Account</h1>
        <div className="row">
          <div className="col-4">
            <div>
              <h5 className="text-uppercase text-secondary">membership &amp; billing</h5>
              <button className="btn btn-light rounded-0"> Cancel Membership</button>
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex justify-content-between">
              <h6>student@strive.school</h6>
              <a className="text-decoration-none link-info" href="#">
                Change account email
              </a>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Password:*******</h6>
              <a className="text-decoration-none link-info" href="#">
                Change password
              </a>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
              <h6>Phone: 321 044 1279</h6>
              <a className="text-decoration-none link-info" href="#">
                Change phone number
              </a>
            </div>
            <div className="d-flex justify-content-between">
              <h6>
                <i className="fa-brands fa-paypal"></i> Paypal
              </h6>
              <a className="text-decoration-none link-info" href="#">
                Update payment info
              </a>
            </div>
            <div className="d-flex justify-content-end border-bottom pb-2 mb-2">
              <a className="text-decoration-none link-info" href="#">
                Billing details
              </a>
            </div>
            <div className="d-flex justify-content-end">
              <a className="text-decoration-none link-info" href="#">
                Redeem gift card or promo code
              </a>
            </div>
            <div className="d-flex justify-content-end pb-2">
              <a className="text-decoration-none link-info" href="#">
                Where to buy gift cards
              </a>
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <div>
              <h5 className="text-uppercase text-secondary">plan details</h5>
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex justify-content-between pb-2">
              <h6>
                premium{" "}
                <span className="text-black-50 px-1 border border-dark rounded">
                  ULTRA <strong>HD</strong>
                </span>
              </h6>
              <a className="text-decoration-none link-info" href="#">
                Change plan
              </a>
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <div>
              <h5 className="text-uppercase text-secondary">settings</h5>
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex flex-column">
              <a className="text-decoration-none link-info" href="#">
                Parental controls
              </a>
              <a className="text-decoration-none link-info" href="#">
                Test paticipation
              </a>
              <a className="text-decoration-none link-info" href="#">
                Manage download device
              </a>
              <a className="text-decoration-none link-info" href="#">
                Activate device
              </a>
              <a className="text-decoration-none link-info" href="#">
                Recent device streaming activity
              </a>
              <a className="text-decoration-none link-info pb-2" href="#">
                Sign out of all devices
              </a>
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <div>
              <h5 className="text-uppercase text-secondary">My profile</h5>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="d-flex justify-content-between pb-2">
                <a href="#" className="text-decoration-none fs-5 text-dark">
                  <img src={avatar} height="30px" width="30px" />
                  <span>Strive Student</span>
                </a>
                <div className="d-flex flex-column align-items-end">
                  <a className="text-decoration-none link-info" href="#">
                    Manage profiles
                  </a>
                  <a className="text-decoration-none link-info" href="#">
                    Add profile email
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="d-flex flex-column">
                  <a className="text-decoration-none link-info" href="#">
                    Language
                  </a>
                  <a className="text-decoration-none link-info" href="#">
                    Playback
                  </a>
                  <a className="text-decoration-none link-info" href="#">
                    Subtitle appearance
                  </a>
                </div>
              </div>
              <div className="col-8">
                <div className="d-flex justify-content-center">
                  <div className="d-flex flex-column ">
                    <a className="text-decoration-none link-info" href="#">
                      Viewing activity
                    </a>
                    <a className="text-decoration-none link-info" href="#">
                      Ratings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
export default SettingsMain;
