// Navbar.jsx
const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <h1>Task Manager</h1>
      <ul>
        <li>
          <a href="#tasks" onClick={() => handleScroll('tasks')}>
            Your Tasks
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleScroll('about')}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleScroll('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
