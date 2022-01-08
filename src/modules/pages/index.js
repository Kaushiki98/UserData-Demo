import React from "react";
import Dashboard from './dashboard';
import Head from "./head";
import Sidebar from "./sidebar"
import {Row} from "simple-flexbox";

const UserData = () => {
        return (
          <>
          <Head />
          <Row>
          <Sidebar/>
          <Dashboard/>
          </Row>
          </>
        );
}

export default UserData;