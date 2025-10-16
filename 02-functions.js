function onRandomGeneration(f){
    const r = Math.random()
    f(r)
}

onRandomGeneration(function(r){
    if (r < 0.5){
        console.log("Plus grand que 0.5")
    } else {
        console.log("Plus petit que 0.5")
    }
})

onRandomGeneration(function(r) {
    console.log("Valeur générée :", r)
})