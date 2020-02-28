import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Opinion Poller"
                description="Survey Credits:\n5 survey credits for $5.00."
                allowRememberMe={false}
                email={false}
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
        )
    }
}


export default connect(null, actions)(Payments);