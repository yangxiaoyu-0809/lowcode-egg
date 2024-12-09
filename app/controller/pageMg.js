'use strict';

const Controller = require('egg').Controller;

class PageMgController extends Controller {
    //新增页面
    async addPage() {
        const { ctx } = this;
        const { page } = ctx.request.body;
        const result = await ctx.service.pageMg.addPage(page);
        ctx.logger.info('create block result: ', result);
        ctx.body = {
            code: 0,
            message: '新建页面成功',
        };
    }
    //页面列表
    async pageList (){
        const { ctx } = this;
        const pages = await ctx.service.pageMg.pageList();
        ctx.body = {
            code: 0,
            data: pages
        };
    }
    //根据id查询页面详细信息
    async pageInfo (){
        const { ctx } = this;
        const { id } = ctx.params;
        const info = await ctx.service.pageMg.getPageInfoById(id);
        ctx.body = {
            code: 0,
            data: info,
        };
    }
    //编辑页面
    async editPage () {
        const { ctx } = this;
        const page = ctx.request.body;
        const result = await ctx.service.pageMg.editPage(page);
        ctx.body = {
            code: 0,
            message: '保存成功',
        };
    }


}

module.exports = PageMgController;
