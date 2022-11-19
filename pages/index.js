import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Dashboard/>
      <Login/>
    </div>
  )
}
