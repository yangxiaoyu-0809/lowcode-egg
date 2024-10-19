const { Service } = require('egg');
const Op = require('Sequelize').Op

class BlockService extends Service {
    // 这里使用的是egg-Sequelize 绑定model，暂时注释，先改为手动普通方法
    constructor(app) {
        super(app);
        const { ctx } = this;
        this.Block = ctx.model.Block;
    }

    async listBlock(params) {
        const { ctx } = this;
        return this.Block.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${params}%` } },
                    { groupName: { [Op.like]: `%${params}%` } }
                ]
            },
            order:[
                "groupId",   //根据id排序
                ["groupId","desc"]//根据id倒序
            ],
        });
    }
    // async getBlockByPk(id) {
    //     return this.Block.findByPk(id);
    // }
    async createBlock(params) {
        const { ctx } = this;
        params.created_at= ctx.cTime();
        params.updated_at= ctx.cTime();
        return this.Block.create(params);
    }
    // async updateBlock(id, file) {
    //     const { ctx } = this;
    //     return this.Block.update(file, { where: { id } });
    // }
    //删除区块
    async deleteBlock(id) {
        const { ctx } = this;
        return this.Block.destroy({ where: { id } });
    }

    // 查询表中的区块列表
    // async listBlock(params){
    //     const {app} = this
    //     console.log('获取到的传过来的查询数据',params)
    //     const TABLE_NAME = 'block';
    //     const QUERY_STR = 'title';
    //     let sql = `select ${QUERY_STR} from ${TABLE_NAME} where title like "%${params}%"`;
    //
    //     return await app.mysql.query(sql)
    //
    //
    // }
    // //新建区块
    // async createBlock(params) {
    //     const { ctx, app } = this;
    //     console.log('获取到的传过来的数据',params)
    //     return await app.mysql.insert('block', {
    //         created_at: ctx.cTime(),
    //         updated_at: ctx.cTime(),
    //         ...params
    //     })
    // }

}

module.exports = BlockService;




