import './app.css'
import pfp from './vector.jpg'
import { BsGithub } from 'react-icons/bs';

function App() {
  return (
   <div className='font-roboto  bg-backcolor'>
     <main >
        <nav className="flex justify-between p-4 text-xl bg-navcolor text-navtextcolor ">
        <h1 className= ' text-gray-300  text-xl ' >
        Sameer Sahu
        </h1> 

        <ul>
          <li>
            <a className=' bg-black p-2 rounded ' href='#'>Resume</a>
          </li>
        </ul>
        </nav>   
    </main>

    <section className=' text-center border-4 border-sky-300 min-h-screen pt-20 text-lg  text-white '>


    <img src = {pfp} className=' h-60 w-50 rounded-full inline '></img>


    <div className=' px-6 '>
      <h1 className='text-3xl py-4'>Sameer Sahu</h1>
      <p className='text-xl'>I'm Sameer a Full Stack Developer and a CS grad. I like to build stuff </p>

   
    </div>
    < BsGithub className=' inline ' />
    
    </section>
   </div>

  );
}

export default App;
