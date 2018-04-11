import app from 'apprun';
import f7 from './f7';
import LoginPage from './login';

const MainPage = () => <>
  <p>Page content goes here</p>
  <a href="/about/">About app</a>
</>

const Nav = ({ title }) => <>
  <div className="navbar">
    <div className="navbar-inner">
      <div className="title">{title}</div>
    </div>
  </div>
  <div className="toolbar">
    <div className="toolbar-inner">
      <a href="#" className="link">Link 1</a>
      <a href="#" className="link">Link 2</a>
    </div>
  </div>
</>

const App = ({ name, title, Nav, Page }) => <>
  <div className="statusbar"></div>
  <div className="view view-main">
    <div data-name={name} className="page">
      {Nav ? <Nav title={title} /> : ''}
      <div className="page-content">
      <Page />
      </div>
    </div>
  </div>
</>;

const f7app = f7("#my-app", "My App", "com.mycomp.myapp");
app.render(
  document.getElementById('my-app'),
  <App name="home" title="My App" Nav={Nav} Page={MainPage} />
  // <App name="login" title="My App" Nav={null} Page={LoginPage}/>
);
