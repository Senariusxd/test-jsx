import {sum, rest, div, multi} from './Mate'
import {calc} from './PagetwoCalc'

export function List() {
    return (
        <ol>
            <b>Los utilizados son {(calc.n1)} y {(calc.n2)}</b>
            <li>Suma ={sum(calc.n1, calc.n2)}</li>
            <li>Resta ={rest(calc.n1, calc.n2)}</li>
            <li>Division ={div(calc.n1, calc.n2)}</li>
            <li>Multiplicacion ={multi(calc.n1, calc.n2)}</li>
        </ol>
    );
}