import React from 'react';
import { } from 'react-router-dom';

class TabAgentProfile extends React.Component {
  render() {
    return (
      <div className="JsonView">
        <div className="flex">
          <div className="w-2/3 pr-8">
            <header className="mb-4 flex">
              <div className="flex items-center bg-grey-lighter h-16 w-16 flex-no-shrink rounded-full">
                <span className="block w-full text-center text-4xl">
                  <i className="fas fa-user text-white mt-2"></i>
                </span>
              </div>
              <div className="ml-4">
                <h1 className="mb-0">Matt Colaneri</h1>
                <p>ID: 100859744</p>
              </div>
            </header>
            <hr />
            <div className="mt-10">
              <h4 className="mb-4">All Details</h4>
              <pre>
                {`
{
  "id": "85eb2a2f-6146-4525-bd28-17a6756dd450",
  "createdAt": "2018-10-02T20:18:49.452996Z",
  "updatedAt": "2018-10-12T16:37:13.175551Z",
  "phoneNumber": "+16174160943",
  "data": {
    "agentMatchingFilters": {
      "zipCodes": [
        "02108",
        "02109",
        "02110",
        "02111",
        "02113",
        "02114",
        "02115",
        "02116",
        "02118",
        "02119",
        "02120",
        "02121",
        "02122",
        "02124",
        "02125",
        "02126",
        "02127",
        "02128",
        "02129",
        "02130",
        "02131",
        "02199",
        "02203",
        "02210",
        "02215"
      ],
      "welcomeTextSentAt": "2018-10-03T15:12:26.930Z"
    },
    "externalId": "100859744",
    "telephony": {
      "phoneNumber": "+16174160943",
      "carrier": {
        "name": "AT&T Wireless",
        "textable": true,
        "countryCode": "310",
        "type": "mobile",
        "networkCode": "150"
      },
      "formattedPhoneNumber": "(617) 416-0943",
      "ojoPhoneNumber": "+16178551476",
      "unsubscribedByCarrier": false,
      "countryCode": "US",
      "unsubscribed": false,
      "caller": {
        "name": "COLANERI MATTHE",
        "type": "BUSINESS"
      }
    },
    "agent": {
      "type": "Listing",
      "phoneNumber": "+16178551476"
    },
    "profile": {
      "email": "matt.colaneri@nemoves.com",
      "lastName": "Colaneri",
      "firstName": "Matt"
    }
  },
  "revision": "98507979",
  "profileType": "real-estate-agent"
}
                `}
              </pre>
            </div>
          </div>
          <div className="w-1/3 pl-8 pr-2">
            <div className="mb-8">
              <h3 className="mb-4">Profile Information</h3>
              <div className="text-base leading-normal">
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    Phone Number
                  </span>
                  <span className="w-2/3">
                    +16174160943
                  </span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    Email Address
                  </span>
                  <span className="w-2/3 truncate">
                    matt.colaneri@nemoves.com
                  </span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    Agent Type
                  </span>
                  <span className="w-2/3">
                    Listing
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-8">
              <h3 className="mb-4">Referrals</h3>
              <div className="text-base leading-normal">
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    Sent
                  </span>
                  <span className="w-2/3">
                    20
                  </span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    Responded
                  </span>
                  <span className="w-2/3">
                    3
                    <span className="text-grey ml-2">15%</span>
                  </span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    Won
                  </span>
                  <span className="w-2/3">
                    1
                    <span className="text-grey ml-2">1%</span>
                  </span>
                </div>
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    Response
                  </span>
                  <span className="w-2/3">
                    1m 5s
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-8">
              <h3 className="mb-4">Areas / Zips</h3>
              <div className="text-base leading-normal">
                <div className="flex">
                  <span className="w-1/3 text-grey">
                    # of Zip Codes
                  </span>
                  <span className="w-2/3">
                    25
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default TabAgentProfile;
