// 原型链继承
function Parent() {
    this.name = 'name'
    this.children = ['A', 'B', 'C']
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Children() {

}

// Children.prototype = new Parent()
// const child = new Children()
// child.getName()

