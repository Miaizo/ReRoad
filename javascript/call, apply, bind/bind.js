var name = "佚名";
var age = 20;
global.name = "佚名"
global.age =20 

var p1 = {
    name: "张三",
    age: 12,
    func: function(){
        console.log(`姓名:${this.name},年龄:${this.age}`)
    }
}

var p2 = {
	name: "李四",
	age: 15
}

p1.func()
p1.func.call(p2)
p1.func.apply(global)
p1.func.bind(p2)()

