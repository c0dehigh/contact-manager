import {Purple , Comment} from "../../helpers/colors";


const Searchcontact = () => {
    return(
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" id="basic-addon1" style={{backgroundColor: Purple}}>
                <i className="fas fa-search" style={{cursor: "pointer"}}></i>
            </span>
            <input type="text" dir="rtl" style={{backgroundColor: Comment, borderColor: Purple}} className="form-control" placeholder="جستجوی مخاطبین" aria-describedby="basic-addon1" />
        </div>
    )
}



export  default Searchcontact