let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");

function CelToFar(){
    let Output = ( parseFloat(Celsius.Value) * 9/5 ) + 32;
    Fahrenheit.Value = parseFloat(Output.toFixed(2));
}

function FarToCel(){
    let Output = ( parseFloat(Fahrenheit.Value) - 32) * 5/9;
    Celsius.Value = parseFloat( Output.toFixed(2));
    console.log(Output);
}