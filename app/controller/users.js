const Controller = require('egg').Controller

class UsersController extends Controller {
    // 注册
    async register(){
        const { ctx, service } = this
        /*
            ctx就是上下文对象
            service是我们之后会写的查询数据库的方法

            ctx.request.body : 获取前台传递过来的参数
            ctx.body : 设置返回数据
        */
        const params = ctx.request.body;
        if (!params.username) {
            return (ctx.body = ctx.fail("用户名不能为空"));
        } else if (!params.password) {
            return (ctx.body = ctx.fail("密码不能为空"));
        }
        // 先检查用户是否存在
        const res = await service.common.getUser(ctx.request.body);
        if (res.length) {
            return (ctx.body = ctx.fail("用户已存在"));
        }

        const data = await service.users.register(params);
        if (data.affectedRows === 1) {
            ctx.body = ctx.success("新增用户成功");
        } else {
            ctx.body = ctx.fail("新增用户失败");
        }
    }
}

module.exports = UsersController
