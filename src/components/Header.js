import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id='header'>
      <Link to='/'>
        <h1>TMDB</h1>
      </Link>
      <nav id='gnb'>
        <h2 className='blind'>gnb</h2>
      </nav>
    </header>
  );
}
