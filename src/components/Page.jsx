import { Calculate } from './Pagetwo';


export function Page(props) {
  return (
    <div className='body'>
      <header>
            <h1 className='title'>{props.titulo}</h1>
      </header>
      <body >
        
        <img
          className='img' src="/src/components/images/mats.png" alt="Mats"
          style={{ margin: '0 auto' }}/>
        <p className='text'>{props.texto}</p>
        <Calculate />
      </body>
    </div>
  );
}