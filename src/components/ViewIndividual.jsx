import ViewUsers from "./ViewUsers";
import {useState} from 'react'

const ViewIndividual = ({person, profile}) => {
    const [back, setBack] = useState(false)

    if (!back) {
        return (
            <div className="person">
              <img src={person.img} alt={person.fullName} className="person img" />
              <h2>{person.fullName}</h2>
              <p><strong>Age:</strong> {person.age}</p>
              <p><strong>College:</strong> {person.college}</p>
              <p><strong>Major:</strong> {person.major}</p>
              <p><strong>Year:</strong> {person.year}</p>
              <p><strong>Bed Time:</strong> {person.bedTime}</p>
              <p><strong>Wake Up Time:</strong> {person.wakeUpTime}</p>
              <p><strong>Guests:</strong> {person.guests}</p>
              <p><strong>Cleaning:</strong> {person.cleaning}</p>
              <p><strong>Study Place:</strong> {person.studyPlace}</p>
              <p><strong>Study Style:</strong> {person.studyStyle}</p>
              <p><strong>Smoke:</strong> {person.smoke}</p>
              <p><strong>Alcohol:</strong> {person.alcohol}</p>
              <p><strong>Dietary:</strong> {person.dietary}</p>
              <p><strong>Dietary Other:</strong> {person.dietaryOther}</p>
              <p><strong>Allergies:</strong> {person.allergies}</p>
              <button type = 'button' className="btn" onClick = {() => setBack(true)}>See other Profiles</button>
            </div>
          );
    }
    return <ViewUsers profile = {profile}/>
}

export default ViewIndividual