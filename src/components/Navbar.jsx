import Searchcontact from "./contact/Searchcontact";
import {Purple , Background} from '../helpers/colors'
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: Background }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <i className="fas fa-id-badge " style={{ color: Purple , paddingLeft: '15%'}}>
            </i>
            <span style={{ color: Purple }}> مدیریت مخاطبین</span>
          </div>
          <div className="col">
            <Searchcontact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
