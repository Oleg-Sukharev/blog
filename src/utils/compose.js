const compose = (...functs) => (comp) => {
    return functs.reduceRight(
        (wrapped,f) => f(wrapped), comp);
}

export default compose;