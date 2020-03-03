import './style/style.css';
import $ from "jquery";


import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

$(".btn").click(function () {
    console.log(math.evaluate($(".func").val()))
})