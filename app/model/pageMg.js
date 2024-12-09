module.exports = app => {
    const {INTEGER, STRING, DATE, NOW, TEXT} = app.Sequelize;
    const PageMg = app.model.define('page'/*自定义表名*/, {
        id: {
            type: INTEGER,
            primaryKey: true,       //主键
            autoIncrement: true,    //自增
            comment: "自增id"       //注释:只在代码中有效
        },
        //页面名称
        name: STRING,
        //功能描述
        describe: STRING,
        //页面Schema
        schema: TEXT,
        create_time: {
            type: DATE,
            defaultValue: NOW
        },
        updated_time: DATE,
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
    PageMg.sync();
    //先删除后同步
    // Group.sync({
    //     force: true
    // });

    return PageMg;
}

