class NegociacoesView {

  constructor (selector) {
    this._element = document.querySelector(selector)
  }

  update(model) {
    this._element.innerHTML = this.template(model)
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
        </tr>
    </thead>
    <tbody>
      ${model.toArray().map((negociacao) => {
        return`
         <tr>
            <td>${DateConverter.toText(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
            <td>${negociacao.volume}</td>
         </t>
        `
      }).join('')}
    </tbody>
    <tfoot>
        <tr>
          <td colspan="3"></td>
          <td>${model.volumeTotal}</td>
        </tr>
    </tfoot>
  </table>
    `
  }
}