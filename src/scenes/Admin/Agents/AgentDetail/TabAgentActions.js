import React from 'react';
import { } from 'react-router-dom';

class TabAgentActions extends React.Component {
  render() {
    return (
      <div data-test="Actions" className="mt-6">
        <div className="card">

          <h5 className="card-header">Edit Agent Matching</h5>

          <div className="card-body">

            <div>

              <div data-test="SimpleForm" className="">

                <div className="row">
                  <legend className="col-form-label col-sm-3 pt-0">Agent Matching</legend>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label" for="enabled">
                          <input type="checkbox" className="form-check-input" name="enabled" value="true" />
                          Enabled
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <legend className="col-form-label col-sm-3 pt-0">Assigned Zip Codes</legend>
                  <div className="col-sm-9">
                    <textarea className="form-control" name="zipCodes" rows="3" placeholder="Enter zip codes...">
                      02108, 02109, 02110, 02111, 02113, 02114, 02115, 02116, 02118, 02119, 02120, 02121, 02122, 02124, 02125, 02126, 02127, 02128, 02129, 02130, 02131, 02199, 02203, 02210, 02215
                    </textarea>
                  </div>
                </div>
              </div>

            </div>
            <hr />
            <button className="btn btn-success">Save Updates</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TabAgentActions;
