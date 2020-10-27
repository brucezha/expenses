import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';

const DeleteModale = (props) => (
    <Modal
        isOpen={!!props.deleteSelected}
        onRequestClose={props.handleClearDelete}
        ariaHideApp={false}
        closeTimeoutMS={400}
        className="modal"
    >
        <h3 className="modal__title">Are you sure you want to delete this entry?</h3>
        <div className="modal__body">
            <Button onClick={props.remove} variant="contained" style={{ fontSize: '15px' }} color="secondary">Yes</Button>
        &nbsp;
        &nbsp;
        <Button onClick={props.handleClearDelete} variant="contained" style={{ fontSize: '15px' }} color="primary">Actually No</Button>
        </div>
    </Modal>
);
export default DeleteModale;