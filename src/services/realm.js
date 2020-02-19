import Realm from 'realm';

import DoorSchema from '../schemas/DoorSchema';
import ChildrenSchema from '../schemas/ChildrenSchema';
import SocialSchema from '../schemas/SocialScheme';

export default function getRealm() {
  return Realm.open({
    schema: [ChildrenSchema, DoorSchema, SocialSchema],
  });
}
