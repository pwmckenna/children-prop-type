import { oneOfType, arrayOf } from 'prop-types';

export default type => oneOfType([
    arrayOf(type),
    type
]);
