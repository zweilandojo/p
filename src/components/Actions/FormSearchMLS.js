import React from 'react';
import { } from 'react-router-dom';

const FormSearchMLS = () => (
  <div className="">
    <p>Search by MLS Id or Address below. For more sophisticated searching, use our <a href="https://beta-kibana.ojointernal.com/app/kibana" target="_blank" rel="noopener">kibana client</a>.</p>
    <form className="form">
      <div className="form-group">
        <input type="search" className="form-control" id="searchMLS" aria-describedby="Search MLS" placeholder="Search by MLS ID or Address..." />
      </div>
    </form>
    <div>
      <div className="list-reset overflow-y-auto">
        <div className="card mb-3 max-w-sm overflow-hidden">
          <img
            className="card-img-top"
            src="http://tx-actris.photos.mlsfinder.com/photos/9/1/7/1/8/3/9/9171839-1.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">1600 Haskell St</h5>
            <table className="table table-sm table-bordered">
              <tbody>
                <tr>
                  <th>Id</th>
                  <td>52a7bb17e365c3e95cfeb70521721400</td>
                </tr>
                <tr>
                  <th>Score</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>Mls Id</th>
                  <td>9171839</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>Active</td>
                </tr>
                <tr>
                  <th>Bedrooms</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th>Bathrooms</th>
                  <td>3</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>685000</td>
                </tr>
                  <tr>
                  <th>Type</th>
                  <td>Single-Family</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary">Recommend</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FormSearchMLS;
