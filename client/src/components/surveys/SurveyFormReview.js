/* SurveyFormReview shows users their forms inputs for review */
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { stat } from 'fs';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFileds = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5> Please confirm your entries</h5>
            {reviewFileds}
            <button className="yellow white-text darken-3 btn-flat" onClick={onCancel}>
                Back
            </button>
            <button onClick={() => submitSurvey(formValues)} className="green white-text btn-flat right">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default (connect)(mapStateToProps, actions)(SurveyFormReview);