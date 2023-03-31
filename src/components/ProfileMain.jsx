import ProfileImg from "../assets/img/kids_icon.png";
const ProfileMain = (props) => (
  <main className="container text-secondary pb-5 text-bg-dark">
    <div className="row ">
      <div className="col-6 offset-3">
        <h1 className="display-1 border-bottom border-secondary mb-4">Edit Profile</h1>
        <div className="row mb-4">
          <div className="col-3 ">
            <img className="img-fluid" src={ProfileImg} alt="" />
          </div>
          <div className="col-8">
            <form>
              <div className="mb-3 pb-4 border-bottom border-secondary">
                <h2 className="bg-secondary text-dark p-2 mb-5">Strive Student</h2>
                <p className="mb-1 fs-4">Language:</p>
                <select
                  className="form-select bg-dark text-light fw-bold rounded-0 w-auto"
                  aria-label="Default select example"
                  defaultValue="1"
                >
                  <option value="1">English</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3 py-4 border-bottom border-secondary">
                <h2 className="text-secondary fs-4 mb-3">Maturity Settings:</h2>
                <button className="btn btn-secondary mb-3 rounded-0"> ALL MATURITY RATINGS</button>
                <p className="mb-3 fs-5">
                  Show titles of <span className="text-white">all maturity ratings</span> for this profile.
                </p>
                <button className="btn btn-outline-secondary rounded-0">EDIT</button>
              </div>
              <div className="mb-3 pt-4">
                <h2 className="text-secondary fs-4">Autoplay controls</h2>
                <div className="form-check checkbox-lg mb-2">
                  <input
                    className="form-check-input rounded-0 bg-dark border border-secondary me-3"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Autoplay next episode in a series on all devices
                  </label>
                </div>
                <div className="form-check checkbox-lg mb-2">
                  <input
                    className="form-check-input rounded-0 bg-dark border border-secondary me-3"
                    type="checkbox"
                    value=""
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Autoplay previews while browsing on all device
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="border-bottom border-secondary mb-4"></div>
        <div className="nav">
          <button className="btn-lg btn btn-light me-3 rounded-0">SAVE</button>
          <button className="btn-lg btn btn-outline-secondary me-3 rounded-0">CANCEL</button>
          <button className="btn-lg btn btn-outline-secondary rounded-0">DELETE PROFILE</button>
        </div>
      </div>
    </div>
  </main>
);

export default ProfileMain;
