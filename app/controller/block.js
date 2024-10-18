'use strict';

const Controller = require('egg').Controller;

class BlockController extends Controller {

    async listBlocks() {
        const { ctx } = this;
        console.log('ctx1111', ctx.query);
        const { search } = ctx.query;
        const blocks = await ctx.service.block.listBlock(search);

        let dataArr = [];
        blocks.map(async (mapItem) => {
            let index = dataArr.findIndex((item) => item.groupId === mapItem.groupId);
            if (index === -1) {
                dataArr.push({
                    groupName: mapItem.groupName,
                    groupId: mapItem.groupId,
                    list: [mapItem],
                });
            } else {
                dataArr[index].list.push(mapItem);
            }
        });

        let newList= dataArr;

        ctx.body = {
            code: 0,
            data: newList
        };
    }

    async getBlock() {
        const { ctx } = this;
        const { id } = ctx.params;
        const block = await ctx.service.block.getBlockByPk(id);
        ctx.body = {
            code: 0,
            data: block,
        };
    }
    async createBlock() {
        const { ctx } = this;
        const { block } = ctx.request.body;
        const result = await ctx.service.block.createBlock(block);
        ctx.logger.info('create block result: ', result);
        ctx.body = {
            code: 0,
            message: '创建区块成功',
        };
    }
    async updateBlock() {
        const { ctx } = this;
        ctx.logger.info('in update block');
        const { id } = ctx.params;
        const { block } = ctx.request.body;
        ctx.logger.info('update block id: %s, block: %s', id, block);
        const result = await ctx.service.block.updateBlock(id, block);
        ctx.logger.info('update block result: ', result);
        ctx.body = {
            code: 0,
            message: '更新区块成功',
        };
    }
    async deleteBlock() {
        const { ctx } = this;
        const { id } = ctx.params;
        const result = await ctx.service.block.deleteBlock(id);
        ctx.logger.info('delete block result: ', result);
        ctx.body = {
            code: 0,
            message: '删除区块成功',
        };
    }

}



module.exports = BlockController;
