import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Signin() {
  return (
    <div className="px-10 py-20 my-48 w-max h-max mx-auto border border-black rounded-xl">
      <div className="pt-28 pb-16 text-center">
        <FontAwesomeIcon icon={faUser} size="3x" />
      </div>
      <div className="px-28 p-24 text-center">
        <h1 className="mb-5 font-semibold text-5xl">
          Islamabad Real Estates
        </h1>
        <p className="mb-12 font-mono text-md">
          Invest in Future
        </p>
        <form className="flex flex-col space-y-2" action="#" method="get">
          <input className="py-2 ps-3 rounded focus:outline-none" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" type="text" required />
          <input className="py-2 ps-3 rounded focus:outline-none" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" type="password" required />
          <button type="submit" className="py-1 px-3 hover:text-white hover:bg-black ease-in-out border border-black rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}