module.exports = app => {
    const {INTEGER, STRING, DATE, NOW} = app.Sequelize;
    const Group = app.model.define('group'/*自定义表名*/, {
        id: {
            type: INTEGER,
            primaryKey: true,       //主键
            autoIncrement: true,    //自增
            comment: "自增id"       //注释:只在代码中有效
        },
        //用户名
        name: {
            type: STRING
        },
        create_time: {
            type: DATE,
            defaultValue: NOW
        }
    }, {
        //使用自定义表名
        freezeTableName: true,
        //去掉默认的添加时间和更新时间
        timestamps: false,
        // indexes:[
        //     //普通索引,默认BTREE
        //     {
        //         unique: true,
        //         fields: ['pid']
        //     },
        // ]
    });

    //同步:没有就新建,有就不变
        Group.sync();
    //先删除后同步
    // Group.sync({
    //     force: true
    // });

    return Group;
}

