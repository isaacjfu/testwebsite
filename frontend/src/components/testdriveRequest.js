import '../App.css';

const TestDriveRequest = ( {} ) => {

  return (
    <form class="request-form">
        <h1>Select your preferred dealership</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.</p>
        <div class="request-form-group">
            <input type="text" class= 'lined-input'  id="dealership" placeholder='*Select your dealership' required />
        </div>
        <h1>Your personal details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.</p>
        <div class="request-form-group">
            <input type="text" class= 'lined-input' id="fname" placeholder='*First Name' required />
            <input type="text" class= 'lined-input' id="lname" placeholder='*Last Name' required />
            <input type="text" class= 'lined-input' id="phone" placeholder='*Mobile/Cell Number' required />
            <input type="text" class= 'lined-input' id="email" placeholder='*Email' required />
            <input type="text" class= 'lined-input' id="city" placeholder='*City' required />
            <input type="text" class= 'lined-input' id="location" placeholder='*Location' required />
        </div>
        <h1>Contact preferences</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.</p>
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