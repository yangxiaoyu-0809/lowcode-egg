// 这次我们扩展的是 context 的功能，也就是等会会经常使用到的 ctx
/*
    之后我们在设置返回值的时候都是通过
    ctx.body = {
        ... 一些需要返回的数据
    }
    我们可以把这些东西给统一封装起来
*/
// app/extend/context.js
const { v4: uuidv4 } = require('uuid');
const sd = require('silly-datetime');
module.exports = {
    // 在这里规范一些返回数据的格式
    // 成功
    success(msg = "操作成功", data = null) {
        const isObj = typeof msg === "object";
        isObj && (data = msg);
        return {
            errno: 0,
            message: isObj ? "操作成功" : msg,
            data: data
        };
    },
    // 返回一个分页列表
    page(msg = "操作成功", data = null) {
        const isObj = typeof msg === "object";
        isObj && (data = msg);
        return {
            errno: 0,
            message: isObj ? "操作成功" : msg,
            ...data
        };
    },
    // 失败
    fail(message = "操作失败", data = null) {
        const isObj = typeof message === "object";
        isObj && (data = message)
        return {
            errno: 1,
            message: isObj ? "操作失败" : message,
            data: data
        };
    },
    cTime() {
        // 返回当前的时间
        return  sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');
    },
    uuid() {
        return uuidv4().replace("-", "").substr(0, 12);
    }
}
