import app from 'apprun';

export default () => (
  <div class="page-content login-screen-content">
    <div class="login-screen-title">Login</div>
    <div class="list">
      <ul>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Username</div>
            <div class="item-input-wrap">
              <input type="text" name="username" placeholder="Your username" />
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Password</div>
            <div class="item-input-wrap">
              <input type="password" name="password" placeholder="Your password" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li>
          <a href="#" class="item-link list-button login-button">
            Sign In
          </a>
        </li>
      </ul>
      <div class="block-footer">
        Some text about login information.
        <br />
        Click "Sign In" to close Login Screen
      </div>
    </div>
  </div>
);
