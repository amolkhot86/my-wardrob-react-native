import Realm from 'realm';

export const UserSchema = {
  name: 'User',
  primaryKey: 'userID',
  properties: {
    userID:{ type: 'int'},
    userName: { type: 'string'},
    isLastUser: { type: 'bool'},
  }
}