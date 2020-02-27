import app from 'apprun';
import { Navbar, Toolbar, Statusbar, View, Page, LeftPanel, RightPanel } from './f7';

declare var Framework7;

const HomePage = () => (
  <div class="page-content">
    <div class="block block-strong">
      <p>
        This is an example of split view application layout, commonly used on tablets. The main approach of such kind of
        layout is that you can see different views at the same time.
      </p>
      <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>
      <p>
        The fun thing is that you can easily control one view from another without any line of JavaScript just using
        "data-view" attribute on links.
      </p>
    </div>
  </div>
);

const view = () => (
  <>
    <View>
      <Page name="home">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner">
            <div class="left"></div>
            <div class="title">Vertical Timeline</div>
            <div class="right"></div>
          </div>
        </div>
        <div class="page-content">
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
        </div>
      </Page>
    </View>
  </>
);

app.start('my-app', {}, view, {});

new Framework7({
  root: '#my-app',
  panel: {
    leftBreakpoint: 960
  }
});
