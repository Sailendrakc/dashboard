import LeftBar from "../components/LeftBar";
import Posts from "../components/Posts";
import { Outlet } from "react-router";
import { ShoppingProvider } from "../contexts/ShoppingContext";

export default function RootLayout() {
  return (
    <ShoppingProvider>
      <div id="contentHolder">
        <div className="leftBarHolder">
          <div className="logoIcon"></div>
          <LeftBar className="LeftBar"></LeftBar>
        </div>

        <div className="midFlexHolder">
          <Outlet />
        </div>

        <div className="rightFlexHolder">
          <div className="header">
            <h3>Activity Dashboard</h3>
          </div>

          <div className="postHolder">
            <Posts count={12} />
          </div>
        </div>
      </div>
    </ShoppingProvider>
  );
}
