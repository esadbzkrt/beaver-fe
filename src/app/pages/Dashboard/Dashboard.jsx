import React from 'react';
import "./Dashboard.sass"
import Wallet from "../../components/Wallet/Wallet";
import Content from "../../components/Content/Content";
import TrackList from "../../components/TrackList/TrackList";

function Dashboard(props) {
    return (
        <div className="Dashboard">
            <Wallet/>
            <Content/>
            <TrackList/>
        </div>
    );
}

export default Dashboard;