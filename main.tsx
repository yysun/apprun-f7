import app from 'apprun';
import { Navbar, Toolbar, Statusbar, View, Page, LeftPanel, RightPanel } from './f7';

declare var Framework7;

const HomePage = () => <div class="page-content">
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-item-date">
        21 <small>DEC</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">Plain text item</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">
        22 <small>DEC</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">
        <div class="timeline-item-inner">Another text goes here</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">
        23 <small>DEC</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">
        <div class="timeline-item-time">12:33</div>
        <div class="timeline-item-title">Item Title</div>
        <div class="timeline-item-subtitle">Item Subtitle</div>
        <div class="timeline-item-text">Item Text</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">
        24 <small>DEC</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">
        <div class="timeline-item-inner">
          <div class="timeline-item-time">12:33</div>
          <div class="timeline-item-title">Item Title</div>
          <div class="timeline-item-subtitle">Item Subtitle</div>
          <div class="timeline-item-text">Item Text</div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">
        25 <small>DEC</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">
        <div class="timeline-item-time">12:33</div>
        <div class="timeline-item-title">Item Title</div>
        <div class="timeline-item-subtitle">Item Subtitle</div>
        <div class="timeline-item-text">Item Text</div>
        <div class="timeline-item-time">15:45</div>
        <div class="timeline-item-title">Item Title</div>
        <div class="timeline-item-subtitle">Item Subtitle</div>
        <div class="timeline-item-text">Item Text</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">
        26 <small>DEC</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">
        <div class="timeline-item-inner">
          <div class="timeline-item-time">12:33</div>
          <div class="timeline-item-title">Item Title</div>
          <div class="timeline-item-subtitle">Item Subtitle</div>
          <div class="timeline-item-text">Item Text</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">15:45</div>
          <div class="timeline-item-title">Item Title</div>
          <div class="timeline-item-subtitle">Item Subtitle</div>
          <div class="timeline-item-text">Item Text</div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">
        27 <small>DEC</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content card">
        <div class="card-header">Card header</div>
        <div class="card-content card-content-padding">Card content</div>
        <div class="card-footer">Card footer</div>
      </div>
    </div>
  </div>
</div>;

const Layout = () => <>
  <Statusbar />
  <LeftPanel title='Left Panel'></LeftPanel>
  <RightPanel title='Right Panel'></RightPanel>
  <View>
    <Page name='home'>
      <Navbar>
        <div class="left">
          <a href="#" class="link icon-only panel-open" data-panel="left">
            <i class="icon f7-icons ios-only">menu</i>
            <i class="icon material-icons md-only">menu</i>
          </a>
        </div>
        <div class="title sliding">My App</div>
        <div class="right">
          <a href="#" class="link icon-only panel-open" data-panel="right">
            <i class="icon f7-icons ios-only">menu</i>
            <i class="icon material-icons md-only">menu</i>
          </a>
        </div>
      </Navbar>
      <Toolbar>
        <a href="#" class="link panel-open" data-panel="left">Left Link</a>
        <a href="#" class="link panel-open" data-panel="right">Right Link</a>
      </Toolbar>
      <HomePage />
    </Page>
  </View>
</>;

app.render(document.getElementById('my-app'), <Layout />);

new Framework7({
  root: '#my-app',
  panel: {
    leftBreakpoint: 960
  }
});
