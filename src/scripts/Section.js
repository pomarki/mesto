/* export class Section {
  constructor({ items, renderer }, formSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = formSelector;
  }
  renderItems() {
    this._renderedItems.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    this._container.prepend(element);
  }
}

 */
export class Section {
  constructor({ renderer }, formSelector) {
   
    this._renderer = renderer;
    this._container = formSelector;
  }
  renderItems(items) {
    items.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    this._container.prepend(element);
  }
}


