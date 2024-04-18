import * as React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { HomeTabContent } from "./home/HomeTabContent";
import { ExploreTabContent } from "./home/ExploreTabContent";

export const HomePage: React.FC = () => {
  const [key, setKey] = React.useState<string>('home')
    return (
        <div>           
    <Tabs
      id="controlled-tab"
      className="mb-3"
      activeKey={key}
      onSelect={(k) => setKey(k || 'home')}
      style={{ backgroundColor: "rgb(78, 81, 102)" }}
    >
      <Tab eventKey="home" title="Home">
        <HomeTabContent onNavigate={() => setKey("explore")}/>
      </Tab>
      <Tab eventKey="explore" title="Explore">
        <ExploreTabContent />
      </Tab>
    </Tabs>
        </div>
    );
}