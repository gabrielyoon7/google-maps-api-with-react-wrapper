// src/Dashboard.tsx

import {CSSProperties} from "react";

const dashboardStyle: CSSProperties = {
  position: 'absolute',
  width: '300px',
  height: '500px',
  backgroundColor: 'white',
  top: '0',
  left: '0',
  zIndex: 100,
};

function Dashboard() {

  return (
    <div style={dashboardStyle}>
      hi
    </div>
  );
}

export default Dashboard;
