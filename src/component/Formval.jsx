import {useState} from 'react'
import './Formval.css'

const intialstate ={
    firstname:'',
    Lastname:'',
    phonenumber:'',
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    time:'',
    date:'',
    gender:'',
    
};
const Gender=[
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
]

const Formval = () => { 
    const [formdata, setformdata]= useState(intialstate);
    // de-structuring intialsate
    const {firstname, Lastname, phonenumber, username, email, password, confirmpassword, time, date, gender} = formdata;

    const[errors, seterrors] = useState({})


    const validateform =() =>{
        let newerrors = {};
        // validate firstname
        if(!firstname){
            newerrors.firstname ='first name is required'
        }
        // validate lastname
        if(!Lastname){
            newerrors.Lastname ='last name is required'
        }
        // validate number
        if(!phonenumber){
            newerrors.phonenumber ='phone number is required'
        }else if (phonenumber.length <11){
            newerrors.phonenumber = 'incomplete phone number'
        }

        // validate username
        if (!username){
            newerrors.username = 'username is required'
        }
        // validate date
        if (!date){
            newerrors.date = 'date is required'
        }
        // validate time
        if (!time){
            newerrors.time = 'time is required'
        }
        // validate gender
        if (!gender){
            newerrors.gender = 'gender is required'
        }
        // validate email
        if(!email){
            newerrors.email= 'email is required'
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newerrors.email = 'email is required'

        }
        // validate password
        if(!password){
            newerrors.password ='password is required'
        }else if (password.length <6){
            newerrors.password = 'password must be  at least 6 character long'
        }
        // validate confirmpassword
        if (!confirmpassword){
            newerrors.confirmpassword = 'confirm password is required'

        }else if(confirmpassword!==password){
            newerrors.confirmpassword=' password does not match '
        }
   
    seterrors(newerrors);
    // return true if they are no error
    return Object.keys(newerrors).length ===0;

}
const handleSubmit =(e)=> {
    e.preventDefault();
    if(validateform()){
        // preform form submission
        console.log('form submitted:', formdata);
        setformdata(intialstate);
    }
}
const handlechange = (e)=>{
    setformdata({...formdata, [e.target.name]: e.target.value});
};


  return (
    <main>
   <form className="form" onSubmit={handleSubmit}>
     <div className='form-group'>
        <label>Firstname:</label>
        <input type="text" name='firstname' value={firstname} onChange={handlechange}/>
        {errors.firstname && <span className='error'>{errors.firstname}</span>}
        
    </div>
     <div className='form-group'>
        <label>Lastname:</label>
        <input type="text" name='Lastname' value={Lastname} onChange={handlechange}/>
        {errors.Lastname && <span className='error'>{errors.Lastname}</span>}
        
    </div>
  
    <div className='form-group'>
        <label>Phone-number:</label>
        <input type="number" name='phonenumber' value={phonenumber} onChange={handlechange}/>
        {errors.phonenumber && <span className='error'>{errors.phonenumber}</span>}
        
    </div>
    

    <div className='form-group'>
        <label>Username:</label>
        <input type="text" name='username' value={username} onChange={handlechange}/>
        {errors.username && <span className='error'>{errors.username}</span>}
        
    </div>
    <div className='form-group'>
        <label>Date of Birth:</label><br />
        <input type="date"  name='date' value={ date} onChange={handlechange}/> 
        {errors.date && <span className='error'>{errors.date}</span>}
    </div>
    <div className='form-group'>
        <label>Time:</label><br />
        <input type="time"  name='time' value={time} onChange={handlechange}/> 
        {errors.time && <span className='error'>{errors.time}</span>}
    </div> 
    <div className='form-group'>
        <select value={gender} name='gender' onChange={handlechange}>
            <option value=""disabled> --choose gender-- </option>
            {Gender.map((e)=>{
                return(
                    <option key={e.id} value={e.name}>
                        {e.name}
                    </option>
                )
            })}
        </select>

    </div>
    <div className='form-group'>
        <label>Email:</label>
        <input type="email" name='email' value={email} onChange={handlechange} />
        {errors.email && <span className='error'>{errors.email}</span>}
    </div>
    <div className='form-group'>
        <label>Password:</label>
        <input type="password" name='password' value={password} onChange={handlechange}/>
        {errors.password && <span className='error'>{errors.password}</span>}
    </div>
    <div className='form-group'>
        <label>Confirm-password:</label>
        <input type="password" name='confirmpassword' value={confirmpassword} onChange={handlechange}/>
        {errors.confirmpassword && <span className='error'>{errors.confirmpassword}</span>}
    </div>

   

    <button type='submit'>Submit</button>

   </form>
   </main>
  )
}


export default Formval