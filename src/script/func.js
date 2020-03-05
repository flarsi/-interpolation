import $ from "jquery";
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

export default class Func {
    constructor(func) {
        this.func = func;
    }

    run(x){
        let str = this.func.split("")
        let arr = str.map(function (e) {
            if(e == "x"){
                return x
            }else return e
        });
        return math.eval(arr.join(''))
    }

    findInterval(){
        let temp = ''
        let str = this.func.split("")
        for (let i = -10; i < 10; i++){
            let arr = str.map(function (e) {
                if(e == "x"){
                    return i
                }else return e
            })
            if(temp < 0 && math.eval(arr.join('')) > 0 || temp > 0 && math.eval(arr.join('')) < 0){
                return [
                    {"x" : i-1, "y" : temp},
                    {"x" : i, "y" :  math.eval(arr.join(''))}
                ]
            }else
            temp = math.eval(arr.join(''))
        }
    }
}