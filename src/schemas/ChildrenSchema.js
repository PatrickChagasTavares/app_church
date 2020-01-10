export default class ChildrenSchema {
  static schema = {
    name: 'children',
    primaryKey: 'id',
    propertie: {
      id: {type: 'int', indexed: true},
      data: 'date',
      total: 'string',
      Note: 'string',
    },
  };
}
// 'Data','Total','Observacao'
