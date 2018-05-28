import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const mapReduxStateToProps = (reduxState) => ({ reduxState });

class Supported extends Component {

    //Update supported feedback to redux store
    handleFeedbackChange = (event) => {
        const action = { type: 'SET_SUPPORTED', payload: event.target.value };
        this.props.dispatch(action);
    }


    render() {
        console.log('supported', this.props.reduxState);
        return (
            <div>
                <h2>3 of 4 pages</h2>

                <div>
                    <div className="card-design">
                        <p>How well are you being supported?</p>
                        <input type="number" placeholder="Rating" onChange={this.handleFeedbackChange} />
                    </div>
                    <br />
                    <Link to='/comments'>Next</Link>
                    <div>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Supported);