const { Controller } = require('egg');

class HomeController extends Controller {
  async index() { // async await 异步
    const dataList = await this.data();
    this.ctx.body = {
      code: 0,
      masg: 'success!',
      data: dataList,
    };
  }

  data() {
    return new Promise(resolve => {
      setTimeout(() => { // 用定时器模拟异步请求
        const data = [
          { id: 1, name: 'xiaoming', age: 11 },
          { id: 2, name: 'xiaohong', age: 22 },
          { id: 3, name: 'xiaogang', age: 33 },
        ];
        resolve(data);
      }, 1000);
    });
  }
}

module.exports = HomeController;
