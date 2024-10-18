module.exports = app => {
    const { INTEGER, STRING, DATE, TEXT } = app.Sequelize;

    const Block = app.model.define('block', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: STRING,
        title: STRING,
        groupId: INTEGER,
        groupName: STRING,
        screenshot: TEXT,
        schema: TEXT,
        remark:STRING,
        created_at: DATE,
        updated_at: DATE,
    }, {
        tableName: 'block',
    });
    return Block;
};
