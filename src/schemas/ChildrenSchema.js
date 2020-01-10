export default class ChildrenSchema {
  static schema = {
    name: 'children',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      data: 'date',
      total: 'int',
      note: 'string',
    },
  };
}
// 'Data','Total','Observacao'
