import app from 'apprun';
import Framework7 from 'framework7';

export default (root, name, id) => new Framework7({
  // App root element
  root,
  // App Name
  name,
  // App id
  id,
  // Enable swipe panel
  panel: {
    swipe: 'left',
  }
});

export const Navbar = ({ title }) => (
  <div className="navbar">
    <div className="navbar-inner">
      <div className="title">{title}</div>
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
  <div className="view view-main">
    {children}
  </div>
)

export const Page = ({ name }, children) => (
  <div data-name={name} className="page">
    {children}
  </div>
)