import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";

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
        agentFullName: 'Carol Alford',
        phone: '1 (832) 514-9042',
        email: 'carol.alford@cbunited.com',
        areas: '-',
        zipCodes: '77044, 77336, 77338, 77339, 77345, 77346, 77357, 77365, 77396, 77532, 77536, 77598, 77520, 77521, 77522, 77523, 77520, 77521, 77523, 77580, 77049',
        externalID: '100857115',
        isMatching: '✓'
      },
      {
        agentFullName: 'James	Balleza',
        phone: '1 (713) 703-0592',
        email: 'james.balleza@cbunited.com',
        areas: '-',
        zipCodes: '777044, 77336, 77338, 77339, 77345, 77346, 77357',
        externalID: '900618',
        isMatching: '✓'
      },
      {
        agentFullName: 'Robert Dunn',
        phone: '1 (713) 398-7043',
        email: 'bob.dunn@cbunited.com',
        areas: '-',
        zipCodes: '77002, 77004, 77005, 77006, 77007, 77008, 77009, 77019, 77024, 77025, 77027, 77030, 77043, 77046, 77055, 77056, 77057, 77063, 77092, 77096, 77098, 77401',
        externalID: '900622',
        isMatching: '✓'
      },
      {
        agentFullName: 'John	Trang',
        phone: '1 (346) 213-7903',
        email: 'john.trang@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506556',
        isMatching: '✓'
      },
      {
        agentFullName: 'Debbie Holder',
        phone: '1 (713) 542-7289',
        email: 'debbie.holder@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '111244447',
        isMatching: '✓'
      },
      {
        agentFullName: 'Angela	Harris',
        phone: '1 (832) 525-7016',
        email: 'angela.harris@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        ojoPhone: '+1 (512) 555-0001',
        externalID: '98506501',
        isMatching: '✓'
      },
      {
        agentFullName: 'Jessica	Ellis',
        phone: '1 (207) 319-2172',
        email: 'jessica.ellis@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506486',
        isMatching: '✓'
      },
      {
        agentFullName: 'Kerry	Jackson',
        phone: '1 (817) 800-7105',
        email: 'kerry.jackson@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506513',
        isMatching: '✗'
      },
      {
        agentFullName: 'Shannon	Elliot',
        phone: '1 (832) 310-3504',
        email: 'kerry.jackson@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506513',
        isMatching: '✗'
      },
      {
        agentFullName: 'Beverly	Thompson',
        phone: '1 (817) 891-1896',
        email: 'beverly.thompson@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506549',
        isMatching: '✓'
      },
      {
        agentFullName: 'Kathy	West',
        phone: '1 (281) 799-8768',
        email: 'kathy.west@cbunited.com',
        zipCodes: '77044, 7736',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506567',
        isMatching: '✓'
      },
      {
        agentFullName: 'Teresa	Saldana',
        phone: '1 (713) 471-3144',
        email: 'teresa.saldana@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506518',
        isMatching: '✓'
      },
      {
        agentFullName: 'Liliana	Soukayem',
        phone: '1 (915) 727-6724',
        email: 'liliana.soukayem@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506539',
        isMatching: '✓'
      },
      {
        agentFullName: 'Kirk	Craig',
        phone: '1 (832) 707-3611',
        email: 'kirk.craig@cbunited.com',
        areas: '-',
        zipCodes: '77044, 7736',
        externalID: '98506463',
        isMatching: '✓'
      },
      {
        agentFullName: 'Honi	Alexander',
        phone: '1 (281) 725-4710',
        email: 'honi.alexander@cbunited.com',
        areas: '-',
        zipCodes: '77058, 77059, 77062, 77539, 77546, 77565, 77568, 77573, 77581, 77584, 77586',
        externalID: '98506580',
        isMatching: '✓'
      },
      {
        agentFullName: 'Donna Williams',
        phone: '1 (832) 928-6633',
        email: 'donna.williams@cbunited.com',
        areas: '-',
        zipCodes: '77066, 77067, 77068, 77069, 77090, 77316, 77318, 77356, 77373, 77378, 77379, 77380, 77381, 77382, 77384, 77385, 77386, 77388, 77389',
        externalID: '100853624',
        isMatching: '✓'
      }
    ]

    const columns = [
    {
			Header: "Matching",
			columns: [
				{
					Header: "Referrals",
					accessor: "referrals"
				},
        {
					Header: "Responded",
					accessor: "referrals"
				},
        {
					Header: "Won",
					accessor: "referrals"
				},
        {
					Header: "Response Time",
					accessor: "referrals"
				}
			]
		},
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
      width:'30'
    }, {
      Header: 'Agent Name',
      accessor: 'agentFullName',
      Cell: ({ row }) => (<Link to={{ pathname: `/admin-agent-detail` }}>{row.agentFullName}</Link>),
      width:'180'
    }, {
      Header: 'Phone',
      accessor: 'phone',
      width:'140'
    }, {
      Header: 'Email',
      accessor: 'email',
      Cell: ({ row }) => (<a href={`mailto:` + row.email}>{row.email}</a>),
      width:'220'
    }, {
      Header: 'ID',
      accessor: 'externalID',
      width:'90'
    }, {
      Header: 'Matching',
      accessor: 'isMatching',
      width:'80'
    }, {
      Header: 'Areas',
      accessor: 'areas',
      width:'70'
    }, {
      Header: 'Zips Covered',
      accessor: 'zipCodes',
      width:'480'
    }]

    return (
      <div className="overflow-y-auto">
        <div className="flex-no-shrink">
          <div className="JsonView">
            <header className="">
              <div className="">
                <h2>
                  Agents
                  <span className="text-grey-dark text-xl ml-2">(34 total)</span>
                </h2>
                <p>Agents assigned to this brokerage</p>
              </div>
            </header>

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
              <ReactTable
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
