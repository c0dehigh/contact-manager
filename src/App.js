import {useState} from "react";
import {AddContact,EditContact,ViewContact,Contacts,Contact,Navbar} from './components'
import {Routes,Route, Navigate} from "react-router-dom"
import './App.css';

const App = ()=> {
    const [loading,setLoading] = useState(false)
    const [getcontacts,setContacts] = useState([])
  return (
    <div className="App">
       <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="/contacts"/>} />
            <Route path="/contacts" element={<Contacts contacts={getcontacts} loading={loading}/>} />
            <Route path="/contacts/add" element={<AddContact/>}/>
            <Route path="/contacts/:contactId" element={<ViewContact/>} />
            <Route path="/contacts/edit/:contactId" element={<EditContact/>}  />
        </Routes>
    </div>
  );
}

export default App;
