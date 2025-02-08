import React from "react";
import {Link} from "react-router-dom";

const VersionChanges = () => {
  return (
    <div className="container">
      <Link className="btn btn-light my-1" to="/">
        Go Back
      </Link>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-3 mb-4 h1">Konnect-Mates v3.5.6 Stable</h1>

              <hr />

              <h2 className="text-center">Version Changes</h2>
              <ul class="list-group">
                <h4>Version 3</h4>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.5.6 : Added Terms & Conditions and updated Register page
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.5.0 : Updated application as progressive web application
                  and fixed download pdf orientation
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.3.7 : Added feature of Install as an application and added
                  instructions for the same
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.2.4 : Fixed search profiles and github no username found
                  error solved
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.2.2 : Fixed chat and comment typing section and designed it
                  with material theme
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.2.0 : Fixed Layout and Styling of User profile section
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.1.5 : Added Comment Layout and Styling
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.1.2 : Added Group Chat Layout and Designed to look like
                  whatsapp chat
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.1.0 : Minor Update by adding User Profiles to display all
                  users in a single page{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.0.1 : Patch for wrong github username crash in user profile
                  page{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v3.0.0 : Major Update entire styling is changed with material
                  css and bootstrap{" "}
                </li>
              </ul>

              <hr></hr>
              <ul class="list-group">
                <h4>Version 2</h4>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.9.2 : Patch for redirecting logged in user to dashboard
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.8.0 : Created Dashboard page{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.4.0 : Created API fetch and added data in entire front-end
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.3.5 : Minor patch for register page{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.3.2 : Added big list of profession in create profile page{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.2.5 : Added add profile, education and experience page{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.1.9 : Patch for navbar to display guest and registered
                  login links{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.0.2 : Created first landing page of the application{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v2.0.0 : Started building front end for the application{" "}
                </li>
              </ul>
              <hr></hr>
              <ul class="list-group">
                <h4>Version 1</h4>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v1.9.9 : Added config files to connect with database
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v1.8.0 : Postman tested successfully for the http requests
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v1.6.7 : Created routes for entire application
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v1.5.8 : Created validation of input fields{" "}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v1.2.2 : Configured server file to create nodejs environment
                  with express
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v1.1.5 : Created package.json file and wrote details about the
                  application
                </li>
                <li class="list-group-item">
                  <i class="fas fa-angle-right" />
                  v1.0.0 : Started building this application from scratch with
                  npm and NodeJS{" "}
                </li>
              </ul>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionChanges;
