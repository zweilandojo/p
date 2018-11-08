import React from 'react';
import { } from 'react-router-dom';
import ReactTable from "react-table";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components
import TasksAppHeader from '../../../components/AppHeader/TasksAppHeader.js'
import Breadcrumbs from '../../../components/Breadcrumbs/index.js'
import ContextView from '../../../components/ContextView/index.js'


class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    const closeBtn = <i class="fa fa-close  Pill-clickable" onClick={this.toggleModal} aria-hidden="true"></i>

    return (
      <div className="Tasks-layout">
        <TasksAppHeader />
        <div className="TaskScreen">
          <div className="TaskProgress">
            <div className="TaskProgress-step completed">
              <i className="far fa-check-circle fa-lg" aria-hidden="true"></i>
              <span>Unknown</span>
            </div>
            <div className="TaskProgress-step maybeSkipped">
              <i className="far fa-question-circle fa-lg" aria-hidden="true"></i>
              <span>Entity Highlighting</span>
            </div>
            <div className="TaskProgress-step maybeSkipped">
              <i className="far fa-question-circle fa-lg" aria-hidden="true"></i>
              <span>Entity Matching</span>
            </div>
            <div className="TaskProgress-step active">
              <i className="far fa-circle fa-lg" aria-hidden="true"></i>
              <span>Choose a Response</span>
            </div>
          </div>
          <div className="TaskScreen-content">
            <ContextView />

            <div className="Card justify-between ml-5">
              <div className="overflow-y-auto">
                <div className="flex-no-shrink">
                  <div className="Card-content">
                    <h3 className="TaskScreen-message">Why</h3>
                    <div className="MessageReply-age">Submitted Today at 12:12 PM - 2 hours ago</div>
                    <div className="EnhancedTextArea">
                      <div className="EnhancedTextArea-InputWrapper">
                        <textarea className="Textarea" placeholder="Type your response in the voice of OJO."></textarea>
                        </div>
                        <div className="EnhancedTextArea-ActionsContainer">
                          {/*
                          <ul className="EnhancedTextArea-ActionsList">
                            <li className="EnhancedTextArea-Action">
                              <button type="button" disabled="" className="LinkButton LinkButton-disabled"><i class="fa fa-question-circle-o  " aria-hidden="true"></i>Entities</button>
                              </li>
                            <li className="EnhancedTextArea-Action">
                              <button type="button" className="LinkButton ">Send VS Link</button>
                            </li>
                            <li className="EnhancedTextArea-Action">
                              <button type="button" className="LinkButton ">Send HomeFit Link</button>
                            </li>
                            <li className="EnhancedTextArea-Action">
                              <button type="button" disabled="" className="LinkButton LinkButton-disabled">
                                <i className="fa fa-camera  " aria-hidden="true"></i>
                                Photos
                              </button>
                            </li>
                            <li className="EnhancedTextArea-Action"><button type="button" disabled="" class="LinkButton LinkButton-disabled">
                              <i className="fa fa-external-link " aria-hidden="true"></i>{"http://"}</button>
                            </li>
                          </ul>
                          */}

                          <Dropdown
                            direction="down"
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggle}
                            className="inline-block mr-4"
                          >
                            <DropdownToggle caret className="btn btn-primary">
                              Actions
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem onClick={this.toggleModal}>Send Mission</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Change Basic Preferences</DropdownItem>
                              <DropdownItem>Change Area Search</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Send MLS Recommendation</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>

                          <div className="EnhancedTextArea-ActionIcon disabled inline-block">
                            <button type="button" className="LinkButton ">Hold on...</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="Card-footer justify-between">
                <div className="TaskCard-main">
                  <div className="TaskCard-back">
                    <button type="button" className="LinkButton ">
                      <i className="fa fa-angle-left mr-1" aria-hidden="true"></i>
                      Restart
                    </button>
                  </div>
                  <button type="button" disabled="" className="RoundButton RoundButton-primary RoundButton-isDisabled">
                    Submit
                  </button>
                </div>
                <div className="TaskCard-secondary">
                  <button type="button" className="LinkButton ">
                    Send to Expert
                    <i className="fa fa-angle-double-right ml-1" aria-hidden="true"></i>
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <div className="Card">
            <ModalHeader toggle={this.toggleModal} close={closeBtn}>Send Mission</ModalHeader>
            <ModalBody className="Card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



            </ModalBody>
            <ModalFooter className="Card-footer Card-actions">
              <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </div>
        </Modal>

      </div>
    )
  }
}

export default TaskDetail;
