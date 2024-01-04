
class Note{
    static Schemas={
        name:"Note",
        properties: {
            _id: 'objectId',
            title: 'string',
            content: 'string',
            createdAt: 'date',
          },
    }
}

export default [Note];