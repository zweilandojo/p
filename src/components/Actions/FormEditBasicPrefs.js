import React from 'react';
import { } from 'react-router-dom';

const FormEditBasicPrefs = () => (
  <form className="form">
    <fieldset className="form-group">
      <div className="row">
        <legend className="col-form-label col-sm-3 pt-0">Home Type</legend>
        <div className="col-sm-9">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" labelFor="gridCheck1">
              Homes
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" labelFor="gridCheck1">
              Townhomes
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" labelFor="gridCheck1">
              Condos
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" labelFor="gridCheck1">
              Other
            </label>
          </div>
        </div>
      </div>
    </fieldset>

    <div className="form-group row">
      <label className="col-sm-3 col-form-label">Price Min</label>
      <div className="col-sm-9">
        <select type="select" className="form-control" name="select" id="priceMin">
          <option>None</option>
          <option>$100,000</option>
          <option>$200,000</option>
          <option>$250,000</option>
          <option>$300,000</option>
          <option>$350,000</option>
          <option>$400,000</option>
          <option>$450,000</option>
          <option>$500,000</option>
          <option>$550,000</option>
          <option>$600,000</option>
          <option>$650,000</option>
          <option>$700,000</option>
          <option>$750,000</option>
          <option>$800,000</option>
          <option>$850,000</option>
        </select>
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-3 col-form-label">Price Max</label>
      <div className="col-sm-9">
        <select type="select" className="form-control" name="select" id="priceMax">
          <option>None</option>
          <option>$250,000</option>
          <option>$300,000</option>
          <option>$350,000</option>
          <option>$400,000</option>
          <option>$450,000</option>
          <option>$500,000</option>
          <option>$550,000</option>
          <option>$600,000</option>
          <option>$650,000</option>
          <option>$700,000</option>
          <option>$750,000</option>
          <option>$800,000</option>
          <option>$850,000</option>
          <option>$900,000</option>
          <option>$950,000</option>
          <option>$1,000,000</option>
          <option>$1,250,000</option>
          <option>$1,500,000</option>
          <option>$1,750,000</option>
          <option>$2,000,000</option>
          <option>None</option>
        </select>
      </div>
    </div>

    <div className="form-group row">
      <label labelFor="inputEmail3" className="col-sm-3 col-form-label">Bed</label>
      <div className="col-sm-9">
        <input type="number" className="form-control" id="inputEmail3" placeholder="1" />
      </div>
    </div>

    <div className="form-group row">
      <label labelFor="inputPassword3" className="col-sm-3 col-form-label">Bath</label>
      <div className="col-sm-9">
        <input type="number" className="form-control" id="inputPassword3" placeholder="1" />
      </div>
    </div>
  </form>
)

export default FormEditBasicPrefs;
