const Searchcontact = () => {
    return(
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" id="basic-addon1" style={{backgroundColor: "purple"}}>
                <i className="fas fa-search" style={{cursor: "pointer"}}></i>
            </span>
            <input type="text" dir="rtl" style={{backgroundColor: "gray", borderColor: "purple"}} className="form-control" placeholder="search" aria-describedby="basic-addon1" />
        </div>
    )
}



export  default Searchcontact