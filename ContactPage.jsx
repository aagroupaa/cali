import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Navigation from './Navigation'
import Footer from './Footer'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  CreditCard,
  Star,
  Navigation as NavigationIcon,
  MessageCircle,
  Send
} from 'lucide-react'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Cannabis Way", "Los Angeles, CA 90210"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 420-HERB", "Call for questions"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@greenvalleycannabis.com", "We respond within 24 hours"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Mon-Sat: 9:00 AM - 9:00 PM", "Sunday: 10:00 AM - 8:00 PM"],
      action: "View Calendar"
    }
  ]

  const visitInfo = [
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "We accept cash and debit cards. ATM available on-site."
    },
    {
      icon: Car,
      title: "Parking",
      description: "Free parking available in our secure lot behind the building."
    },
    {
      icon: Star,
      title: "First-Time Discount",
      description: "New customers receive 10% off their first purchase."
    },
    {
      icon: NavigationIcon,
      title: "Easy to Find",
      description: "Look for our green and gold signage on Cannabis Way."
    }
  ]

  const directions = [
    {
      from: "Downtown LA",
      route: "Take I-10 West to Exit 15, turn right on Cannabis Way",
      time: "15 minutes"
    },
    {
      from: "Hollywood",
      route: "Take US-101 South to Exit 8, left on Cannabis Way",
      time: "20 minutes"
    },
    {
      from: "Santa Monica",
      route: "Take I-10 East to Exit 15, left on Cannabis Way",
      time: "25 minutes"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-cannabis-green text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Green Valley Cannabis</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help with all your cannabis needs. Visit us, call, or send a message.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-cannabis-green">
                <CardHeader>
                  <div className="bg-cannabis-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-cannabis-green">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={idx === 0 ? "font-semibold text-gray-800" : "text-gray-600 text-sm"}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="border-cannabis-green text-cannabis-green hover:bg-cannabis-green hover:text-white">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Visit Info */}
      <section className="py-16 bg-cannabis-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-cannabis-green mb-6">Find Us</h2>
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Interactive Map</p>
                  <p className="text-lg">123 Cannabis Way, Los Angeles, CA 90210</p>
                </div>
              </div>
              
              {/* Directions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cannabis-green">Directions</h3>
                {directions.map((direction, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-cannabis-green">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-cannabis-green">From {direction.from}</p>
                        <p className="text-gray-600 text-sm">{direction.route}</p>
                      </div>
                      <Badge variant="outline" className="border-cannabis-green text-cannabis-green">
                        {direction.time}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Information */}
            <div>
              <h2 className="text-3xl font-bold text-cannabis-green mb-6">What to Know Before You Visit</h2>
              <div className="space-y-6">
                {visitInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-cannabis-green">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cannabis-green p-3 rounded-full">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cannabis-green mb-2">{info.title}</h3>
                        <p className="text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Bring */}
              <div className="mt-8 bg-cannabis-green text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cannabis-gold rounded-full"></div>
                    <span>Valid government-issued ID (must be 21+)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cannabis-gold rounded-full"></div>
                    <span>Cash or debit card for payment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cannabis-gold rounded-full"></div>
                    <span>Questions for our knowledgeable staff</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-cannabis-light-green rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-cannabis-gold" />
                    <span className="font-semibold">First-time customers get 10% off!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cannabis-green mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Have questions? We're here to help. Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <Card className="border-cannabis-green">
              <CardHeader>
                <CardTitle className="text-cannabis-green flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact Form</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Your first name" className="border-cannabis-green focus:ring-cannabis-green" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="border-cannabis-green focus:ring-cannabis-green" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-cannabis-green focus:ring-cannabis-green" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="border-cannabis-green focus:ring-cannabis-green" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="What can we help you with?" className="border-cannabis-green focus:ring-cannabis-green" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your question or how we can help..."
                    rows={5}
                    className="border-cannabis-green focus:ring-cannabis-green"
                  />
                </div>
                
                <Button className="w-full bg-cannabis-green hover:bg-cannabis-light-green text-white py-3">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours. For urgent matters, please call us at (555) 420-HERB.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Hours Highlight */}
      <section className="py-16 bg-cannabis-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Store Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-cannabis-gold mb-4">Monday - Saturday</h3>
              <p className="text-2xl font-bold">9:00 AM - 9:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cannabis-gold mb-4">Sunday</h3>
              <p className="text-2xl font-bold">10:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg">
              We're open 7 days a week to serve you. Holiday hours may vary.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage

