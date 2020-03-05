import './style/style.css';
import $ from "jquery";
import Func from "./script/func";
import line from "./script/line";

$(".btn").click(function () {
    // let fnc = new Func($(".func").val())
    // console.log(fnc.run(5));
    let fnc = new line($(".func").val())
    console.log(fnc.doIt())
})