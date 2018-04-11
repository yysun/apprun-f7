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
