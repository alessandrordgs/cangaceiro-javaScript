class MensagemView {
  constructor(selector) {
    this._element = document.querySelector(selector)
  }

  template(model) {
    return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>'
  }

  update(model) {
    this._element.innerHTML = this.template(model)
  }
}