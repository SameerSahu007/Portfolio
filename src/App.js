import './app.css'
import pfp from './chrollo.jpg'

function App() {
  return (
   <div className='font-jetbrains'>
     <main >
        <nav className="flex justify-between p-4 text-xl bg-blue-900 text-white ">
        <h1 >
        Sameer Sahu
        </h1> 

        <ul>
          <li>
            <a className=' bg-black p-2 rounded ' href='#'>Resume</a>
          </li>
        </ul>
        </nav>   
    </main>

    <section className=' text-center border-4 border-sky-500 min-h-screen pt-20 text-purple-600 text-lg  '>

      <img src = {pfp} className=' object-scale-down h-48 w-96 inline '></img>

      <h1 className='text-3xl py-4'>Hello 🖐</h1>
      <p className='text-2xl'>I am Sameer a Full Stack Developer and a Computer Science Student.</p>
    </section>
   </div>

  );
}

export default App;
