import React from 'react';
import { } from 'react-router-dom';
import ReactTable from "react-table";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components
import TasksAppHeader from '../../../components/AppHeader/TasksAppHeader.js'
import Breadcrumbs from '../../../components/Breadcrumbs/index.js'
import ContextView from '../../../components/ContextView/index.js'
import FormEditBasicPrefs from '../../../components/Actions/FormEditBasicPrefs.js'
import FormSendMission from '../../../components/Actions/FormSendMission.js'


class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      modal: false,
      modalBasicPref: false
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
                            <DropdownToggle caret className="RoundButton RoundButton-secondary">
                              Actions
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Send Link</DropdownItem>
                              <DropdownItem onClick={this.toggleModal}>Send Mission</DropdownItem>
                              <DropdownItem>Send MLS Recommendation</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem onClick={this.toggleModalBasicPref}>Edit Basic Preferences</DropdownItem>
                              <DropdownItem>Edit Area Search</DropdownItem>
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

            {/* <FormEditBasicPrefs /> */}
            <FormSendMission />

            </ModalBody>
            <ModalFooter className="Card-footer Card-actions">
              <button className="RoundButton RoundButton-primary" onClick={this.toggleModal}>Save changes</button>
              <button className="LinkButton" onClick={this.toggleModal}>Cancel</button>
            </ModalFooter>
          </div>
        </Modal>

{/*
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModalBasicPref}
          modalClassName={this.props.className}
          centered="true"
        >
          <div className="Card">
            <ModalHeader toggle={this.toggleModalBasicPref} close={closeBtn}>Update Basic Preferences</ModalHeader>
            <ModalBody className="Card-content">

            </ModalBody>
            <ModalFooter className="Card-footer Card-actions">
              <Button className="RoundButton" onClick={this.toggleModalBasicPref}>Save</Button>{' '}
              <Button className="LinkButton" onClick={this.toggleModalBasicPref}>Cancel</Button>
            </ModalFooter>
          </div>
        </Modal>
        */}

      </div>
    )
  }
}

export default TaskDetail;
