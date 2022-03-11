import * as ReactDOM from 'react-dom';
import { Header } from './Header';

window.addEventListener(type: 'load', listener: () => {
    ReactDOM.render(<Header />, document.getElementById(elementId: 'react_root'));
})
