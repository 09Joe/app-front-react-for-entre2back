import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './assets/hooks/useCrud'
import FormUser from './assets/components/FormUser'
import UserCard from './assets/components/UserCard'

function App() {

  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

  const BASEURL = "https://user-crud-ent-2.onrender.com"; // backend desplegada en rend
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(BASEURL)

  useEffect(() => {
    getUsers('/usercrud/')
  }, [])

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
   <div className='app'>
    <header className='app__header'>
    <h1 className='app__tittle'>User Crud</h1>
    <button onClick={handleOpenForm} className='form__btn'> Create New User</button>
    </header>
    <FormUser 
      createUser={createUser}
      userEdit={userEdit}
      updateUser={updateUser}
      setUserEdit={setUserEdit}
      formIsClose={formIsClose}
      setFormIsClose={setFormIsClose}
    />
    <div className='user-container'>
       {
         users?.map(user => (
          <UserCard 
           key={user.id}
           user={user}
           deleteUser={deleteUser}
           setUserEdit={setUserEdit}
           handleOpenForm={handleOpenForm}
          />
         ))
       }
    </div>
   </div>
  )
}

export default App
