import React from 'react'
import socialLogo from './../../assets/images/sociallogo.png'
import "./followContact.scss"


class FollowContact extends React.Component {
    render() {
        return (
            <div className="footer1">
                <div>
                <span className="follow">Follow Us</span><br/>
                <div><img width="200" src= {socialLogo} alt="socialLogo" /></div>
                </div>

                <div>
                    <span className="follow">Contact Us</span><br/>
                    <div><span className="Contact">Tel: 077 77 77 77</span><br/></div>
                    <div><span className="Contact">Mail: info@CoreItLab.am</span><br/></div>
                </div>

                <div>
                   <div><span className="Contact">Menu1</span><br/></div>
                    <div><span className="Contact">Menu 2</span><br/></div>
                </div>

            </div>
        )
    }
}

export default FollowContact
