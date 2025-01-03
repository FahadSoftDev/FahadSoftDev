console.log("hellos")

const apple = 24
const orange = 25
console.log(apple + orange)

class automobile {
    constructor(name, cc) {
        this.name = name;
        this.cc = cc;
    }
    engine() {
        console.log(`${this.name} 
      has ${this.cc} engine`);
    }
}

class car extends automobile {
    engine() {
        console.log(this.name,
            &quot;has &quot;, this.cc, &quot;cc engine&quot;);
    }
}

let carz = new car('Rex', &quot;1149&quot;);
carz.engine();
