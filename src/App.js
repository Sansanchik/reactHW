import React from 'react';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isSecondModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleSecondModal = this.toggleSecondModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  };

  toggleSecondModal() {
    this.setState({ isSecondModalOpen: !this.state.isSecondModalOpen })
  };

  closeModal () {
    this.setState({
      isModalOpen: false,
      isSecondModalOpen: false
    })
  }

  render() {

    return (
      <div>
        <div className="wrapper">
          <Button
            color="blue"
            text="Open first modal"
            onClick={this.toggleModal}
          />
          <Button
            color="red"
            text="Open second modal"
            onClick={this.toggleSecondModal}
          />
        </div>
        <Modal
          show={this.state.isModalOpen}
          isCloseButton = {true}
          onCloseClick = {this.closeModal}
          headerText="Do you want to delete this file?"
          mainText="Once you delete this file, it won’t be possible to undo this action. 
Are you sure you want to delete it?"
          actionButtons={[
            <Button  text="OK" />,
            <Button  onClick={this.closeModal} text="CANCEL" />
          ]}
        />
        <Modal
          show={this.state.isSecondModalOpen}
          isCloseButton = {true}
          onCloseClick = {this.closeModal}
          headerText="What do you want to do?"
          mainText="It's your choice. Chosse whatever you want!"
          actionButtons={[
            <Button  text="OK" />,
            <Button  onClick={this.closeModal} text="CANCEL" />
          ]}
        />
      </div>
    )
  }
}

export default App;
