/**
 * 设置输出为json格式
 * 进行安全检查
 */
module.exports = function (ctx, next) {
  return async (ctx, next) => {
    ctx.type = 'application/json; charset=utf-8'
    await next()
  }
}