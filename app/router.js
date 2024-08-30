/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // router.get('/home', controller.home.index);

  // 在这里可以拿到config对象
  const { router, controller, config: {urls} } = app;
  // 用户相关
  router.post(urls.users.register, controller.users.register); // 注册

};
