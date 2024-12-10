function hello(name) {
    return typeof name !== 'string' || name.length === 0
        ? 'Hello, World!'
        : 'Hello, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!';
}

console.log(hello(1))
