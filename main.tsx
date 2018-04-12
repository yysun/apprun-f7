import app from 'apprun';
import f7, { Navbar, Toolbar, Statusbar, View, Page } from './f7';
// import LoginPage from './login';

const HomePage = () => <div className="page-content">
  <p>Page content goes here</p>
  <a href="/about/">About app</a>
</div>

const view = () => <>
  <Statusbar />
  <View>
    <Page name='home'>
      <Navbar title='My App' />
      <Toolbar>
        <a href="#" className="link">Link 1</a>
        <a href="#" className="link">Link 2</a>
      </Toolbar>
      <HomePage />
    </Page>
  </View>
</>

const f7app = f7("#my-app", "My App", "com.mycomp.myapp");
app.start("my-app", {}, view, {});

