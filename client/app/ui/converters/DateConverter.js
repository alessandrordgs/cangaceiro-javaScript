class DateConverter {

  constructor() {
    throw new Error("Essa classe não pode ser instanciada")
  }

  static toDate(date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      throw new Error('Deve estar no formato aaaa-mm-dd')
    }
    return new Date(...
      date
        .split('-')
        .map((item, indice) => item - indice % 2))
  }

  static toText(date) {
    return date.toLocaleDateString('pt-BR')
  }
}