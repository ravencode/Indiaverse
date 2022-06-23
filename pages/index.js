import Sidebar from "../components/Sidebar"
import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis"

const styles = {
  container: `h-full w-full flex bg-[#fff]`
}
export default function Home() {
  
  const { isAuthenticated, logout} = useMoralis();
  
  // const isAuthenticated = false;
  if(!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>KrifVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
