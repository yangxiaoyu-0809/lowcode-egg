// app/service/common.js

const Service = require('egg').Service

class CommonService extends Service {
    // 根据用户名查询数据库中的数据
    async getUser(params){
        const {app} = this
        return await app.mysql.select('users', {
            where: {
                username: params.username
            }
        })
    }
}

module.exports = CommonService
