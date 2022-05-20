import {Pink} from "../../helpers/colors";
import Contact from "./Contact";

const Contacts = () => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: Pink }}>
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          {/*contact*/}
          <Contact/>
        </div>
      </section>
    </>
  );
};

export default Contacts;
