import app from 'apprun';

export default () =>
  <div className="page-content login-screen-content">
    <div className="login-screen-title">Login</div>
    <div className="list">
      <ul>
        <li className="item-content item-input">
          <div className="item-inner">
            <div className="item-title item-label">Username</div>
            <div className="item-input-wrap">
              <input type="text" name="username" placeholder="Your username" />
            </div>
          </div>
        </li>
        <li className="item-content item-input">
          <div className="item-inner">
            <div className="item-title item-label">Password</div>
            <div className="item-input-wrap">
              <input type="password" name="password" placeholder="Your password" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="list">
      <ul>
        <li>
          <a href="#" className="item-link list-button login-button">Sign In</a>
        </li>
      </ul>
      <div className="block-footer">Some text about login information.<br />Click "Sign In" to close Login Screen</div>
    </div>
  </div>;
