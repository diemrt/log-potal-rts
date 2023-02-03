function sayHi(name: string | null){
    if(name !== null){   
        return `Hi ${name}`;
    }
    return 'Loading...';
}

export default sayHi;