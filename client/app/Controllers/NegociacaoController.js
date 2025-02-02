class NegociacaoController {

  constructor() {
    let query = document.querySelector.bind(document);
    this._inputData = query('#data')
    this._inputQuantidade = query('#quantidade')
    this._inputValor = query('#valor')
    this._negociacoes = new Negociacoes()
    this._negociacoesView = new NegociacoesView('.negociacoes');

    this._negociacoesView.update(this._negociacoes)

    this._mensagem = new Mensagem();

    this._mensagemView = new MensagemView('#mensagemView')
    this._mensagemView.update(this._mensagem)
  }

  adiciona(event) {
    event.preventDefault();
    this._negociacoes.daditional(this._criarNegociacao())
    this._mensagem.text = 'Negociação adicionada com sucesso!'
    this._negociacoesView.update(this._negociacoes)
    this._mensagemView.update(this._mensagem)
    this._limparFormulario()
    
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