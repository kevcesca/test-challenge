function dna(dnaString){
    const canonicalBases = ["C", "T", "A", "G"];
    const newString = "";
    
    for (let index = 0; index < dnaString.length; index++) {

        const canonicalBase = dnaString [index];
        if (canonicalBases.includes(canonicalBase.toUpperCase())) {
            newString += canonicalBase;
        }
    }
    return newString;
}





module.exports = dna;