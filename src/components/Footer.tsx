import Link from 'next/link';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className='flex flex-col items-center p-10'>
      <p>
        <Link href='/'>hink.dev</Link>
      </p>
      <p>{year}</p>
    </div>
  );
};

export default Footer;
