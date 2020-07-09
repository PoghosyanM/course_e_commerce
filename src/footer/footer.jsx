import React from 'react'
import FollowContact  from './followContact/followContact'
import Partner  from './partner/partner'
import Paymethods  from './paymethods/paymethods'


class Footer extends React.Component {
    render() {
        return (
            <div>
                <FollowContact />
                <Partner/>
                <Paymethods/>
            </div>
        )
    }
}

export default Footer
