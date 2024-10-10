import {useState} from 'react'
import ReviewProfile from './ReviewProfile';

function useProfile() {
    const [profile, setProfile] = useState({
      fullName: '',
      age: '',
      college: '',
      major: '',
      year: '',
      bedTime: '',
      wakeUpTime: '',
      guests: '',
      cleaning: '',
      studyPlace: '',
      studyStyle: '',
      smoke: '',
      alcohol: '',
      dietary: '',
      dietaryOther: '',
      allergies: '',
      img: '',
    })
  
    const updateProfile = (field, value) => {
      setProfile(prevProfile => ({
        ...prevProfile,
        [field]: value,
      }));
    };
  
    return {profile , updateProfile}
  
}
  
function CreateProfile() {
    const [next, setNext] = useState(false)
    const {profile, updateProfile} = useProfile();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateProfile(name, value)
    };

    const handleImage = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            // Create a URL for the selected file
            const file = files[0];
            const fileURL = URL.createObjectURL(file);
            console.log(fileURL)
            updateProfile(name, fileURL);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNext(true)
    }
    if (!next) {
        return (
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <h4>Create Profile</h4>
                    <div className='form-row'>
                        <label htmlFor='fullName' className='form-label'>
                            Full Name
                        </label>
                        <input type='text' className='form-input' id='fullName' value = {profile.fullName} onChange = {handleChange} name = "fullName"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='age' className='form-label'>
                            Age
                        </label>
                        <input type='text' className='form-input' id='age' value = {profile.age} onChange = {handleChange} name = "age"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='college' className='form-label'>
                            College
                        </label>
                        <input type='text' className='form-input' id='college' value = {profile.college} onChange = {handleChange} name = "college"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='major' className='form-label'>
                            Major
                        </label>
                        <input type='text' className='form-input' id='major' value = {profile.major} onChange = {handleChange} name = "major"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='year' className='form-label'>
                            Year
                        </label>
                        <input type='text' className='form-input' id='year' value = {profile.year} onChange = {handleChange} name = "year"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='bedTime' className='form-label'>
                            Typical Bed Time
                        </label>
                        <input type='text' className='form-input' id='bedTime' value = {profile.bedTime} onChange = {handleChange} name = "bedTime"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='wakeUpTime' className='form-label'>
                            Typical Wake Up Time
                        </label>
                        <input type='text' className='form-input' id='wakeUpTime' value = {profile.wakeUpTime} onChange = {handleChange} name = "wakeUpTime"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='guests' className='form-label'>
                            Preferred Guest Policy
                        </label>
                        <input type='text' className='form-input' id='guests' value = {profile.guests} onChange = {handleChange} name = "guests"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='cleaning' className='form-label'>
                            How would you describe your cleanliness
                        </label>
                        <input type='text' className='form-input' id='cleaning' value = {profile.cleaning} onChange = {handleChange} name = "cleaning"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='studyPlace' className='form-label'>
                            Would you describe your dorm as a study place?
                        </label>
                        <input type='text' className='form-input' id='studyPlace' value = {profile.studyPlace} onChange = {handleChange} name = "studyPlace"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='studyStyle' className='form-label'>
                            What's your preferred study style?
                        </label>
                        <input type='text' className='form-input' id='studyStyle' value = {profile.studyStyle} onChange = {handleChange} name = "studyStyle"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='smoke' className='form-label'>
                            Do you tolerate smoking?
                        </label>
                        <input type='text' className='form-input' id='smoke' value = {profile.smoke} onChange = {handleChange} name = "smoke"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='alcohol' className='form-label'>
                            Do you tolerate alcohol?
                        </label>
                        <input type='text' className='form-input' id='alcohol' value = {profile.alcohol} onChange = {handleChange} name = "alcohol"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='dietary' className='form-label'>
                            Do you have dietary restrictions?
                        </label>
                        <input type='text' className='form-input' id='dietary' value = {profile.dietary} onChange = {handleChange} name = "dietary"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='dietaryOther' className='form-label'>
                            If you wish to specify your deitary concerns further please enter them below
                        </label>
                        <input type='text' className='form-input' id='dietaryOther' value = {profile.dietaryOther} onChange = {handleChange} name = "dietaryOther"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='allergies' className='form-label'>
                            Do you have any allergies?
                        </label>
                        <input type='text' className='form-input' id='allergies' value = {profile.allergies} onChange = {handleChange} name = "allergies"/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='img' className='form-label'>
                            Please upload an image of yourself.
                        </label>
                        <input type='file' className='form-input' id='img' onChange = {handleImage} name = "img"/>
                    </div>
                    <button type='submit' className='btn btn-block'>
                    submit
                    </button>
                </form>
            </div>
        );
    }
    return <ReviewProfile profile = {profile}/>
}

export default CreateProfile
