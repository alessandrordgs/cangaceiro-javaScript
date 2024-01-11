class NegociacaoController {

  constructor() {
    let query = document.querySelector.bind(document);
    this._inputData = query('#data')
    this._inputQuantidade = query('#quantidade')
    this._inputValor = query('#valor')
    this._negociacoes = new Negociacoes()
  }

  adiciona(event) {
    event.preventDefault();
    
    this._negociacoes.additional(this._criarNegociacao())
    this._limparFormulario()
    
    console.log(this._negociacoes.toArray())
  }

  _limparFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  _criarNegociacao() {
    return new Negociacao(DateConverter.toDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value) 
  }
}