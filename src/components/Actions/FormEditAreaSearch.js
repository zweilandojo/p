import React from 'react';
import { } from 'react-router-dom';

const FormEditAreaSearch = () => (
  <div className="">
    <form className="form">
      <div className="form-group">
        <input type="search" className="form-control" id="searchAreas" aria-describedby="Search by City, Neighborhood, or Zip" placeholder="Search by City, Neighborhood, or Zip..." />
      </div>
    </form>
    <div className="userAreaSearchList mt-8">
      <h6 className="border-b border-grey-lighter pb-2 mb-3">Saved Areas</h6>
      <div className="">
        <span><i class="fa fa-map-marker text-grey-dark mr-1"></i>
        78702, Austin, TX</span>
      </div>
      <div className="">
        <span><i class="fa fa-map-marker text-grey-dark mr-1"></i>
        Hyde Park, Austin, TX</span>
      </div>
      <div className="">
        <span><i class="fa fa-map-marker text-grey-dark mr-1"></i>
        East Cesar Chavez, Austin, TX</span>
      </div>
      <div className="">
        <span><i class="fa fa-map-marker text-grey-dark mr-1"></i>
        South Central, Austin, TX</span>
      </div>
      <div className="">
        <span><i class="fa fa-map-marker text-grey-dark mr-1"></i>
        78721, Austin, TX</span>
      </div>
      <div className="">
        <span><i class="fa fa-map-marker text-grey-dark mr-1"></i>
        Central East Side, Austin, TX</span>
      </div>
      <div className="">
        <span><i class="fa fa-map-marker text-grey-dark mr-1"></i>
        Downtown, Austin, TX</span>
      </div>
    </div>
  </div>
)

export default FormEditAreaSearch;
