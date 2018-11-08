import React from 'react';
import { } from 'react-router-dom';

let errorColor = {
  color: "rgb(233, 30, 99)"
}

let successColor = {
  color: "rgb(0, 200, 83)"
}

let listStyle = {
  listStyleType: "none",
  padding: "5px",
  margin: "0px"
}

class ContextMissions extends React.Component {
  render() {
    return (
      <div>
        <div class="ContextView-factgroup">
          <h4>Mission Status</h4>
          <div class="ContextView-table">
            <ul className="list-reset px-2 mb-0">
              <li>
                <i class="fa fa-check-circle mr-1" aria-hidden="true" style={successColor}></i>
                Versus
              </li>
              <li>
                <i class="fa fa-check-circle mr-1" aria-hidden="true" style={successColor}></i>
                Basic Prefs
              </li>
              <li>
                <i class="fa fa-check-circle mr-1" aria-hidden="true" style={successColor}></i>
                Area Search
              </li>
              <li>
                <i class="fa fa-times-circle mr-1" aria-hidden="true" style={errorColor}></i>
                Kitchen Style
              </li>
              <li>
                <i class="fa fa-times-circle mr-1" aria-hidden="true" style={errorColor}></i>
                Commute Search
              </li>
              <li>
                <i class="fa fa-times-circle mr-1" aria-hidden="true" style={errorColor}></i>
                Agent Request
              </li>
              <li>
                <i class="fa fa-times-circle mr-1" aria-hidden="true" style={errorColor}></i>
                Mortgage Handoff
              </li>
            </ul>
          </div>
        </div>
        <div className="ContextView-factgroup">
          <h4>Basic Preferences</h4>
          <div className="ContextView-fact">
            <span>Property Type</span>
            <span>Homes, Condos</span>
          </div>
          <div className="ContextView-fact">
            <span>MLS</span>
            <span>Orlando, FL <span className="text-grey">(fl_ramb)</span></span>
          </div>
          <div className="ContextView-fact">
            <span>Price</span>
            <span>$200,000 - $400,000</span>
          </div>
          <div className="ContextView-fact">
            <span>Beds</span>
            <span>1+</span>
          </div>
          <div className="ContextView-fact">
            <span>Baths</span>
            <span>1+</span>
          </div>
          <div className="ContextView-fact">
            <span>Listing Status</span>
            <span>Active ???</span>
          </div>
        </div>
        <div className="ContextView-factgroup">
          <h4>Area Search</h4>
          <div className="ContextView-fact">
            <span>Areas</span>
            <span>78702, Hyde Park, East Cesar Chavez, South Central, 78721, Central East Side, Downtown</span>
          </div>
        </div>
        <div className="ContextView-factgroup">
          <h4>Versus</h4>
          <div className="ContextView-fact">
            <span>Living with</span>
            <span>Pets &amp; Family</span>
          </div>
          <div className="ContextView-fact">
            <span>Yard</span>
            <span>Wants a yard</span>
          </div>
          <div className="ContextView-fact">
            <span>Parking</span>
            <span>Private Garage</span>
          </div>
          <div className="ContextView-fact">
            <span>Style</span>
            <span>Exterior &amp; Interior</span>
          </div>
          <div className="ContextView-fact">
            <span>Entertaining</span>
            <span>Indoors &amp; Outdoors</span>
          </div>
          <div className="ContextView-fact">
            <span>Home age</span>
            <span>Newer</span>
          </div>
          <div className="ContextView-fact">
            <span>Hobbies</span>
            <span>Indoors &amp; Outdoors</span>
          </div>
          <div className="ContextView-fact">
            <span>Eating</span>
            <span>Eats out often</span>
          </div>
          <div className="ContextView-fact">
            <span>Commute</span>
            <span>Commutes daily</span>
          </div>
          <div className="ContextView-fact">
            <span>Transport</span>
            <span>Prefers to walk</span>
          </div>
          <div className="ContextView-fact">
            <span>Financing</span>
            <span>I need financing</span>
          </div>
        </div>
        <div className="ContextView-factgroup">
          <h4>Agent Request</h4>
          <div className="ContextView-fact">
            <span>Needs agent</span>
            <span>No</span>
          </div>
        </div>
        <div className="ContextView-factgroup">
          <h4>Mortgage Handoff</h4>
          <div className="ContextView-fact">
            <span>Lender</span>
            <span>Will need</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ContextMissions;
