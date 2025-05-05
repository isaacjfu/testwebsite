import '../App.css';

const TestDriveRequest = ( {} ) => {
    const text = {
        dealership: {
            title: 'Select your preferred dealership',
            content: 'Search for your preferred location'
        },
        details: {
            title: 'Your personal details',
            content: 'Please provide your contact details and some information about yourself'
        },
        preferences: {
            title: 'Contact preferences',
            content: 'Let us know how you would like us to reach out.'
        }
    }
  return (
    <form class="request-form">
        <h2>{text.dealership.title}</h2>
        <p>{text.dealership.content}.</p>
        <div class="request-form-group">
            <input type="text" class= 'lined-input'  id="dealership" placeholder='*Select your dealership' required />
        </div>
        <h2>{text.details.title}</h2>
        <p>{text.details.content}</p>
        <div class="request-form-group">
            <input type="text" class= 'lined-input' id="fname" placeholder='*First Name' required />
            <input type="text" class= 'lined-input' id="lname" placeholder='*Last Name' required />
            <input type="text" class= 'lined-input' id="phone" placeholder='*Mobile/Cell Number' required />
            <input type="text" class= 'lined-input' id="email" placeholder='*Email' required />
            <input type="text" class= 'lined-input' id="city" placeholder='*City' required />
            <input type="text" class= 'lined-input' id="location" placeholder='*Location' required />
        </div>
        <h2>{text.preferences.title}</h2>
        <p>{text.preferences.content}</p>
        <div class="request-form-radio-group">
            <div class = 'request-form-radio-group-card'>
                <p>Email</p>
                <div class = 'request-form-radio-group-card-radio'>
                    <label class = 'request-form-radio-group-card-label'>
                    <input type="radio" name="email" value="yes" />
                    Yes
                    </label>
                    <label class = 'request-form-radio-group-card-label'>
                    <input type="radio" name="email" value="no" />
                    No
                    </label> 
                </div>
            </div>
        <div class = 'request-form-radio-group-card'>
            <p>Telephone</p>
            <div class = 'request-form-radio-group-card-radio'>
                <label class = 'request-form-radio-group-card-label'>
                <input type="radio" name="telephone" value="yes" />
                    Yes
                </label>
                <label class = 'request-form-radio-group-card-label'>
                <input type="radio" name="telephone" value="no" />
                    No
                </label> 
            </div>
        </div>
        <div class = 'request-form-radio-group-card'>
            <p>SMS</p>
            <div class = 'request-form-radio-group-card-radio'>
                <label class = 'request-form-radio-group-card-label'>
                <input type="radio" name="text" value="yes" />
                    Yes
                </label>
                <label class = 'request-form-radio-group-card-label'>
                <input type="radio" name="text" value="no" />
                    No
                </label> 
            </div>
            </div>
        </div>
        <button type="submit">Submit</button>
    </form>

  )

}

export default TestDriveRequest