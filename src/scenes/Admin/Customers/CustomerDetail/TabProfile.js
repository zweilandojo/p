import React from 'react';
import { } from 'react-router-dom';

const TabProfile = () => (
  <div className="overflow-y-auto">
    <div className="flex-no-shrink">
      <div className="JsonView">
        <h2>
          Customer Profile
          <button className="btn btn-link">view json</button>
        </h2>
        <div>
          <h3 className="mt-6">
            Customer Record
          </h3>
          <table className="table table-bordered table-hover table-sm">
            <tbody>
              <tr>
                <td>id</td>
                <td>252f38b3-4d8d-4fc3-9480-69a57c493207</td>
              </tr>
              <tr>
                <td>phoneNumber</td>
                <td>+15128147286</td>
              </tr>
              <tr>
                <td>createdAt</td>
                <td>2018-11-06T14:37:24.051328Z</td>
              </tr>
              <tr>
                <td>updatedAt</td>
                <td>2018-11-06T20:00:24.854824Z</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="mt-6">Facts</h3>
          <table class="table table-bordered table-hover table-sm">
            <tbody>
              <tr>
                <td>Mls Constraint</td>
                <td>tx_actris</td>
              </tr>
              <tr>
                <td>Photo Count Constraint</td>
                <td>
                  <pre>
                    {'{ "min": 1 }'}
                  </pre>
                </td>
              </tr>
              <tr>
                <td>Listing Status Constraint</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

export default TabProfile;
