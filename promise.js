function fun1(value){
    return new Promise(function(resolved){
        setTimeout(function(){
            resolved()

        },1000)
    })
}
function fun2(value){
    return new Promise(function(resolved){
        setTimeout(function(){
            resolved()

        },1000)
    })
}
function fun3(value){
    return new Promise(function(resolved){
        setTimeout(function(){
            resolved()

        },1000)
    })
}
fun1().then(function(){
    console.log("completed 1");

fun2().then(function(){
    console.log("completed 2");

fun3().then(function(){
    console.log("completed 3");
})
})
})