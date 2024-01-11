class Negociacoes {
  constructor () {
    this._negocicoes = [];
  }

  additional(negociacao) {
    this._negocicoes.push(negociacao)
  }

  toArray() {
    return this._negocicoes
  }
}