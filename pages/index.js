// import Sidebar from "../components/Sidebar"
import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis"
import React from "react";
import VideoPlayer from "react-background-video-player";
// import myVideo from "C:/Users/bhara/Music/Indiaverse/assets/vid.mp4";



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
        <title>IndiaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoPlayer
        className="video"
        src={
          "https://cdn-cf-east.streamable.com/video/mp4/k2ej0k.mp4?Expires=1656280920&Signature=V5jnPdQu~LDZxD-a1ANK0som6V9aPIkV8dfArDTibqxW8SoEAqAoxnCXD1Jb2i3B9fFddWLWeT6D5c5AL4v-Li4uqAvMNFMBdFKBto48xgbBWl5wiPj55tEf4pX5z6HmqYxd8FWlweepcBI0PKfIdHMhDBYN9cm1xuDWsarHiwi-2cWdEhRLzxoQXRrw09Q3sjz9iQ2vVOFJ0AEFtE6Qtb5kezI5haKdUyWak7zF0zLCnqj1RyxCq7Vzwa6QHxte9mJmTmAzLziEe99KmD89A9iOO-0Gg~hCqwLCy23ksoMvWQsA-sL-SDsLr63QdUWMn~hhcPnirlvrki2vhOk7OA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
        }
        autoPlay={true}
        muted={false}
      />
      <div className='flex absolute z-50 w-full right-0
        space-y-4'>
        {/* <h1>Welcome to the App</h1> */}
        <button className="font-bold text-white"onClick={logout}>Logout</button>
      </div>
      
    </div>
  )
}
