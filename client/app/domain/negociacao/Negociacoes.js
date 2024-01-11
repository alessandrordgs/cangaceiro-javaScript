class Negociacoes {
  constructor () {
    this._negocicoes = [];
  }


  get volumeTotal() {

    let total = this._negocicoes.reduce(
      (acc, currentValue) => acc + currentValue.volume,
      0
      )

    return total
  }
  additional(negociacao) {
    this._negocicoes.push(negociacao)
  }

  toArray() {
    return [].concat(this._negocicoes)
  }
}