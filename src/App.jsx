import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Stats     from './components/Stats'
import Dashboard from './components/Dashboard'
import Features  from './components/Features'
import Footer    from './components/Footer'
import Divider   from './components/Divider'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Divider />
      <Dashboard />
      <Divider />
      <Features />
      <Footer />
    </>
  )
}
