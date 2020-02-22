export default class DoorSchema {
  static schema = {
    name: 'Social',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      data: 'date',
      namePerson: 'string',
      address: 'string',
      type: {type: 'string', default: 'LV'},
      age: {type: 'string', default: ''},
      bible: {type: 'string', default: ''},
      evangelical: {type: 'string', default: ''},
      contact: {type: 'string', default: ''},
      frequentsChurch: {type: 'string', default: ''},
      cultHome: {type: 'string', default: ''},
      studyBible: {type: 'string', default: ''},
      studyConfimation: {type: 'string', default: ''},
      prayerRequest: {type: 'string', default: ''},
      reconciled: {type: 'string', default: ''},
      visit: {type: 'string', default: ''},
      acceptChrist: {type: 'string', default: ''},
      medical: {type: 'string', default: ''},
      optician: {type: 'string', default: ''},
      pressure: {type: 'string', default: ''},
      glucose: {type: 'string', default: ''},
      aesthetics: {type: 'string', default: ''},
      cuttingHair: {type: 'string', default: ''},
      hairstyle: {type: 'string', default: ''},
      Nail: {type: 'string', default: ''},
      Eyebrow: {type: 'string', default: ''},
      note: {type: 'string', default: ''},
    },
  };
}
// 'data','Nome da Tribo','Nome','Endereco','Meio',
// 'Faixa Etaria','Possui biblia','Envangelico',
// 'Contato','Frequenta Igreja','Culto no lar',
// 'Estudo Biblico','Estudo a Confirmar','Pedido de Oracao',
// 'Reconciliou','Visita','Aceita a Cristo','Observacao'