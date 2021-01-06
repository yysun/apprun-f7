import app from 'apprun';

export const Navbar = (props, children) => (
  <div class="navbar">
    <div class="navbar-inner">{children || ''}</div>
  </div>
);

export const Toolbar = (props, children) => (
  <div class="toolbar">
    <div class="toolbar-inner">{children || ''}</div>
  </div>
);

export const Statusbar = (props, children) => <div class="statusbar">{children || ''}</div>;

export const View = (props, children) => <div class="view view-main ios-edges">{children}</div>;

export const Page = ({ name }, children) => (
  <div data-name={name} class="page">
    {children}
  </div>
);

export const LeftPanel = ({ title }, children) => (
  <div class="panel panel-left panel-reveal panel-resizable panel-init">
    <div class="view view-left">
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="title">{title}</div>
          </div>
        </div>
        <div class="page-content">{children}</div>
      </div>
    </div>
  </div>
);

export const RightPanel = ({ title }, children) => (
  <div class="panel panel-right panel-cover">
    <div class="view">
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner">
            <div class="title">{title}</div>
          </div>
        </div>
        <div class="page-content">{children}</div>
      </div>
    </div>
  </div>
);
