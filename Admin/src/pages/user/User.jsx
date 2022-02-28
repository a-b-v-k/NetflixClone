import React from 'react';
import "./user.css";
import { CalendarToday, LocationOn, Mail, PermIdentity, PhoneAndroid } from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return <div className="user">
      <div className="usertitlecontainer">
          <h1 className="usertitle">Edit User</h1>
          <Link to="/newuser" className='link'>
            <button className="useraddbutton">Create</button>
          </Link>
      </div>
      <div className="usercontainer">
          <div className="usershow">
              <div className="usershowtop">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="userpic" className='usershowimg'/>
                  <div className="usershowtoptitle">
                      <span className="usershowname">Joe Rouge</span>
                      <span className="usershowtitle">Software analyst</span>
                  </div>
              </div>
              <div className="usershowbottom">
                  <span className="usershowbottitle">Account Details</span>
                  <div className="usershowinfo">
                    <PermIdentity className="usershowicon"/>
                    <span className="usershowinfotitle">joeroe69</span>
                  </div>
                  <div className="usershowinfo">
                    <CalendarToday className="usershowicon"/>
                    <span className="usershowinfotitle">11.09.2001</span>
                  </div>
                  <span className="usershowbottitle">Contact Details</span>
                  <div className="usershowinfo">
                    <PhoneAndroid className="usershowicon"/>
                    <span className="usershowinfotitle">+1 123 345 1234</span>
                  </div>
                  <div className="usershowinfo">
                    <Mail className="usershowicon"/>
                    <span className="usershowinfotitle">joeroe69@mail.com</span>
                  </div>
                  <div className="usershowinfo">
                    <LocationOn className="usershowicon"/>
                    <span className="usershowinfotitle">NY | USA</span>
                  </div>
              </div>
          </div>
          <div className="userupdate">
            <span className="userupdatetitle">Edit</span>
            <form className="userupdateform">
              <div className="userupdateleft">
                <div className="userupdateitem">
                  <label>Username</label>
                  <input type="text" placeholder='joeroe69' className='userupdateinput'/>
                </div>
                <div className="userupdateitem">
                  <label>Full name</label>
                  <input type="text" placeholder='Joe Rouge' className='userupdateinput'/>
                </div>
                <div className="userupdateitem">
                  <label>Email</label>
                  <input type="email" placeholder='joeroe69@mail.com' className='userupdateinput'/>
                </div>
                <div className="userupdateitem">
                  <label>Phone</label>
                  <input type="text" placeholder='+1 123 345 1234' className='userupdateinput'/>
                </div>
                <div className="userupdateitem">
                  <label>Address</label>
                  <input type="text" placeholder='NY | USA' className='userupdateinput'/>
                </div>
              </div>
              <div className="userupdateright">
                <div className="userupdateupload">
                  <label htmlFor="file">
                    <div className="userupdateimgcontainer">
                      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="picupload" className='userupdateimg'/>
                      <div className="userimghover">
                        <span>Change Photo</span>
                      </div>
                    </div>
                  </label>
                  <input type="file" id="file" style={{display: "none"}}/>
                </div>
                <button className="userupdatebutton">Update</button>
              </div>
            </form>
          </div>
      </div>
  </div>;
};

export default User;
