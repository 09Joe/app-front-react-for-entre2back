import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css';

const FormUser = ({createUser, userEdit, updateUser, setUserEdit, formIsClose, setFormIsClose}) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(userEdit)
    }, [userEdit])



    const submit = data => {
       if(userEdit) {
        // Update
        updateUser('/usercrud/', userEdit.id, data)
        setUserEdit()
       } else {
        // Create
        createUser('/usercrud/', data)
       }
       setFormIsClose(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
          })
    }

    const handleFormClose = () => {
      setFormIsClose(true)
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      })
      setUserEdit()
    }

  return (
    <div className={`form-container ${formIsClose && 'form__close'}`}> 
    <form className='form' onSubmit={handleSubmit(submit)}>
      <header className="form___header">
        <h2 className="form__title">User Form</h2>
        <div onClick={handleFormClose} className="form__exit">X</div>
      </header>
      <label className="form__label">
        <span className="form__field">Email</span>
        <input className="form__field__value" {...register('email')} type="email" />
      </label>
      <label className="form__label">
        <span className="form__field">Password</span>
        <input className="form__field__value" {...register('password')} type="password" />
      </label>
      <label className="form__label">
        <span className="form__field">First Name</span>
        <input className="form__field__value" {...register('first_name')} type="text" />
      </label>
      <label className="form__label">
        <span className="form__field">Last name</span>
        <input className="form__field__value" {...register('last_name')} type="text" />
      </label>
      <label className="form__label">
        <span className="form__field">birthday</span>
        <input className="form__field__value" {...register('birthday')} type="date" />
      </label>
      <button className="form__btn">Submit</button>
    </form>
    </div>
  )
}

export default FormUser