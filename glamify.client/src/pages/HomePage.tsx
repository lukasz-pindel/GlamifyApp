import * as React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { HomeTabContent } from "./home/HomeTabContent";
import { ExploreTabContent } from "./home/ExploreTabContent";
import { useLocation } from "react-router-dom";

interface HomePageProps {
  selectedTabKey?: string;
}

export const HomePage: React.FC<HomePageProps> = (props) => {
  const { selectedTabKey } = props;
  const [key, setKey] = React.useState<string>('home');
  const location = useLocation();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
        setKey(tab);
    }
  }, [location]);

    return (
        <div>           
    <Tabs
      id="controlled-tab"
      className="mb-3 tabs-container"
      activeKey={selectedTabKey ?? key}
      onSelect={(k) => setKey(k || 'home')}
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
