export class Section {
  constructor({ items, renderer }, formSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = formSelector;
  }
  renderItems() {
    // отвечает за отрисовку элемента
    this._renderedItems.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    // добавляет отрисованный элемент в DOM
    this._container.prepend(element);
  }
}
