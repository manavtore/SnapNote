import { Realm } from '@realm/react';

export class Note extends Realm.Object {
  _id;
  title;
  content;
  createdAt;

  static Schemas = {
    name: 'Note',
    properties: {
      _id: 'objectId',
      title: 'string',
      content: 'string',
      createdAt: 'date',
    },
  };
}

export default [Note];
