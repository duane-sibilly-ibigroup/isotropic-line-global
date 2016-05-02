import _line from 'isotropic-line';

Reflect.defineProperty(typeof GLOBAL === 'undefined' ? typeof window === 'undefined' ? {} : window : GLOBAL, '__line', {
    get () {
        return _line(1);
    }
});

export default _line;
