export default class DoorSchema {
  static schema = {
    name: 'DoorToDoor',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      data: 'date',
      nameTribe: 'string',
      namePerson: 'string',
      address: 'string',
      type: 'string',
      age: 'string',
      bible: 'string',
      evangelical: 'string',
      contact: 'string',
      frequentsChurch: 'string',
      cultHome: 'string',
      studyBible: 'string',
      studyConfimation: 'string',
      prayerRequest: 'string',
      reconciled: 'string',
      visit: 'string',
      acceptChrist: 'string',
      note: 'string',
    },
  };
}
// 'data','Nome da Tribo','Nome','Endereco','Meio',
// 'Faixa Etaria','Possui biblia','Envangelico',
// 'Contato','Frequenta Igreja','Culto no lar',
// 'Estudo Biblico','Estudo a Confirmar','Pedido de Oracao',
// 'Reconciliou','Visita','Aceita a Cristo','Observacao'
