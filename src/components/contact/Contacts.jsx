import { Pink, CurrentLine, Purple } from "../../helpers/colors";

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
          <div className="col-md-6">
            <div style={{ backgroundColor: CurrentLine }} className="card my-2">
              <div className="card-body">
                <div className="row align-items-center d-flex justify-content-around">
                  <div className="col-md-4 col-sm-4">
                    <img
                      src="https://via.placeholder.com/200"
                      alt=""
                      style={{ border: `1px solid ${Purple}` }}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
