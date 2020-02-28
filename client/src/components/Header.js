import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Login with Google</a></li>;
            default: 
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3">Credits: {this.props.auth.credits}</li>,
                    <li key="2"><a href='/auth/logout'>Logout</a></li>
                ];
        }
    }

    render() {
        console.log(this.props.auth);
        return(
            <nav>
                <div className="nav-wrapper brown lighten-4">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                      className="left brand-logo"
                    >
                        Opinion Poller
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);