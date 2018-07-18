class FastCache {
    constructor() {
        this.list = {};
    }
    set(key, value){
        this.list[key] = value;
    }
    get(key) {
        return this.list[key];
    }
    clear(){
        this.list = {};
    }
}

export default FastCache;
//window.FastCache = FastCache;
