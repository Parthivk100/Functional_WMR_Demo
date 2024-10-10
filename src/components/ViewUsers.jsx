import {users} from "../Data"
import {useState} from 'react'
import ViewIndividual from "./ViewIndividual"

const ViewUsers = ({profile}) => {
    const [person, setPerson] = useState({
        fullName: 'Mauricio De La Cruz',
        age: '19',
        college: 'Emory University',
        major: 'Marketing',
        year: 'Freshman',
        bedTime: '12:00 aM',
        wakeUpTime: '9:00 AM',
        guests: 'Often',
        cleaning: 'Very Clean',
        studyPlace: 'Dorm',
        studyStyle: 'Structured',
        smoke: 'No',
        alcohol: 'No',
        dietary: 'None',
        dietaryOther: '',
        allergies: 'Nuts',
        img: "https://media.licdn.com/dms/image/C5603AQHg4tdGXjEbGA/profile-displayphoto-shrink_400_400/0/1655842870090?e=1726704000&v=beta&t=SCErt189Dsw3z-6Dx-wlm9n72bhd3jeyIt6reU1jZ5Y",
    })
    const [inc, setInc] = useState(0)
    const [next, setNext] = useState(false)

    const handleClick = () => {
        setPerson(users[inc])
        setInc(inc + 1)
    }

    if (!next) {
        return(
            <div>
                <h2>Where's My Roommate</h2>
                <div className = "person">
                        <img src = {person.img} alt = {person.fullName} className='person img'/>
                        <button type = 'button' style = {{background: 'none', border: 'none', color: 'inherit', fontSize: '1.75rem'}} onClick = {() => setNext(true)}>{person.fullName}</button>
                        <h2>{person.age}</h2>
                        <h2>{person.college}</h2>
                </div>
                <button type="button" className = 'btn' style = {{margin: '1rem'}} onClick={handleClick}>Dislike</button>
                <button type="button" className = 'btn' style = {{margin: '1rem'}} onClick={handleClick}>Like</button>
            </div>
        );
    }
    return <ViewIndividual person = {person} profile = {profile}/>
}

export default ViewUsers