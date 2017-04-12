console.log(`Starting notes.js`)

// Every file has an object called as module.
// it has a property called as exports through which we can export any variable/functions to other files by requiring in them.Every
// console.log(module);

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};

module.exports.add = (a,b) => {
    if(a && b){
        return a+b;
    }else{
        console.error("Bad Add request");
    }
};
