import './styles/UserCard.css';

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {

    const handleDelete = () => {
        deleteUser('/usercrud/', user.id)
    }

    const handleEdit = () => {
        setUserEdit(user)
        handleOpenForm()
    }


// comenzar a dar clases a las etiquetas desde aqui e importar el css
  return (
    <article className='card'>
      <h2 className='card__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='container__card'>
        <li><span>Email : </span><span>{user.email}</span></li>
        <li><span>Birthday : </span><span>{user.birthday}</span></li>
      </ul>
      <button className='card__btn' onClick={handleDelete}>Delete</button>
      <button className='card__btn' onClick={handleEdit}>Edit</button>
    </article>
  )
}

export default UserCard