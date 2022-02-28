import React from 'react';
import "./newuser.css"

const NewUser = () => {
  return <div className='newuser'>
      <h1 className="newusertitle">New User</h1>
      <form className="newuserform">
          <div className="newuseritem">
              <label>Username</label>
              <input type="text" placeholder='john' />
          </div>
          <div className="newuseritem">
              <label>Full name</label>
              <input type="text" placeholder='John Smith' />
          </div>
          <div className="newuseritem">
              <label>Email</label>
              <input type="text" placeholder='john@mail.com' />
          </div>
          <div className="newuseritem">
              <label>Password</label>
              <input type="password" placeholder='password' />
          </div>
          <div className="newuseritem">
              <label>Phone</label>
              <input type="text" placeholder='+1 123 123 1234' />
          </div>
          <div className="newuseritem">
              <label>Location</label>
              <input type="text" placeholder='NY | USA' />
          </div>
          <div className="newuseritem">
              <label>Gender</label>
              <div className="newusergender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="others" value="others" />
                <label for="others">Others</label>
              </div>
          </div>
          <div className="newuseritem">
              <label>Active</label>
              <select name="active" id="active" className="newuserselect">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
          </div>
          <button className="newuserbutton">Create</button>
      </form>
  </div>
};

export default NewUser;
