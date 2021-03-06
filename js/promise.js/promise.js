function MyPromise(callback) {
    var self = this
    // 记录状态null 为pending ，true 为resolve , false 为reject
    var state = null
    // 记录resolve,reject 的参数
    var param = null
    // then方法返回的promise对象的resolve 和 reject
    var nextResolve = null
    var nextReject = null
    // 记录 then 方法的参数 ，onFulfilled ，onReject
    var asynconFulfilled = null
    var asynconReject = null


    //执行并改变promise对象的状态
    callback(resolve, reject)

    // then 方法
    this.then = function (onFulfilled, onReject) {
        // 返回一个新的 promise 对象
        return new self.constructor(function (resolve, reject) {
            // 判断异步代码是否执行完毕 (是否resolve 或者 reject)
            // 如果执行完毕，就在 .then 方法里面立即执行 否则的话 就将参数记录下来，
            // 等待state就绪再执行 xx函数
            if (state === true) {
                doAsynconFulfilled(onFulfilled, resolve, reject)
            } else if (state === false) {
                doAsynconReject(onReject, resolve, reject)
            } else {
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconReject = onReject
            }
        })
    }
    //resolve 方法
    function resolve(data) {
        state = true
        param = data
        if (nextResolve) {
            doAsynconFulfilled(asynconFulfilled, nextResolve, nextReject);
        }
    }

    //reject 方法
    function reject(err) {
        state = false
        param = err
        if (nextReject) {
            doAsynconReject(asynconReject, nextResolve, nextReject)
        }
    }

    function doAsynconFulfilled(onFulfilled, resolve, reject) {
        window.setTimeout(function () {
            //判断onFulfilled 是否为function，不是则忽略
            if (typeof onFulfilled === 'function') {
                //执行 onFulfilled 方法获取返回值 promise()
                var promise = onFulfilled(param)
                //如果promise 为undefined，执行if
                // 如果promise 为 Mypromise 对象 执行 else if
                //如果promise 为 非Mypromise 对象 执行 else
                if (promise === undefined) {
                    resolve(param)
                } else if (promise.constructor === self.constructor) {
                    // 等待传递进来的 promise 对象执行完毕 ，然后根据传递进来
                    // 的 promise 对象的状态执行 resolve 或者 reject
                    promise.then(function (param) {
                        resolve(param)
                    }, function (param) {
                        reject(param)
                    })
                } else {
                    // 直接执行 .then 方法 返回对象的 resolve
                    resolve(promise)
                }
            } else {
                resolve(param)
            }
        }, 0)
    }

    function doAsynconReject(onReject, resolve, reject) {
        window.setTimeout(function(){
            if(onReject === 'function') {
                var promise = onReject(param)
                if (promise === undefined) {
                    reject(param)
                } else if (promise.constructor === self.constructor){
                    promise.then(function(param){
                        resolve(param)
                    },function(param){
                        reject(param)
                    })
                } else {
                    reject(promise)
                }
            } else {
                reject(param)
            }
        },0)
    }
}