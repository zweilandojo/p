import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";


// Components
import AdminAppHeader from '../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs from '../../../components/Breadcrumbs/index.js'

class AdminCustomers extends React.Component {
  render() {
    const data = [
      {
        customerId: '252f38b3-4d8d-4fc3-9480-69a57c493207',
        phone: 26,
        isAgent: 'No',
        customerSince: 'November 6th, 2018'
      }
    ]
    const columns = [{
      Header: 'Customer Id',
      accessor: 'customerId',
      Cell: ({ row }) => (<Link to={{ pathname: `/admin-customers-detail` }}>{row.customerId}</Link>)
    }, {
      Header: 'Phone Number',
      accessor: 'phone'
    }, {
      Header: 'Is Agent',
      accessor: 'isAgent'
    }, {
      Header: 'Customer Since',
      accessor: 'customerSince'
    }]

    return (
      <div className="Admin">
        <AdminAppHeader />
        <Breadcrumbs currentPage="Customers" />
        <div className="Admin-inner">
          <div className="Admin-content">
            <div className="Card">
              <div className="Card-content">
                <div className="no-shrink">
                  <h1 className="">Customers / Agents</h1>
                  <div class="input-group mb-4 max-w-sm">
                    <input type="text" class="form-control" placeholder="Search by Name, Phone or ID" value="" />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">Search</button>
                    </div>
                  </div>
                </div>

                <ReactTable
                  data={data}
                  columns={columns}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminCustomers;
