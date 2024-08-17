export const Topheader = () =>{
    return(
        <div className="pbmit-pre-header-wrapper  pbmit-bg-color-transparent pbmit-color-blackish">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="pbmit-pre-header-left">
              <ul className=" pbmit-social-links">
                <li className="pbmit-social-li pbmit-social-facebook ">
                  <a title="Facebook" href="#" target="_blank">
                    <span>
                      <i className="pbmit-base-icon-facebook-f" />
                    </span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-twitter ">
                  <a title="Twitter" href="#" target="_blank">
                    <span>
                      <i className="pbmit-base-icon-twitter-2" />
                    </span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-linkedin ">
                  <a title="LinkedIn" href="#" target="_blank">
                    <span>
                      <i className="pbmit-base-icon-linkedin-in" />
                    </span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-instagram ">
                  <a title="Instagram" href="#" target="_blank">
                    <span>
                      <i className="pbmit-base-icon-instagram" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* .pbmit-pre-header-left */}
            <div className="pbmit-pre-header-right">
              <ul className="pbmit-contact-info">
                <li>
                  <i className="pbmit-base-icon-mail-alt" /> info@domain.com
                </li>
                <li>
                  <i className=" pbmit-base-icon-location-dot-solid" />
                  250 Main Street, 2nd Floor. USA
                </li>
                <li>
                  <i className=" pbmit-base-icon-phone-volume-solid-1" />
                  +89(0) 1256 2156
                </li>
              </ul>{" "}
            </div>
            {/* .pbmit-pre-header-right */}
          </div>
          {/* .justify-content-between */}
        </div>
        {/* .container */}
      </div>
    )
}