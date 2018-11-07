import React from 'react';
import { } from 'react-router-dom';

class Breadcrumbs2 extends React.Component {
  render() {
    return (
      <ol class="breadcrumb flex-no-shrink">
        <li class="breadcrumb-item">
          <a aria-current="false" href="/admin">Admin</a>
        </li>
        <li class="breadcrumb-item">
          <a aria-current="false" href={this.props.parentUrl}>{this.props.parentPage}</a>
        </li>
        <li class="breadcrumb-item">{this.props.currentPage}</li>
      </ol>
    )
  }
}

export default Breadcrumbs2;
