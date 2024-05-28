
import Intro from './components/intro';
import Skills from './components/skills';
import Menu from './components/menu';
import Contact from './components/contact';
import MyWorks from './components/works';



export default function Home() {
   return (
      <main>
         <Menu />
         <Intro />
         <Skills />
         <MyWorks />
         <Contact />
      </main>
   );
}