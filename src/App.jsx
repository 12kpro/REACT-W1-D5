import "./style.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap";
import SiteNav from "./components/SiteNav";
import HomeMain from "./components/HomeMain";
import SiteFooter from "./components/SiteFooter";
import ProfileMain from "./components/ProfileMain";
import SettingsMain from "./components/SettingsMain";

/* home page
    <div className="text-bg-dark">
      <SiteNav showLink={true} secondaryBar={true} />
      <HomeMain />
      <SiteFooter />
    </div>
*/
/* Profile page
    <div className="text-bg-dark">
      <SiteNav />
      <ProfileMain />
    </div>
*/
/* Settings page
    <>
      <SiteNav showLink={true}/>
      <SettingsMain />
    </>
*/
function App() {
  return (
    <div className="text-bg-dark">
      <SiteNav showLink={true} secondaryBar={true} />
      <HomeMain />
      <SiteFooter />
    </div>
  );
}

export default App;
