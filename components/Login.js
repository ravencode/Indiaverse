import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();
    return <div className="bg-black relative text-white">
        <h1>
            I'm the login screen
        </h1>
        <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center
        space-y-4">
            

            {/* Logo */}
            <Image 
            className="object-contain"
            src="https://i.imgur.com/jxEfQxN.png" 
            height={100} width={450}
            />
            {/* Login Button */}
            <button onClick={authenticate} 
            className="bg-black rounded-lg p-2.5 font-bold animate-pulse">Login to the METAVERSE</button>
        </div>

        <div className="w-full h-screen">
            <Image 
            src="https://i.imgur.com/DQa7V16.jpg" layout="fill" objectFit="cover"/>
        </div>
    </div>
}

export default Login;
