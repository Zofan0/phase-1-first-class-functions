function receivesAFunction (n) {
    n();
}

function returnsANamedFunction () {
    const a = () => {};
    return a;
}

function returnsAnAnonymousFunction () {
    return function () {};
}