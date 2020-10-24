import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import GoogleButton from 'react-google-button';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Budget</h1>
            <br></br>
            <GoogleButton type="light" onClick={startLogin} />
        </div>
    </div>
);

const mapDispatchToProps = (dispath) => ({
    startLogin: () => dispath(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);