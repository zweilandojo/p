import React from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table"
import withFixedColumns from 'react-table-hoc-fixed-columns'

// Components
import AdminAppHeader from '../../../components/AppHeader/AdminAppHeader.js'
import Breadcrumbs from '../../../components/Breadcrumbs/index.js'

const ReactTableFixedColumns = withFixedColumns(ReactTable)

class AdminAgents extends React.Component {
  constructor(props) {
		super(props);

		this.state = { selected: {}, selectAll: 0 };

		this.toggleRow = this.toggleRow.bind(this);
	}

  toggleRow(firstName) {
		const newSelected = Object.assign({}, this.state.selected);
		newSelected[firstName] = !this.state.selected[firstName];
		this.setState({
			selected: newSelected,
			selectAll: 2
		});
	}

  toggleSelectAll() {
		let newSelected = {};

		if (this.state.selectAll === 0) {
			this.state.data.forEach(x => {
				newSelected[x.firstName] = true;
			});
		}

		this.setState({
			selected: newSelected,
			selectAll: this.state.selectAll === 0 ? 1 : 0
		});
	}

  render() {

    const data = [
      {
        agentFirstName: 'Carol',
        agentLastName: 'Alford',
        phone: '1 (832) 514-9042',
        email: 'carol.alford@cbunited.com',
        areas: '-',
        zipCodes: '77044, 77336, 77338, 77339, 77345, 77346, 77357, 77365, 77396, 77532, 77536, 77598, 77520, 77521, 77522, 77523, 77520, 77521, 77523, 77580, 77049',
        externalID: '100857115',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '22'
      },
      {
        agentFirstName: 'James',
        agentLastName: 'Balleza',
        agentFullName: 'James Balleza',
        phone: '1 (713) 703-0592',
        email: 'james.balleza@cbunited.com',
        areas: '-',
        zipCodes: '777044, 77336, 77338, 77339, 77345, 77346, 77357',
        externalID: '900618',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '4'
      },
      {
        agentFirstName: 'Robert',
        agentLastName: 'Dunn',
        agentFullName: 'Robert Dunn',
        phone: '1 (713) 398-7043',
        email: 'bob.dunn@cbunited.com',
        areas: '-',
        zipCodes: '77002, 77004, 77005, 77006, 77007, 77008, 77009, 77019, 77024, 77025, 77027, 77030, 77043, 77046, 77055, 77056, 77057, 77063, 77092, 77096, 77098, 77401',
        externalID: '900622',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'CET',
        numZipsCovered: '8'
      },
      {
        agentFirstName: 'John',
        agentLastName: 'Trang',
        agentFullName: 'John	Trang',
        phone: '1 (346) 213-7903',
        email: 'john.trang@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506556',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'PbZ',
        numZipsCovered: '10'
      },
      {
        agentFirstName: 'Debbie',
        agentLastName: 'Holder',
        agentFullName: 'Debbie Holder',
        phone: '1 (713) 542-7289',
        email: 'debbie.holder@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '111244447',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Angela',
        agentLastName: 'Harris',
        agentFullName: 'Angela	Harris',
        phone: '1 (832) 525-7016',
        email: 'angela.harris@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        ojoPhone: '+1 (512) 555-0001',
        externalID: '98506501',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Jessica',
        agentLastName: 'Ellis',
        agentFullName: 'Jessica	Ellis',
        phone: '1 (207) 319-2172',
        email: 'jessica.ellis@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506486',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Kerry',
        agentLastName: 'Jackson',
        agentFullName: 'Kerry	Jackson',
        phone: '1 (817) 800-7105',
        email: 'kerry.jackson@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506513',
        isMatching: '✕',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'PbZ',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Shannon',
        agentLastName: 'Elliot',
        agentFullName: 'Shannon	Elliot',
        phone: '1 (832) 310-3504',
        email: 'kerry.jackson@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506513',
        isMatching: '✕',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'PbZ',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Beverly',
        agentLastName: 'Thompson',
        agentFullName: 'Beverly	Thompson',
        phone: '1 (817) 891-1896',
        email: 'beverly.thompson@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506549',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Kathy',
        agentLastName: 'West',
        agentFullName: 'Kathy	West',
        phone: '1 (281) 799-8768',
        email: 'kathy.west@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506567',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Teresa',
        agentLastName: 'Saldana',
        agentFullName: 'Teresa	Saldana',
        phone: '1 (713) 471-3144',
        email: 'teresa.saldana@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506518',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Liliana',
        agentLastName: 'Soukayem',
        agentFullName: 'Liliana	Soukayem',
        phone: '1 (915) 727-6724',
        email: 'liliana.soukayem@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506539',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Kirk',
        agentLastName: 'Craig',
        agentFullName: 'Kirk	Craig',
        phone: '1 (832) 707-3611',
        email: 'kirk.craig@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506463',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Honi',
        agentLastName: 'Alexander',
        agentFullName: 'Honi	Alexander',
        phone: '1 (281) 725-4710',
        email: 'honi.alexander@cbunited.com',
        areas: '-',
        zipCodes: '77058, 77059, 77062, 77539, 77546, 77565, 77568, 77573, 77581, 77584, 77586',
        externalID: '98506580',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      },
      {
        agentFirstName: 'Donna',
        agentLastName: 'Williams',
        agentFullName: 'Donna Williams',
        phone: '1 (832) 928-6633',
        email: 'donna.williams@cbunited.com',
        areas: '-',
        zipCodes: '77066, 77067, 77068, 77069, 77090, 77316, 77318, 77356, 77373, 77378, 77379, 77380, 77381, 77382, 77384, 77385, 77386, 77388, 77389',
        externalID: '100853624',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2 (10%)',
        referralsWon: '1',
        responseTime: '1m 5s',
        brokerage: 'Coldwell Banker United, Realtors',
        metro: 'Houston, TX',
        type: 'Listing',
        numZipsCovered: '12'
      }
    ]

    const columns = [
    {
      Header: '',
      id: "checkbox",
      accessor: "",
      Cell: ({ original }) => {
        return (
          <input
            type="checkbox"
            className="checkbox"
            checked={this.state.selected[original.firstName] === true}
            onChange={() => this.toggleRow(original.firstName)}
          />
        );
      },
      width:'30',
      fixed: 'left'
    }, {
      Header: 'Email',
      accessor: 'email',
      Cell: ({ row }) => (<Link to={{ pathname: `/admin-agent-detail` }}>{row.email}</Link>),
      width:'240',
      fixed: 'left'
    }, {
      Header: 'First Name',
      accessor: 'agentFirstName',
      width:'96'
    }, {
      Header: 'Last Name',
      accessor: 'agentLastName',
      width:'96'
    }, {
      Header: 'Phone',
      accessor: 'phone',
      width:'130'
    }, {
      Header: 'ID',
      accessor: 'externalID',
      width:'90'
    }, {
      Header: 'Type',
      accessor: 'type',
      width:'60'
    }, {
      Header: 'HHH',
      accessor: 'isMatching',
      width:'48'
    }, {
      Header: "Referrals Sent",
      accessor: "referralsSent",
      width:'108'
    }, {
      Header: "Responded",
      accessor: "referralsRespondedTo",
      width:'91'
    }, {
      Header: "Won",
      accessor: "referralsWon",
      width:'46'
    }, {
      Header: "Response Time",
      accessor: "responseTime",
      width:'115'
    }, {
      Header: 'Brokerage',
      accessor: 'brokerage',
      width:'320'
    }, {
      Header: 'Market',
      accessor: 'metro',
      width:'100'
    }, {
      Header: '# Zips',
      accessor: 'numZipsCovered',
      width:'60'
    }, {
      Header: 'Zips',
      accessor: 'zipCodes',
      width:'440'
    }]

    return (
      <div className="Admin">
        <AdminAppHeader />
        <Breadcrumbs currentPage="Agents" />
        <div className="Admin-inner">
          <div className="Admin-content">

            <div className="Card">
              <div className="Card-content">
                <div className="no-shrink">
                  <h1 className="mb-4">Agents</h1>
                </div>

                <div className="mb-2 flex justify-between">
                  <div className="input-group mb-4 max-w-sm">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search by Name, Phone, ID, or Zip"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">Search</button>
                    </div>
                  </div>
                  <div className="inline-block float-right">
                    <a
                      href="https://docs.google.com/spreadsheets/d/1WRvLjNYWYmVXIGwrLmOmT_4yC1VFPeHgV8llOoNro0M/edit#gid=0"
                      target="_blank"
                      className="btn btn-secondary"
                    >
                      Export List
                    </a>
                  </div>
                </div>

                <div>
                  <ReactTableFixedColumns
                    data={data}
                    columns={columns}
				            defaultSorted={[{ id: "agentLastName", desc: false }]}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminAgents;
