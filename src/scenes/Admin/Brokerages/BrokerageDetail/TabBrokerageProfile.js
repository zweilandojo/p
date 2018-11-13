import React from 'react';
import {  } from 'react-router-dom';

const TabBrokerageProfile = () => (
  <div className="overflow-y-auto">
    <div className="flex-no-shrink">
      <div className="JsonView">
      <pre>
      {`
  {
    "id": "7271030c-07a7-4c6a-9b81-dfeacac6282f",
    "createdAt": "2018-08-31T19:42:47.736788Z",
    "updatedAt": "2018-10-12T15:58:42.494281Z",
    "phoneNumber": "+15125550015",
    "data": {
      "name": "Coldwell Banker United, Realtors",
      "dashId": "575293f4-7bcd-47f7-930c-2a25998423e5",
      "externalId": "900652",
      "hostname": "coldwellbankerunited.broker.ojo.me",
      "state": "TX",
      "mlsConstraint": [
        "tx_har"
      ],
      "timezone": "America/Chicago",
      "adminUserId": "100798236",
      "twilioPhoneNumbers": {},
      "agentMatching": {},
      "ojoPhoneNumbers": [
        "+13463090119",
        "+13469985320",
        "+13469985090",
        "+13469985404",
        "+13469985144",
        "+13469985396",
        "+13462331523",
        "+13462301691",
        "+13462301763",
        "+13462331683"
      ],
      "broker": {
        "market": "Houston"
      },
      "phoneNumberConfig": {
        "+13469985144": {
          "sid": "PN8bd523e747f6f4118dfd989c949e6814"
        },
        "+13469985404": {
          "sid": "PNcba7d5dd7ca9d982259f1f84b771be7e"
        },
        "+13463090119": {
          "sid": "PN75cc37451d41a4cea1d75fbcddfe57f8"
        },
        "+13462301691": {
          "sid": "PN90268d46b4581fd9b2bd328f078471ff"
        },
        "+13469985090": {
          "sid": "PN246e2afb63841fce53208809d9159834"
        },
        "+13469985396": {
          "sid": "PN6ea6082155d698e2004df988f38199ea"
        },
        "+13462331683": {
          "sid": "PN3167832ebf8714995b6770e500d8bb57"
        },
        "+13469985320": {
          "sid": "PN727f384f08a387a69dcdc704421e8524"
        },
        "+13462301763": {
          "sid": "PN061cf4537889fcaec482f34812ac7643"
        },
        "+13462331523": {
          "sid": "PNdf7b31080bb0bace44f120a8126fb71e"
        }
      },
      "areaCodes": [
        "281",
        "713",
        "346",
        "832"
      ],
      "leadSystem": "leadrouter"
    },
    "revision": "98498645",
    "profileType": "real-estate-brokerage"
    }
        `}
        </pre>
      </div>
    </div>
  </div>
)

export default TabBrokerageProfile;
