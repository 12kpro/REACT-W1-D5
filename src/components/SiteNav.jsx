import avatar from "../assets/img/avatar.png";
import logo from "../assets/img/netflix_logo.png";
const SiteNav = (props) => (
  <header className="pb-3 ">
    <nav className="navbar navbar-expand-lg text-bg-dark">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          <img src={logo} height="40px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 link-light">
            <li className="nav-item">
              <a className="nav-link link-secondary" aria-current="page" href="index.html">
                Home
              </a>
            </li>
            {props.showLink && (
              <>
                <li className="nav-item">
                  <a className="nav-link link-secondary" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-secondary" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item" href="#">
                  <a className="nav-link link-secondary">Recently Added</a>
                </li>
                <li className="nav-item" href="#">
                  <a className="nav-link link-secondary">My List</a>
                </li>
              </>
            )}
          </ul>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link link-secondary" href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary fw-bold" href="#">
                KIDS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" href="#">
                <i className="fa-sharp fa-solid fa-bell"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle link-secondary pe-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="img-fluid" src={avatar} height="20px" width="20px" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="profile.html">
                    Profilo
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="settings.html">
                    Impostazioni
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {props.secondaryBar && (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid px-5">
          <form className="d-flex" role="search">
            <h2 className="flex-shrink-0 me-5">TV Show</h2>
            <select className="form-select bg-dark text-secondary rounded-0" defaultValue="0">
              <option value="0">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </form>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-secondary rounded-0">
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
            <button type="button" className="btn btn-outline-secondary rounded-0">
              <i className="fa-solid fa-table-cells-large"></i>
            </button>
          </div>
        </div>
      </nav>
    )}
  </header>
);

export default SiteNav;
