import "./app.css";
import pfp from "./vector.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode, SiDiscord } from "react-icons/si";

const x = "<Sameer Sahu/>";

function App() {
  return (
    <div className="font-roboto  bg-backcolor py-2 ">
      <main className="mx-2">
        <nav className="flex justify-between p-4 text-xl bg-navcolor text-navtextcolor  max-w-screen-md m-auto rounded-3xl   ">
          <h1 className=" text-gray-300  text-xl  ">Sameer Sahu</h1>

          <ul>
            <li>
              <a
                className=" bg-black px-3 py-2 rounded-full  hover:text-white"
                href="https://github.com/SameerSahu007/resume/raw/main/sameersahu(1).pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <section className=" text-center np  pt-20 text-lg np min-h-screen text-white max-w-screen-md m-auto  ">
        <img src={pfp} className=" h-60 w-50 rounded-full inline "></img>

        <div className=" px-8  m-auto ">
          <h1 className="text-3xl py-4 text-namecolor ">{x}</h1>
          <p className="text-xl">
            I'm Sameer a Full Stack Developer and a CS grad.
          </p>
          <p className="text-xl"> I love to code and build projects :) </p>
        </div>

        <div className="text-4xl  flex pt-10 justify-center gap-10  ">
          <a href="https://github.com/SameerSahu007">
            <BsGithub className="hover:scale-150 hover:text-namecolor" />
          </a>
          <a href="https://www.linkedin.com/in/sameerx86/">
            <BsLinkedin className="hover:scale-150 hover:text-namecolor" />
          </a>
          <a href="https://leetcode.com/sameerx86/">
            {" "}
            <SiLeetcode className="hover:scale-150 hover:text-namecolor" />
          </a>
          <a href="discordapp.com/users/1033794257657536642">
            <SiDiscord className="hover:scale-150 hover:text-namecolor" />
          </a>
        </div>
      </section>

      <section className=" text-center  text-lg np min-h-screen text-white max-w-screen-md m-auto ">
        <h1 className="text-4xl  text-namecolor  ">My Skills 🛠️</h1>
     
      </section>
    </div>
  );
}

export default App;
