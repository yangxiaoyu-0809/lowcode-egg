const { Service } = require('egg');

class PageMgService extends Service {
    constructor(app) {
        super(app);
        const {ctx} = this;
        this.PageMg = ctx.model.PageMg;
    }

    async pageList(params) {
        const {ctx} = this;
        return this.PageMg.findAll();
    }
    async addPage(params) {
        return this.PageMg.create(params);
    }
    //根据id获取页面详细信息
    async getPageInfoById(id){
        try {
            const info = await this.PageMg.findByPk(id);
            if (info) {
                return info;
            }
            console.log('未找到信息');
            return null;
        } catch (error) {
            console.error('查询出错:', error);
            return null;
        }
    }
    //编辑页面
    async editPage(params) {
        const { ctx } = this;
        let { id } = params
        return this.PageMg.update(params, { where: { id } });
    }
}

module.exports = PageMgService;
