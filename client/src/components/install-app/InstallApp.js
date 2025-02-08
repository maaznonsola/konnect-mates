import React from "react";
import {Link} from "react-router-dom";

const InstallApp = () => {
  return (
    <div className="container">
      <Link className="btn btn-light my-1" to="/">
        Go Back
      </Link>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-3 mb-4 h1">Install Konnect-Mates</h1>

              <hr />

              {/* <h2 className='text-center'>Install as an Application</h2> */}
              <br></br>
              <div className="row">
                <div className="col-4">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a
                      className="list-group-item list-group-item-action active"
                      id="list-home-list"
                      data-toggle="list"
                      href="#list-home"
                      role="tab"
                      aria-controls="home"
                    >
                      Chrome
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-profile-list"
                      data-toggle="list"
                      href="#list-profile"
                      role="tab"
                      aria-controls="profile"
                    >
                      Firefox
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-messages-list"
                      data-toggle="list"
                      href="#list-messages"
                      role="tab"
                      aria-controls="messages"
                    >
                      Android
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-settings-list"
                      data-toggle="list"
                      href="#list-settings"
                      role="tab"
                      aria-controls="settings"
                    >
                      Safari
                    </a>
                  </div>
                </div>
                <div className="col-8">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="list-home"
                      role="tabpanel"
                      aria-labelledby="list-home-list"
                    >
                      <h3 className="h3">Windows, Linux & Mac</h3>
                      <hr></hr>
                      <p>
                        1. Click on the <i className="fas fa-ellipsis-v"></i> on
                        the top right corner of window
                      </p>
                      <p>2. Click on "More tools"</p>
                      <p>3. Click on "Create shortcut..."</p>
                      <p>4. It will ask to create shortcut ?</p>
                      <p>5. Without any change click on "Create" button</p>
                      <p>
                        6. Now go to the desktop and find "Konnect-Mates" app
                      </p>
                      <p>7. Launch "Konnect-Mates"</p>
                      <p>
                        8. Done <i className="far fa-grin-wink"></i>
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="list-profile"
                      role="tabpanel"
                      aria-labelledby="list-profile-list"
                    >
                      <h3 className="h3">Windows, Linux & Mac</h3>
                      <hr></hr>
                      <p>1. Long click on the url of "Konnect-Mates" website</p>
                      <p>2. Drag and Drop on Desktop</p>
                      <p>3. Find "Konnect-Mates" on Desktop</p>
                      <p>4. Launch "Konnect-Mates"</p>
                      <p>
                        5. Done <i className="far fa-grin-wink"></i>
                      </p>
                      <p>
                        Didn't got ?{" "}
                        <a
                          href="https://support.mozilla.org/en-US/kb/create-desktop-shortcut-website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          check this out
                        </a>
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="list-messages"
                      role="tabpanel"
                      aria-labelledby="list-messages-list"
                    >
                      <h3 className="h3">Chrome & Firefox</h3>
                      <hr></hr>
                      <p>
                        1. Click on the <i className="fas fa-ellipsis-v"></i> on
                        the top right corner of your phone.
                      </p>
                      <p>2. Click on "Add to Home screen"</p>
                      <p>
                        3. Without any change click on "Add" button and then
                        "Add automatically"
                      </p>
                      <p>
                        4. Now go to your home screen and find "Konnect-Mates"
                        app
                      </p>
                      <p>5. Launch "Konnect-Mates"</p>
                      <p>
                        6. Done <i className="far fa-grin-wink"></i>
                      </p>
                      <br></br>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="list-settings"
                      role="tabpanel"
                      aria-labelledby="list-settings-list"
                    >
                      <h3 className="h3">iPhone & iPad</h3>
                      <hr></hr>
                      <p>
                        1. Click the "Send To" (upward-pointing arrow) icon
                        along the bottom of the screen then a menu flys up from
                        the bottom of the screen
                      </p>
                      <p>
                        2. Swipe up on the menu to expand it, and then click
                        "Add to Home Screen"
                      </p>
                      <p>
                        3. Click "Add" without any changes. Safari will close
                        and you'll be taken to your iPhone or iPad home screen,
                        where the shortcut icon has been added
                      </p>
                      <p>4. Launch "Konnect-Mates"</p>
                      <p>
                        5. Done <i className="far fa-grin-wink"></i>
                      </p>
                      <br></br>
                      <h3 className="h3">Mac</h3>
                      <hr></hr>
                      <p>1. Long click on the url of "Konnect-Mates" website</p>
                      <p>2. Drag and Drop on Desktop</p>
                      <p>3. Find "Konnect-Mates" on Desktop</p>
                      <p>4. Launch "Konnect-Mates"</p>
                      <p>
                        5. Done <i className="far fa-grin-wink"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
