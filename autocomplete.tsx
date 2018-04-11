import app from 'apprun';

export default ({ id, header, label, placeholder }) => (
  <div class="list no-hairlines-md">
    <div class="block-header">{header}</div>
    <ul>
      <li class="item-content item-input inline-label">
        <div class="item-inner">
          <div class="item-title item-label">{label}</div>
          <div class="item-input-wrap">
            <input id={id} type="text" placeholder={placeholder} />
          </div>
        </div>
      </li>
    </ul>
  </div>
);