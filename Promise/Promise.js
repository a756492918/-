/**
 * Promise演示
 * @param {*} a = 1 
 * @returns {object} 返回值为Promise对象
 */
function async (a=1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a)
        }, 500);
    })
}

/**
 * promise是一个构造函数
 * new Promise 参数传递一个函数 resolve和 reject 成功和失败的函数
 * 异步成功后通过resolve()调用resolve方法
 * 通过.then方法设置resolve函数
 */
async(1).then(res=>{
    console.log(res);
    return async(2)
}).then(res=>{
    console.log(res);
})


/** 
 * async await使用
 * 这两种方法使用比.then更简洁
 */
async function as() {
    const data = await async (3)
    const data1 = await async (4)
    const data2 = await async (5)
    const data3 = await async (6)
    console.log(data, data1, data2, data3);
}

as()