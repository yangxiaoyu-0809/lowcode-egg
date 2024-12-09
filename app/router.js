/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // router.get('/home', controller.home.index);

  // 在这里可以拿到config对象
  const { router, controller, config: {urls} } = app;
  // 用户相关
  router.post(urls.users.register, controller.users.register); // 注册

  /**
   * 区块相关
   */

  //获取区块列表
  router.get(urls.blocks.base, controller.block.listBlocks);
  //新建区块保存
  router.post(urls.blocks.base, controller.block.createBlock);
  //删除区块
  router.delete(urls.blocks.base+'/:id',controller.block.delBlock)
  //新建分组保存
  router.post(urls.groups.base, controller.group.addGroup);
  //获取分组列表
  router.get(urls.groups.base, controller.group.groupList)

  /**
   * 管理后台相关接口
   */
  //获取页面列表
  router.get(urls.pageMg.base, controller.pageMg.pageList)
  //新增页面保存
  router.post(urls.pageMg.base+'/add', controller.pageMg.addPage);
  //页面编辑
  router.post(urls.pageMg.base+'/edit', controller.pageMg.editPage);
  //根据id查询页面详细信息
  router.get(urls.pageMg.base+'/:id', controller.pageMg.pageInfo);

};
