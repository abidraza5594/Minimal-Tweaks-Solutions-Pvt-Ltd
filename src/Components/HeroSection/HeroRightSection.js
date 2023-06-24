import React,{useState} from 'react'
import "./heroright.css"

const HeroRightSection = () => {
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [isProfessor, setIsProfessor] = useState(false);
  const [city, setCity] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
    // You can access the form values using the state variables
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Country Code:', countryCode);
    console.log('Phone Number:', phoneNumber);
    console.log('Is Student:', isStudent);
    console.log('Is Professor:', isProfessor);
    console.log('City:', city);
    console.log('Accept Terms:', acceptTerms);
  };
  
    return (
        <>
        <div className='herosection__right'>
            <div className="right_header">
                <h2>Feuture Proof Your</h2>
                <h2>Finance Career</h2>
            </div>

            <div>
                <p>Unlock your potentail and take the first step toword</p>
                <p>succes with world class mentor Mr irfat in our</p>
                <p>Upcoming CMA USA live webinar</p>
                <p>12-02-2023  12am</p>
            </div>

            <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="countryCode">Country Code:</label>
        <input
          type="text"
          id="countryCode"
          value={countryCode}
          onChange={(event) => setCountryCode(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div>
        <label>Occupation:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isStudent}
              onChange={(event) => setIsStudent(event.target.checked)}
            />
            Student
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isProfessor}
              onChange={(event) => setIsProfessor(event.target.checked)}
            />
            Professor
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(event) => setAcceptTerms(event.target.checked)}
          />
          Accept Terms and Conditions
        </label>
      </div>
      <button type="submit">Register for Webinar</button>
    </form>

        </div>
        </>

    )
}

export default HeroRightSection