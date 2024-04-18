import * as React from "react";
import { Tab, Tabs } from "react-bootstrap";

export const HomePage: React.FC = () => {
    return (
        <div>           
    <Tabs
      id="controlled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
        </div>
    );
}