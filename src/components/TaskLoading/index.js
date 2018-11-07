import React from 'react';
import { } from 'react-router-dom';

const TaskLoading = () => (
  <div className="TaskLoading">
    <div className="Card TaskLoading-card">
      <div className="Card-content">
        <h1 className="page-header TaskLoading-header">Awaiting Tasks</h1>
        <p className="lead text-center">There are no tasks for you presently. The system will continue monitoring for new tasks and alert you when more are available.</p>
      </div>
      <footer className="Card-footer Card-actions">
        <button type="button" className="RoundButton RoundButton-primary ">Pause</button>
      </footer>
    </div>
  </div>
)

export default TaskLoading;
