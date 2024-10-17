const { Service } = require('egg');

class GroupService extends Service {
    // 这里使用的是egg-Sequelize 绑定model，暂时注释，先改为手动普通方法
    constructor(app) {
        super(app);
        const {ctx} = this;
        this.Group = ctx.model.Group;
    }

    async groupList(params) {
        const {ctx} = this;
        return this.Group.findAll();
    }
    async addGroup(params) {
        return this.Group.create(params);
    }
}

module.exports = GroupService;
