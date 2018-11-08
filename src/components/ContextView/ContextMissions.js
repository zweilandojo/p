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
            <ul className="list-reset p-2">
              <li>
                <i class="fa fa-check-circle mr-1" aria-hidden="true" style={successColor}></i>
                Versus
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
                Basic Prefs
              </li>
              <li>
                <i class="fa fa-times-circle mr-1" aria-hidden="true" style={errorColor}></i>
                Area Fit
              </li>
              <li>
                <i class="fa fa-times-circle mr-1" aria-hidden="true" style={errorColor}></i>
                Kitchen Style
              </li>
              <li>
                <i class="fa fa-times-circle mr-1" aria-hidden="true" style={errorColor}></i>
                Mortgage Handoff
              </li>
            </ul>
          </div>
        </div>
        <div className="ContextView-factgroup">
          <h4>Mission Data</h4>
          <div className="ContextView-fact">
            <span>YardPref</span>
            <span>YardPref.Positive</span>
          </div>
          <div className="ContextView-fact">
            <span>StylePref</span>
            <span>StylePref.Exterior</span>
            <span>StylePref.Interior</span>
          </div>
          <div className="ContextView-fact">
            <span>EatingPref</span>
            <span>EatingPref.Out</span>
            <span>EatingPref.Home</span>
          </div>
          <div className="ContextView-fact">
            <span>LivingWith</span>
            <span>LivingWith.Pets</span>
          </div>
          <div className="ContextView-fact">
            <span>CommutePref</span>
            <span>CommutePref.Positive</span>
          </div>
          <div className="ContextView-fact">
            <span>HobbiesPref</span>
            <span>HobbiesPref.Indoor</span>
            <span>HobbiesPref.Outdoor</span>
          </div>
          <div className="ContextView-fact">
            <span>HomeAgePref</span>
            <span>HomeAgePref.Newer</span>
          </div>
          <div className="ContextView-fact">
            <span>ParkingPref</span>
            <span>ParkingPref.PrivateGarage</span>
            </div>
          <div className="ContextView-fact">
            <span>EntertainPref</span>
            <span>EntertainPref.Indoors</span>
            <span>EntertainPref.Outdoors</span>
          </div>
          <div className="ContextView-fact">
            <span>Property Type</span>
            <span>Home</span>
          </div>
          <div className="ContextView-fact">
            <span>Mls Constraint</span>
            <span>fl_ramb</span>
          </div>
          <div className="ContextView-fact">
            <span>Price Constraint</span>
            <span>max: </span>
            <span>min: 800000</span>
          </div>
          <div className="ContextView-fact">
            <span>Bedroom Constraint</span>
            <span>min: 2</span>
          </div>
          <div className="ContextView-fact">
            <span>TransportationPref</span>
            <span>TransportationPref.Walk</span>
          </div>
          <div className="ContextView-fact">
            <span>Bathroom Constraint</span>
            <span>min: 2</span>
          </div>
          <div className="ContextView-fact">
            <span>MortgageHandoffPref</span>
            <span>MortgageHandoffPref.Negative</span>
          </div>
          <div className="ContextView-fact">
            <span>Photo Count Constraint</span>
            <span>min: 1</span>
          </div>
          <div className="ContextView-fact">
            <span>Listing Status Constraint</span>
            <span>Active</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ContextMissions;
