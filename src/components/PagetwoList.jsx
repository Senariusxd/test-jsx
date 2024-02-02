import {sum, rest, div, multi} from './Mate'
import {calc} from './PagetwoCalc'

export function List() {
    return (
        <ul>
            <li>{sum(calc.n1, calc.n2)}</li>
            <li>{rest(calc.n1, calc.n2)}</li>
            <li>{div(calc.n1, calc.n2)}</li>
            <li>{multi(calc.n1, calc.n2)}</li>
        </ul>
    );
}