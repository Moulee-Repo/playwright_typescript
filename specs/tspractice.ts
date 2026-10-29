class sample {

    public id: any;

    constructor(para: any){
        this.id = para
        console.log('constructor')
    }

    func1() {
        console.log(this.id)
    }

    static fuc2<a>(paraid: a){
        console.log(paraid)
    }
}

class sample2 extends sample {
    public id2: any;

    // ✅ super() must live inside a constructor
    constructor(para2: any) {
        super(para2); // Passes 2345 to the parent 'sample' constructor
        this.id2 = para2;
    }

    func3(){
        console.log(this.id2);
    }
}

var obj = new sample2(234)
console.log('created obj')
obj.func1()
obj.func3()
sample.fuc2(456)
console.log(obj.id)

