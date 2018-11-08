import React from 'react';
import { } from 'react-router-dom';

const FormSendMission = () => (
  <form className="form">
    <fieldset className="form-group">
      <div className="row">
        <legend className="col-form-label col-sm-3 pt-0">Which Mission?</legend>
        <div className="col-sm-9">
          <div className="form-check">
            <label className="form-check-label" labelFor="gridCheck1">
              <input className="form-check-input" name="mission" type="radio" id="gridCheck1" />
              Versus
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" labelFor="gridCheck1">
              <input className="form-check-input" name="mission" type="radio" id="gridCheck1" />
              Basic Preferences
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" labelFor="gridCheck1">
              <input className="form-check-input" name="mission" type="radio" id="gridCheck1" />
              Area Search
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" labelFor="gridCheck1">
              <input className="form-check-input" name="mission" type="radio" id="gridCheck1" />
              Kitchen Style
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" labelFor="gridCheck1">
              <input className="form-check-input" name="mission" type="radio" id="gridCheck1" />
              Commute Search
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" labelFor="gridCheck1">
              <input className="form-check-input" name="mission" type="radio" id="gridCheck1" />
              Agent Request
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" labelFor="gridCheck1">
              <input className="form-check-input" name="mission" type="radio" id="gridCheck1" />
              Mortgage Handoff
            </label>
          </div>
        </div>
      </div>
    </fieldset>

    <div className="form-group row">
      <label labelFor="optionalMsg" className="col-sm-3 col-form-label">Message</label>
      <div className="col-sm-9">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Optional"></textarea>
      </div>
    </div>
  </form>
)

export default FormSendMission;
