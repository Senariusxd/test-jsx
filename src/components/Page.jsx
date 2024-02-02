import { Calculate } from './Pagetwo';


export function Page() {
  return (
    <body>
      <div className="photo">
        <img src="/src/components/images/mats.png" alt="Mats" />
        <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Adipisci, dolore quia! Ipsum perferendis accusantium error.</p>
      </div>
      <Calculate />
    </body>
  );
}
