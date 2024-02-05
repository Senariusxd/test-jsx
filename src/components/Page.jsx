import { calc } from "./Matsfunct";
import { sum, rest, div, multi } from "./Matsfunct";


export function Page(props) {
  return (
  
    <body className='body'>
      {/*Encabezado */}
      
      <title className='title'>{props.titulo}</title>

      {/*Cuerpo */}
      <img
        className='img' src="/src/components/images/mats.png" alt="Mats"
        style={{ margin: '0 auto' }}/>

      <p className='text'>{props.body}</p>
      
      <b className="list">Resultados:</b>
      <ol className="list">
      <b>(Los # utilizados son {(calc.n1)} y {(calc.n2)})</b>
        <li>Suma ={sum(calc.n1, calc.n2)}</li>
        <li>Resta ={rest(calc.n1, calc.n2)}</li>
        <li>Division ={div(calc.n1, calc.n2)}</li>
        <li>Multiplicacion ={multi(calc.n1, calc.n2)}</li>
      </ol>

      
      {/*Pies */}
      <footer>
        {props.footer}
      </footer>

    </body>
  );
}