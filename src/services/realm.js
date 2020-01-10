import Realm from 'realm';

import DoorSchema from '../schemas/DoorSchema';
import ChildrenSchema from '../schemas/ChildrenSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ChildrenSchema, DoorSchema],
  });
}
