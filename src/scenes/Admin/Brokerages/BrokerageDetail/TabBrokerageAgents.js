import React from 'react'
import { Link } from 'react-router-dom'
import ReactTable from "react-table"
import withFixedColumns from 'react-table-hoc-fixed-columns'

const ReactTableFixedColumns = withFixedColumns(ReactTable)

class TabBrokerageAgents extends React.Component {

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
        email: 'carol.alford@cbunited.com',
        agentFirstName: 'Carol',
        agentLastName: 'Alford',
        agentFullName: 'Carol Alford',
        phone: '1 (832) 514-9042',
        externalID: '100857115',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '28',
        zipCodes: '77044, 77336, 77338, 77339, 77345, 77346, 77357, 77365, 77396, 77532, 77536, 77598, 77520, 77521, 77522, 77523, 77520, 77521, 77523, 77580, 77049'
      },
      {
        email: 'james.balleza@cbunited.com',
        agentFirstName: 'James',
        agentLastName: 'Balleza',
        agentFullName: 'James	Balleza',
        phone: '1 (713) 703-0592',
        externalID: '900618',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '7',
        zipCodes: '777044, 77336, 77338, 77339, 77345, 77346, 77357'
      },
      {
        email: 'bob.dunn@cbunited.com',
        agentFirstName: 'Robert',
        agentLastName: 'Dunn',
        agentFullName: 'Robert Dunn',
        phone: '1 (713) 398-7043',
        externalID: '900622',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '22',
        zipCodes: '77002, 77004, 77005, 77006, 77007, 77008, 77009, 77019, 77024, 77025, 77027, 77030, 77043, 77046, 77055, 77056, 77057, 77063, 77092, 77096, 77098, 77401'
      },
      {
        email: 'john.trang@cbunited.com',
        agentFirstName: 'John',
        agentLastName: 'Trang',
        agentFullName: 'John	Trang',
        phone: '1 (346) 213-7903',
        externalID: '98506556',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'debbie.holder@cbunited.com',
        agentFirstName: 'Debbie',
        agentLastName: 'Holder',
        agentFullName: 'Debbie Holder',
        phone: '1 (713) 542-7289',
        externalID: '111244447',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'angela.harris@cbunited.com',
        agentFirstName: 'Angela',
        agentLastName: 'Harris',
        agentFullName: 'Angela	Harris',
        phone: '1 (832) 525-7016',
        externalID: '98506501',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736',
        phone: '+1 (512) 555-0001'
      },
      {
        email: 'jessica.ellis@cbunited.com',
        agentFirstName: 'Jessica',
        agentLastName: 'Ellis',
        agentFullName: 'Jessica	Ellis',
        phone: '1 (207) 319-2172',
        externalID: '98506486',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'kerry.jackson@cbunited.com',
        agentFirstName: 'Kerry',
        agentLastName: 'Jackson',
        agentFullName: 'Kerry	Jackson',
        phone: '1 (817) 800-7105',
        externalID: '98506513',
        isMatching: '✗',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'kerry.jackson@cbunited.com',
        agentFirstName: 'Shannon',
        agentLastName: 'Elliot',
        agentFullName: 'Shannon	Elliot',
        phone: '1 (832) 310-3504',
        externalID: '98506513',
        isMatching: '✗',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'beverly.thompson@cbunited.com',
        agentFirstName: 'Beverly',
        agentLastName: 'Thompson',
        agentFullName: 'Beverly	Thompson',
        phone: '1 (817) 891-1896',
        externalID: '98506549',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'kathy.west@cbunited.com',
        agentFirstName: 'Kathy',
        agentLastName: 'West',
        agentFullName: 'Kathy	West',
        phone: '1 (281) 799-8768',
        externalID: '98506567',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        zipCodes: '77044, 7736',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'teresa.saldana@cbunited.com',
        agentFirstName: 'Teresa',
        agentLastName: 'Saldana',
        agentFullName: 'Teresa	Saldana',
        phone: '1 (713) 471-3144',
        externalID: '98506518',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'liliana.soukayem@cbunited.com',
        agentFirstName: 'Liliana',
        agentLastName: 'Soukayem',
        agentFullName: 'Liliana	Soukayem',
        phone: '1 (915) 727-6724',
        externalID: '98506539',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'kirk.craig@cbunited.com',
        agentFirstName: 'Kirk',
        agentLastName: 'Craig',
        agentFullName: 'Kirk	Craig',
        phone: '1 (832) 707-3611',
        externalID: '98506463',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '2',
        zipCodes: '77044, 7736'
      },
      {
        email: 'honi.alexander@cbunited.com',
        agentFirstName: 'Honi',
        agentLastName: 'Alexander',
        agentFullName: 'Honi	Alexander',
        phone: '1 (281) 725-4710',
        externalID: '98506580',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '12',
        zipCodes: '77058, 77059, 77062, 77539, 77546, 77565, 77568, 77573, 77581, 77584, 77586'
      },
      {
        email: 'donna.williams@cbunited.com',
        agentFirstName: 'Donna',
        agentLastName: 'Williams',
        agentFullName: 'Donna Williams',
        phone: '1 (832) 928-6633',
        externalID: '100853624',
        isMatching: '✓',
        referralsSent: '20',
        referralsRespondedTo: '2',
        referralsWon: '1',
        responseTime: '1m 5s',
        areas: '-',
        numZipsCovered: '22',
        zipCodes: '77066, 77067, 77068, 77069, 77090, 77316, 77318, 77356, 77373, 77378, 77379, 77380, 77381, 77382, 77384, 77385, 77386, 77388, 77389'
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
      width:'100'
    }, {
      Header: 'Last Name',
      accessor: 'agentLastName',
      width:'100'
    }, {
      Header: 'Phone',
      accessor: 'phone',
      width:'140'
    }, {
      Header: 'ID',
      accessor: 'externalID',
      width:'90'
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
      Header: '# Zips',
      accessor: 'numZipsCovered',
      width:'60'
    }, {
      Header: 'Zips Covered',
      accessor: 'zipCodes',
      width:'480'
    }]

    return (
      <div className="overflow-y-auto">
        <div className="flex-no-shrink">
          <div className="JsonView">
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
                <span className="text-grey mr-4">34 Agents</span>
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
              />
            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default TabBrokerageAgents;
