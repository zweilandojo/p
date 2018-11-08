import React from 'react';
import { } from 'react-router-dom';

const TabAgent = () => (
  <div className="overflow-y-auto">
    <div className="flex-no-shrink">
      <div className="JsonView">
        <h2>Agent Information</h2>
        <p>This customer does not have an assigned agent</p>
        <div>
          <h3 className="mt-6">
            Brokerage Information
            <button className="btn btn-link">view json</button>
          </h3>
          <div className="mt-6">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>External Id</th>
                  <th>Lead System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Better Homes and Gardens Metro Brokers</td>
                  <td>400019</td>
                  <td>leadrouter</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  </div>
)

export default TabAgent;
