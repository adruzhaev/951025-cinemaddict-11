import {createElement} from "../utils.js";

const createFilmsBoardContainerTemplate = () => {
  return (
    `<section class="films">
      
    </section>`
  );
};

export default class Board {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsBoardContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}