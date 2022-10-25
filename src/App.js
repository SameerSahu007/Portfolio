import './app.css'
import pfp from './vector.jpg'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode, SiDiscord } from 'react-icons/si'


const x  = '<Sameer Sahu/>'

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
            <a className=' bg-black px-3 py-2 rounded-full  hover:text-white' href='https://github.com/SameerSahu007/resume/raw/main/sameersahu(1).pdf'>Resume</a>
          </li>
        </ul>
        </nav>   
    </main>

    <section className=' text-center np min-h-screen pt-20 text-lg  text-white '>


    <img src = {pfp} className=' h-60 w-50 rounded-full inline '></img>


    <div className=' px-8  m-auto '>
      <h1 className='text-3xl py-4 text-fuchsia-500 '>{x}</h1>
      <p className='text-xl'>I'm Sameer a Full Stack Developer and a CS grad. I love to code and build projects :) </p>

   
    </div>


    <div className='text-4xl  flex py-8 justify-center gap-10  '>

    <a href='https://github.com/SameerSahu007'><BsGithub  className='hover:text-blue-600 hover:text-5xl'/></a>
    <a href='https://www.linkedin.com/in/sameerx86/'><BsLinkedin className='hover:text-blue-600 hover:text-5xl' /></a>
    <a href='https://leetcode.com/sameerx86/'> <SiLeetcode className='hover:text-blue-600 hover:text-5xl' /></a>
    <a href='discordapp.com/users/1033794257657536642'><SiDiscord  className='hover:text-blue-600 hover:text-5xl'/></a>

    
   
   

    </div>
   


    </section>
   </div>

  );
}

export default App;
