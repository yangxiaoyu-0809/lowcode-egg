// app/middleware/errorHandler.js
module.exports = () => {
    return async (ctx, next) => {
        // const req = ctx.request;
        // const res = ctx.response;
        try{
            await next()
        }catch(err){
            console.log('捕捉到了错误', err);
            // 处理字段校验错误
            if(err.status === 422 && err.message === 'Validation Failed'){
                ctx.body = ctx.fail(err.message, err.errors)
            }else if(err.sql) {
                // 处理数据库报错
                ctx.body = ctx.fail('MySQL Error', err.sqlMessage)
            }else if(err.status === 401 && err.name === 'UnauthorizedError') {
                ctx.body = ctx.fail('UnauthorizedError', err.message)
            }else {
                ctx.body = ctx.fail('Unknow Error', err)
            }
        }
    };
};
