const Nav = () => {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between p-10 md:h-screen gap-10'>
      <div className='gap-10 flex flex-col items-center'>
        <h1 className='text-6xl'>Jake H.</h1>
        <h2 className='text-2xl md:text-4xl'>Frontend Web Developer</h2>
        <p className='text-xl'>
          I build creative solutions to real world problems with modern web
          technologies.
        </p>
      </div>
      <nav>
        <ul className='flex gap-5 text-lg'>
          <li className='hover:text-teal-900'>
            <a href='#about'>About</a>
          </li>
          <li className='hover:text-teal-900'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='hover:text-teal-900'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='hover:text-teal-900'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
