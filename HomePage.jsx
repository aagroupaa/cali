import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navigation from './Navigation'
import Footer from './Footer'
import { 
  Leaf, 
  Shield, 
  Users, 
  Award, 
  MapPin, 
  Clock, 
  Phone,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react'

const HomePage = () => {
  const featuredProducts = [
    {
      name: "Premium OG Kush",
      type: "Indica",
      thc: "22%",
      price: "$45",
      image: "/src/assets/aqgEhQYqu66r.webp"
    },
    {
      name: "Sour Diesel",
      type: "Sativa", 
      thc: "20%",
      price: "$40",
      image: "/src/assets/TqX6xLHYXA5U.jpg"
    },
    {
      name: "Hybrid Gummies",
      type: "Edible",
      thc: "10mg",
      price: "$25",
      image: "/src/assets/iZBSoxOnctAt.jpg"
    }
  ]

  const trustIndicators = [
    {
      icon: Shield,
      title: "State Licensed",
      description: "Fully licensed California cannabis retailer"
    },
    {
      icon: Award,
      title: "Lab Tested",
      description: "All products tested for purity and potency"
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Knowledgeable budtenders to guide you"
    },
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Carefully curated, top-shelf products"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              California's Premier<br />
              <span className="text-cannabis-gold">Cannabis Destination</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover premium cannabis products in a welcoming, educational environment. 
              Licensed, tested, and trusted by our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cannabis-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg">
                Explore Our Menu
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cannabis-green px-8 py-4 text-lg">
                Learn About Cannabis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center slide-in">
                <div className="bg-cannabis-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <indicator.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-cannabis-green mb-2">{indicator.title}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-cannabis-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully curated, lab-tested, and ready for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="product-card bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-cannabis-green">{product.name}</CardTitle>
                    <Badge variant="secondary" className="bg-cannabis-gold text-white">
                      {product.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-cannabis-green">
                    THC: {product.thc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cannabis-green">{product.price}</span>
                    <Button className="bg-cannabis-green hover:bg-cannabis-light-green">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-cannabis-green hover:bg-cannabis-light-green text-white px-8 py-4">
              View Full Menu
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in">
              <h2 className="text-4xl font-bold text-cannabis-green mb-6">
                Your Trusted Cannabis Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Green Valley Cannabis, we're more than just a dispensary. We're your partners 
                in wellness, education, and responsible cannabis use. Our knowledgeable staff, 
                premium products, and commitment to safety make us California's most trusted 
                cannabis destination.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cannabis-green" />
                  <span className="text-gray-700">Licensed California cannabis retailer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cannabis-green" />
                  <span className="text-gray-700">Expert staff with extensive product knowledge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cannabis-green" />
                  <span className="text-gray-700">Commitment to community and education</span>
                </div>
              </div>
              <Button size="lg" className="bg-cannabis-gold hover:bg-yellow-600 text-white">
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="fade-in">
              <img 
                src="/src/assets/DLd0Lp1UTCBH.jpg" 
                alt="Green Valley Cannabis Dispensary Interior"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-cannabis-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Our Dispensary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-cannabis-gold" />
                  <div>
                    <div className="font-semibold">123 Cannabis Way</div>
                    <div className="text-gray-300">Los Angeles, CA 90210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-cannabis-gold" />
                  <div>
                    <div className="font-semibold">Store Hours</div>
                    <div className="text-gray-300">Mon-Sat: 9AM-9PM | Sun: 10AM-8PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-cannabis-gold" />
                  <div>
                    <div className="font-semibold">(555) 420-HERB</div>
                    <div className="text-gray-300">Call us for questions</div>
                  </div>
                </div>
              </div>
              <div className="bg-cannabis-light-green p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-cannabis-gold">What to Bring</h3>
                <p className="text-gray-200 mb-3">
                  Please bring a valid government-issued ID showing you are 21 or older. 
                  We accept cash and debit cards.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-cannabis-gold" />
                  <span className="font-semibold">First-time customers receive 10% off!</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p>123 Cannabis Way, Los Angeles, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage

