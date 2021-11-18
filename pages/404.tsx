import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-5/6">
      <h1 className="border-b-2 ">404 - Page not found</h1>
      <Link href="/">
        <p className="text-blue-400 cursor-pointer">back to home</p>
      </Link>
    </div>
  );
}
