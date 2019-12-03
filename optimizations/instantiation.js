'ust strict';
const itemFactory = (hello, size, flag) => ({ hello, size, flag });

const callFactory = () => itemFactory('world', 100500, true);