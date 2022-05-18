import Searchcontact from "./contact/Searchcontact";

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <i className="fas fa-id-badge">
                            برنامه مدیریت  {" "}
                            <span style={{color:"purple"}}>مخاطبین</span>
                        </i>
                    </div>
                    <div className="col">
                     <Searchcontact/>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar