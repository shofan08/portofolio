import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

function Navbar() {
  const [statusTampil, setStatusTampil] = useState('');
  const [activeSection, setActiveSection] = useState('');

  const tampilMenu = () => {
    setStatusTampil(prev => (prev === '' ? 'tampil' : ''));
  };

  // 🔍 Scroll Spy Logic
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  // ✅ Panggil sekali di awal agar state langsung di-set
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <nav>
      <div className="wrapper animate__animated animate__fadeInDown  animate__delay-1s">
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={activeSection === 'project' ? 'active' : ''}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className={activeSection === 'skill' ? 'active' : ''}
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
