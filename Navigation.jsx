import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Leaf, Menu, Phone, MapPin, Clock } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Top Bar */}
      <div className="bg-cannabis-green text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(555) 420-HERB</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>123 Cannabis Way, Los Angeles, CA</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>Mon-Sat: 9AM-9PM | Sun: 10AM-8PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-cannabis-green p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-cannabis-green">Green Valley</div>
                <div className="text-sm text-cannabis-gold">Cannabis</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cannabis-green border-b-2 border-cannabis-green'
                      : 'text-gray-700 hover:text-cannabis-green'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-cannabis-gold hover:bg-yellow-600 text-white">
                Shop Now
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          isActive(item.path)
                            ? 'text-cannabis-green'
                            : 'text-gray-700 hover:text-cannabis-green'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Button className="bg-cannabis-gold hover:bg-yellow-600 text-white mt-4">
                      Shop Now
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation

