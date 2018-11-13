import React from 'react';
import {  } from 'react-router-dom';

const TabBrokerageAgents = () => (
  <div className="overflow-y-auto">
    <div className="flex-no-shrink">
      <div className="JsonView">
        <header>
          <div>
            <h2>Agents</h2>
            <p>Agents assigned to this brokerage</p>
          </div>
          <div>
            <a
              href="https://docs.google.com/spreadsheets/d/1WRvLjNYWYmVXIGwrLmOmT_4yC1VFPeHgV8llOoNro0M/edit#gid=0"
              target="_blank"
              className="btn btn-secondary"
            >
              Export
            </a>
          </div>
        </header>

        <div>
          React Table
        </div>


      </div>
    </div>
  </div>
)

export default TabBrokerageAgents;
