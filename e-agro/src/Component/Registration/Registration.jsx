import React from 'react'
import './registration.css';
// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import KeyIcon from "@mui/icons-material/Key";

import { Grid } from "@mui/material";

 const Registration = () => {
  return (
<div id="page">
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <Grid container>
          <Grid item xs={6}>
            <div className="inputs">
              <div className="input">
                <EmailIcon color="disabled" sx={{ margin: "0px 30px " }} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="inputs">
              <div className="input">
                <LockIcon color="disabled" sx={{ margin: "0px 30px " }} />
                <select id="sQue" name="securityQue">
                  <option value="securityQue" selected>Select Security Question</option>
                  <option value="nickname">What is your nickname?</option>
                  <option value="how">How are you?</option>
                </select>
              </div>
            </div>

            <div className="inputs">
              <div className="input">
                <KeyIcon color="disabled" sx={{ margin: "0px 30px " }} />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="inputs">
              <div className="input">
                <AccountCircleIcon
                  color="disabled"
                  sx={{ margin: "0px 30px " }}
                />
                
                <select id="utype" name="UserType">
                  <option value="UserType" selected>Select User Type</option>
                  <option value="user">User</option>
                  <option value="shopkeeper">Shopkeeper</option>
                </select>
              </div>
            </div>

            <div className="inputs">
              <div className="input">
                <QuestionAnswerIcon
                  color="disabled"
                  sx={{ margin: "0px 30px " }}
                />
                <input
                  type="text"
                  name="answer"
                  id="answer"
                  placeholder="Answer"
                />
              </div>
            </div>

            <div className="inputs">
              <div className="input">
                <VpnKeyIcon color="disabled" sx={{ margin: "0px 30px " }} />
                <input
                  type="password"
                  name="cpass"
                  id="cpass"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Registration;