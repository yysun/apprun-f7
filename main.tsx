import app from 'apprun';
import { Navbar, Toolbar, Statusbar, View, Page, LeftPanel, RightPanel } from './f7';

declare var Framework7;

const HomePage = () => <div className="page-content">
  <div className="block block-strong">
    <p>This is an example of split view application layout, commonly used on tablets. The main approach of such kind of layout is that you can see different views at the same time.</p>
    <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>
    <p>The fun thing is that you can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.</p>
  </div>
</div>

const view = () => <>
  <Statusbar />
  <LeftPanel title='Left Panel'></LeftPanel>
  <RightPanel title='Right Panel'></RightPanel>
  <View>
    <Page name='home'>
      <Navbar>
        <div className="left">
          <a href="#" className="link icon-only panel-open" data-panel="left">
            <i className="icon f7-icons ios-only">menu</i>
            <i className="icon material-icons md-only">menu</i>
          </a>
        </div>
        <div className="title sliding">My App</div>
        <div className="right">
          <a href="#" className="link icon-only panel-open" data-panel="right">
            <i className="icon f7-icons ios-only">menu</i>
            <i className="icon material-icons md-only">menu</i>
          </a>
        </div>
      </Navbar>
      <Toolbar>
        <a href="#" className="link">Left Link</a>
        <a href="#" className="link">Right Link</a>
      </Toolbar>
      <HomePage />
    </Page>
  </View>
</>

app.start("my-app", {}, view, {});

new Framework7({
  root: '#my-app',
  panel: {
    leftBreakpoint: 960,
  }
});



