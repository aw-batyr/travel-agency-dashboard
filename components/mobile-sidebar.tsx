// @ts-nocheck

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>Tourvisto</h1>
          <button onClick={() => sidebar.toggle()}>
            <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
          </button>
        </Link>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => (Sidebar = sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      ></SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
