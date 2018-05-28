import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

const mapReduxStateToProps = (reduxState) => ({ reduxState });

class ThankYou extends Component {

    //function to reset the previous feedback information
    resetFeedback = () => {
        const action = { type: 'reset_survey', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push('/')
    }

    render() {
        console.log('thank you', this.props.reduxState);
        return (
            <div>
                <h2>Thank you!</h2>


                <div>
                    <button onClick={this.resetFeedback}>Leave New Feedback</button>
                </div>

            </div>
        );
    }
}



export default connect(mapReduxStateToProps)(ThankYou);