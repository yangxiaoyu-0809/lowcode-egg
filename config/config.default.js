/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const urls = require('./urls.js')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1723772377490_6686';

  // add your middleware config here
  //注册公共错误处理方法
  config.middleware = ['errorHandler']
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //设置请求地址
  config.urls = urls

  const mysql = {
    client: {
      //host
      host: "localhost",
      //port
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "root123",
      // 数据库
      database: "egg_test",
    },
    app: true,
    agent: false,
  };

  const cors = {
    // 这里是允许所有的跨域请求，如有需要可自己查阅文档进行特殊配置
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  };

  const security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  return {
    ...config,
    ...userConfig,
    mysql,
    cors,
    security
  };
};
