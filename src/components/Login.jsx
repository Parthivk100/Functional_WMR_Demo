import {useState} from 'react'
import CreateProfile from './CreateProfile'

const Login = () => {
    const [next, setNext] = useState(false)

    const onCreateProfileClick = () => {
        setNext(true)
    }
    
    if (!next) {
        return (
            <div>
                <div className='person'>
                    <h4>Where's My Roommate</h4>
                    <button type="button" className = 'btn' style = {{margin: '1rem'}} onClick={() => alert('Login functionality not implemented yet')}>
                        Login
                    </button>
                    <button type="button" className = 'btn' style = {{margin: '1rem'}} onClick={onCreateProfileClick}>
                        Create new Profile
                    </button>
                </div>
                
            </div>
        );
    }

    return <CreateProfile/>

}

export default Login