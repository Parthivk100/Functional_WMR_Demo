import {useState} from 'react'
import ViewUsers from './ViewUsers';

const ReviewProfile = ({profile}) => {
    const [next, setNext] = useState(false)

    if (!next) {
        return(
            <div>
                <h2>Review Profile</h2>
                <div className = "person">
                    <img src = {profile.img} alt = {profile.fullName} className='person img'/>
                    <h2>{profile.fullName}</h2>
                    <h2>{profile.age}</h2>
                    <h2>{profile.college}</h2>
                </div>
                <button type = "button" className='btn' onClick = {() => setNext(true)}>View Roommates</button>
            </div>
        );
    }
    return <ViewUsers profile = {profile}/>
    
}

export default ReviewProfile