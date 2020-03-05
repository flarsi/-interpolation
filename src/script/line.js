import Func from "./func";

export default class line{
    constructor(func) {
        this.func = new Func(func)
        this.firstDot = this.func.findInterval()[0]
        this.secondDot = this.func.findInterval()[1]
    }


    doIt(firstX = this.firstDot["x"], secondX = this.secondDot["x"]){
        let fX = this.func.run(firstX)
        let mX = this.func.run((firstX+secondX)/2)
        let sX = this.func.run(secondX)

        const lengthAfterDot = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

        console.log(firstX)

        if(lengthAfterDot(firstX) < 5) {
            if (fX > 0 && mX < 0 || fX < 0 && mX > 0) {
                this.doIt(firstX, (firstX+secondX)/2)
            } else if (mX > 0 && sX < 0 || mX < 0 && sX > 0) {
                this.doIt((firstX+secondX)/2, secondX)
            }
        }
    }
}