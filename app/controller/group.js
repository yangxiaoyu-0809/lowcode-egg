'use strict';

const Controller = require('egg').Controller;

class GroupController extends Controller {
    async addGroup() {
        const { ctx } = this;
        const { group } = ctx.request.body;
        const result = await ctx.service.group.addGroup(group);
        ctx.logger.info('create block result: ', result);
        ctx.body = {
            code: 0,
            message: '新建分组成功',
        };
    }
    async groupList (){
        const { ctx } = this;
        const groups = await ctx.service.group.groupList();
        ctx.body = {
            code: 0,
            data: groups
        };
    }

}

module.exports = GroupController;
