import app from 'apprun';

export const Navbar = (props, children ) => (
  <div className="navbar">
    <div className="navbar-inner">
      {children || ''}
    </div>
  </div>
)

export const Toolbar = (props, children) => (
  <div className="toolbar">
    <div className="toolbar-inner">
      {children || ''}
    </div>
  </div>
)

export const Statusbar = (props, children) => (
  <div className="statusbar">
    {children || ''}
  </div>
)

export const View = (props, children) => (
  <div className="view view-main ios-edges">
    {children}
  </div>
)

export const Page = ({ name }, children) => (
  <div data-name={name} className="page">
    {children}
  </div>
)

export const LeftPanel = ({ title }, children) => (
  <div className="panel panel-left panel-reveal">
    <div className="view view-left">
      <div className="page">
        <div className="navbar">
          <div className="navbar-inner sliding">
            <div className="title">{title}</div>
          </div>
        </div>
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  </div>
)

export const RightPanel = ({ title }, children) => (
  <div className="panel panel-right panel-cover">
    <div className="view">
      <div className="page">
        <div className="navbar">
          <div className="navbar-inner">
            <div className="title">{title}</div>
          </div>
        </div>
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  </div>
)