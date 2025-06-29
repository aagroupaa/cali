import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navigation from './Navigation'
import Footer from './Footer'
import { 
  Users, 
  Award, 
  Heart, 
  Shield, 
  Target, 
  CheckCircle,
  Star,
  Leaf
} from 'lucide-react'

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Store Manager",
      experience: "5+ years",
      specialties: ["Product Knowledge", "Customer Service", "Compliance"],
      image: "/src/assets/gvASiouOmMne.jpg"
    },
    {
      name: "Mike Chen",
      role: "Lead Budtender",
      experience: "4+ years",
      specialties: ["Strain Expertise", "Medical Cannabis", "Education"],
      image: "/src/assets/YueBmIEGGoTY.jpg"
    },
    {
      name: "Jessica Rodriguez",
      role: "Cannabis Consultant",
      experience: "3+ years",
      specialties: ["New User Guidance", "Product Matching", "Wellness"],
      image: "/src/assets/S1v3NyRN8qZc.jpg"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety and well-being of our customers through rigorous testing and quality control."
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "We're committed to supporting our local community and promoting responsible cannabis use."
    },
    {
      icon: Target,
      title: "Education",
      description: "We believe in empowering our customers with knowledge to make informed decisions about cannabis."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in product selection and customer service."
    }
  ]

  const certifications = [
    "California Cannabis Retailer License",
    "State Board of Equalization Permit",
    "Local Business License",
    "Fire Department Clearance",
    "Building & Safety Permit"
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-cannabis-green text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Green Valley Cannabis</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in cannabis wellness and education since 2018
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-cannabis-green mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Green Valley Cannabis was born from a passion for providing safe, 
                  high-quality cannabis products to the California community. Our founders, longtime 
                  advocates for cannabis legalization and education, recognized the need for a dispensary 
                  that prioritized customer education, product quality, and community wellness.
                </p>
                <p>
                  What started as a small storefront has grown into one of California's most respected 
                  cannabis retailers, but our core values remain unchanged: transparency, education, 
                  quality, and community. We believe that cannabis can enhance lives when used responsibly, 
                  and we're committed to helping our customers make informed decisions about their cannabis journey.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers who trust us for our expertise, 
                  quality products, and commitment to their wellness. We're not just a dispensary – 
                  we're your partners in cannabis education and responsible use.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <img 
                src="/src/assets/gvASiouOmMne.jpg" 
                alt="Green Valley Cannabis Store"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-cannabis-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide safe, high-quality cannabis products while educating our community about 
              responsible use and the benefits of cannabis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-cannabis-green hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-cannabis-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-cannabis-green">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team consists of certified cannabis consultants, each with extensive knowledge 
              about cannabis products, effects, and consumption methods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-cannabis-green">{member.name}</CardTitle>
                  <CardDescription className="text-cannabis-gold font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="border-cannabis-green text-cannabis-green">
                      {member.experience} Experience
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-700">Specialties:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-cannabis-cream text-cannabis-green">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-cannabis-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Commitment to Quality</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Every product in our dispensary undergoes rigorous testing for potency, pesticides, 
                  heavy metals, and microbials. We partner only with licensed cultivators and 
                  manufacturers who share our commitment to excellence.
                </p>
                <p>
                  Our products are stored in optimal conditions to maintain freshness and potency. 
                  We regularly audit our supply chain to ensure consistent quality and safety standards.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cannabis-gold" />
                  <span>Third-party lab testing for all products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cannabis-gold" />
                  <span>Climate-controlled storage facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cannabis-gold" />
                  <span>Regular quality audits and inspections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cannabis-gold" />
                  <span>Partnerships with premium cultivators</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cannabis-green mb-6">Certifications & Licenses</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-cannabis-gold" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-cannabis-cream rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Leaf className="h-5 w-5 text-cannabis-green" />
                  <span className="font-semibold text-cannabis-green">Licensed Retailer</span>
                </div>
                <p className="text-sm text-gray-600">
                  License #C10-0000123-LIC issued by the California Department of Cannabis Control
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-cannabis-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Community Involvement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to be an active member of the Los Angeles community, supporting local 
              initiatives and promoting cannabis education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-cannabis-green">Educational Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We host monthly educational workshops covering cannabis basics, consumption methods, 
                  and responsible use for both new and experienced users.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-cannabis-green">Local Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We partner with local businesses and organizations to support community events 
                  and promote economic growth in our neighborhood.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-cannabis-green">Charitable Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We donate a portion of our profits to local charities and organizations that 
                  support social equity and community development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage

