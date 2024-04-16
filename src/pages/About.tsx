import Navbar from '../components/navbar';
import '../style/globals.css';
function About() {
  return (
    <>
    <Navbar />
    <main id="main">
      <h1 className="text-4xl">About</h1>
      <p className="paragraph">
        This project is intended to be a monolithic app, for educational purposes.<br/>
        It's primarily intended to help me get into the swing of react development, <br/>
        As nearly every react project Ive built followed a tutorial, and I need to<br/>
        practice using this tool to bring my own ideas to life. 
      </p>
    </main>
    </>
  )
}

export default About