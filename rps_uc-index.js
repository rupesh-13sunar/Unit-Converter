/////////////////////
//CONVERSION RULE
/*
Length>>>
1 metre = 3.28084 feets || 1 feet = 0.3048 metres
Volume>>>
1 litre = 0.2199693 gallons || 1 gallon = 4.54609 litres
Mass>>>
1 kilo = 2.204623 pounds || 1 pound = 0.4535924 kilos
*/
/////////////////////
const changeTheme = theme => document.documentElement.classList.toggle(theme); //toogle theme
/////GLOBAL VARIABLE
const input = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
/////converison function
    //length
    const mToFt = x => {
        let y = (x * 3.28084);
        y = parseFloat(y.toFixed(3));
        return y;
    };
    const ftToM = x => {
        let y = (x / 3.28084);
        y = parseFloat(y.toFixed(3));
        return y;
    };
    //volume
    const ltrToGln = x => {
        let y = (x * 0.2199693);
        y = parseFloat(y.toFixed(3));
        return y;
    };
    const glnToLtr = x => {
        let y = (x / 0.2199693);
        y = parseFloat(y.toFixed(3));
        return y;
    };
    //mass
    const kgToLbs = x => {
        let y = (x * 2.204623);
        y = parseFloat(y.toFixed(3));
        return y;
    };
    const lbsToKg = x => {
        let y = (x / 2.204623);
        y = parseFloat(y.toFixed(3));
        return y;
    };
/////
function lengthData() {
    let a = input.valueAsNumber;
    let tempData = `${a} metres = ${mToFt(a)} feets | ${a} feets = ${ftToM(a)} metres`;
    length.textContent = tempData;
};
function volumeData() {
    let a = input.valueAsNumber;
    let tempData = `${a} litres = ${ltrToGln(a)} gallons | ${a} gallons = ${glnToLtr(a)} litres`;
    volume.textContent = tempData;
};
function massData() {
    let a = input.valueAsNumber;
    let tempData = `${a} kilograms = ${kgToLbs(a)} pounds | ${a} pounds = ${lbsToKg(a)} kilograms`;
    mass.textContent = tempData;
};
/////////////////////////////
/* function mainProcess() {
    let getInput = input.valueAsNumber;
    length.textContent = "";
    volume.textContent = "";
    mass.textContent = "";
    let operation;
    function writeConversion(type, unitFrom, unitTo) {
        type = document.getElementById(type);
        // unitFrom = '' + unitFrom;
        // unitTo = '' + unitTo;
        /* if (type === 'length') {
            if ( unitFrom === 'metres' && unitTo === 'feets') {
                operation = mToFt(getInput);
            } else if( unitFrom === 'feets' && unitTo === 'metres') {
                operation = ftToM(getInput);
            } else {operation = 0;}
        } else if (type === 'volume') {
            if ( unitFrom === 'litres' && unitTo === 'gallons') {
                operation = ltrToGln(getInput);
            } else if ( unitFrom === 'gallons' && unitTo === 'litres') {
                operation = glnToLtr(getInput);
            } else {operation = 0;}
        } else if(type === 'mass') {
            if ( unitFrom === 'kilograms' && unitTo === 'pounds') {
                operation = kgToLbs(getInput);
            } else if ( unitFrom === 'pounds' && unitTo === 'kilograms'){
                operation = lbsToKg(getInput);
            } else {operation = 0;}
        } else {operation = 1}; 
        ////////
        if (type === 'length') {
            if ( unitFrom === 'metres' ) {
                operation = mToFt(getInput);
            } else  {
                operation = ftToM(getInput);
            } 
        } else if (type === 'volume') {
            if ( unitFrom === 'litres' ) {
                operation = ltrToGln(getInput);
            } else  {
                operation = glnToLtr(getInput);
            } 
        } else {
            if ( unitFrom === 'kilograms' ) {
                operation = kgToLbs(getInput);
            } else {
                operation = lbsToKg(getInput);
            } 
        } 
         let tempContent = ` ${getInput} ${unitFrom} = ${operation} ${unitTo} | `;
        type.textContent +=  tempContent;
    };
    writeConversion('length', 'metres', 'feets');
    writeConversion('length', 'feets', 'metres');
    writeConversion('volume', 'litres', 'gallons');
    writeConversion('volume', 'gallons', 'litres');
    writeConversion('mass', 'kilograms', 'pounds');
    writeConversion('mass', 'pounds', 'kilograms');
    // console.log(getInput);
    //  console.log(typeof(getInput));
    // console.log(typeof(mToFt(getInput)));
    // console.log(ftToM(getInput));
}; 
*/
////////////////////////////
function mainProcess() {
    length.textContent = "";
    volume.textContent = "";
    mass.textContent = "";

    lengthData();
    volumeData();
    massData();
};