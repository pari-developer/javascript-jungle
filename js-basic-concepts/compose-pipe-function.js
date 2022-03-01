const pipe = (...fns) => (value) => {
    return fns.reduce((currentValue, currentFunction) => { 
        return currentFunction(currentValue) 
    }, value)
}


const compose = (...fns) => (value) => {
    return fns.reduceRight((currentValue, currentFunction) => { 
        return currentFunction(currentValue) 
    }, value)
}