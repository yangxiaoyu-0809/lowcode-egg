/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // router.get('/home', controller.home.index);

  // 在这里可以拿到config对象
  const { router, controller, config: {urls} } = app;
  // 用户相关
  router.post(urls.users.register, controller.users.register); // 注册

  //区块相关
  //获取区块列表
  router.get(urls.blocks.base, controller.block.listBlocks);
  //新建区块保存
  router.post(urls.blocks.base, controller.block.createBlock);
  //新建分组保存
  router.post(urls.groups.base, controller.group.addGroup);
  //获取分组列表
  router.get(urls.groups.base, controller.group.groupList)
};
