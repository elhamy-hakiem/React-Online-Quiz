import Logo from '../assets/logo512.webp'
function Header() {
  return (
    <header className='app-header'>
      <img src={Logo} alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  )
}

export default Header
