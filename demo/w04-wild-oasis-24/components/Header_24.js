import Navigation_24 from '@/components/Navigation_24';
import Logo_24 from '@/components/Logo_24';

function Header_24() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_24 />
        <Navigation_24 />
      </div>
    </header>
  );
}

export default Header_24;
