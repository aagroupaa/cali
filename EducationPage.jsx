import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Navigation from './Navigation'
import Footer from './Footer'
import { 
  Leaf, 
  Clock, 
  Shield, 
  AlertTriangle, 
  BookOpen, 
  Users,
  Heart,
  Brain,
  Zap,
  Moon
} from 'lucide-react'

const EducationPage = () => {
  const cannabinoids = [
    {
      name: "THC",
      fullName: "Tetrahydrocannabinol",
      description: "The primary psychoactive compound in cannabis responsible for the 'high' feeling.",
      effects: ["Euphoria", "Relaxation", "Pain Relief", "Appetite Stimulation"]
    },
    {
      name: "CBD",
      fullName: "Cannabidiol",
      description: "Non-psychoactive compound known for its potential therapeutic benefits.",
      effects: ["Anti-inflammatory", "Anxiety Relief", "Pain Management", "Seizure Control"]
    },
    {
      name: "CBG",
      fullName: "Cannabigerol",
      description: "Often called the 'mother cannabinoid' as other cannabinoids derive from it.",
      effects: ["Antibacterial", "Neuroprotective", "Appetite Stimulation", "Eye Pressure Relief"]
    }
  ]

  const consumptionMethods = [
    {
      method: "Smoking",
      onset: "Immediate",
      duration: "1-3 hours",
      description: "Traditional method using pipes, joints, or bongs.",
      pros: ["Fast onset", "Easy to control dosage", "Familiar method"],
      cons: ["Respiratory irritation", "Strong odor", "Short duration"]
    },
    {
      method: "Vaporizing",
      onset: "1-5 minutes",
      duration: "1-3 hours",
      description: "Heating cannabis to release cannabinoids without combustion.",
      pros: ["Healthier than smoking", "Better flavor", "Efficient"],
      cons: ["Requires device", "Learning curve", "Initial cost"]
    },
    {
      method: "Edibles",
      onset: "30 minutes - 2 hours",
      duration: "4-8 hours",
      description: "Cannabis-infused food products like gummies, chocolates, and beverages.",
      pros: ["Long-lasting", "Discreet", "No respiratory effects"],
      cons: ["Delayed onset", "Easy to overconsume", "Harder to control"]
    },
    {
      method: "Tinctures",
      onset: "15-45 minutes",
      duration: "2-4 hours",
      description: "Liquid cannabis extracts taken sublingually (under the tongue).",
      pros: ["Precise dosing", "Fast onset", "Discreet"],
      cons: ["Taste", "Requires measurement", "Less familiar"]
    }
  ]

  const strainTypes = [
    {
      type: "Indica",
      icon: Moon,
      description: "Known for relaxing, sedating effects. Often used in the evening.",
      effects: ["Relaxation", "Sleep Aid", "Pain Relief", "Stress Reduction"],
      bestFor: "Evening use, relaxation, sleep, pain management"
    },
    {
      type: "Sativa",
      icon: Zap,
      description: "Known for energizing, uplifting effects. Great for daytime use.",
      effects: ["Energy", "Creativity", "Focus", "Mood Enhancement"],
      bestFor: "Daytime use, creativity, social activities, exercise"
    },
    {
      type: "Hybrid",
      icon: Heart,
      description: "Combination of indica and sativa genetics for balanced effects.",
      effects: ["Balanced", "Versatile", "Customizable", "Moderate"],
      bestFor: "Any time of day, versatile use, balanced experience"
    }
  ]

  const safetyTips = [
    "Start with a low dose and increase gradually",
    "Wait at least 2 hours before taking more edibles",
    "Never drive under the influence of cannabis",
    "Keep all cannabis products away from children and pets",
    "Store products in original packaging in a cool, dry place",
    "Don't mix cannabis with alcohol or other substances",
    "Stay hydrated and have snacks available",
    "Use in a comfortable, familiar environment",
    "Have a sober friend present if you're new to cannabis",
    "Know your limits and respect them"
  ]

  const faqs = [
    {
      question: "How much cannabis should I take as a beginner?",
      answer: "For flower, start with just a small puff and wait 15 minutes to assess effects. For edibles, start with 2.5-5mg THC and wait at least 2 hours before taking more. Remember: you can always take more, but you can't take less once consumed."
    },
    {
      question: "How long do the effects of cannabis last?",
      answer: "Effects vary by consumption method. Smoking/vaping effects typically last 1-3 hours, while edibles can last 4-8 hours. Factors like tolerance, body weight, and metabolism also influence duration."
    },
    {
      question: "What's the difference between medical and recreational cannabis?",
      answer: "The products are often the same, but medical cannabis may have different tax rates and possession limits. Medical patients may also have access to higher potency products and different product types."
    },
    {
      question: "Can I travel with cannabis?",
      answer: "Cannabis remains federally illegal, so you cannot travel across state lines or internationally with cannabis. Within California, you can transport cannabis in a sealed container in your vehicle, but cannot consume it in public or while driving."
    },
    {
      question: "What should I do if I take too much?",
      answer: "Stay calm, find a comfortable place to rest, stay hydrated, and remember that the effects are temporary. Consider taking CBD if available, as it may help counteract THC effects. If you feel seriously unwell, don't hesitate to seek medical attention."
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-cannabis-green text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cannabis Education Center</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn about cannabis, its effects, and how to use it responsibly
          </p>
        </div>
      </section>

      {/* Cannabis 101 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Cannabis 101: The Basics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cannabis, also known as marijuana, is a plant that contains over 100 different compounds 
              called cannabinoids. Understanding these compounds and how they work is key to a positive cannabis experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cannabinoids.map((cannabinoid, index) => (
              <Card key={index} className="border-cannabis-green">
                <CardHeader>
                  <CardTitle className="text-cannabis-green text-2xl">{cannabinoid.name}</CardTitle>
                  <CardDescription className="font-semibold">{cannabinoid.fullName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{cannabinoid.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-cannabis-green">Potential Effects:</p>
                    <div className="flex flex-wrap gap-2">
                      {cannabinoid.effects.map((effect, idx) => (
                        <Badge key={idx} variant="outline" className="border-cannabis-green text-cannabis-green">
                          {effect}
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

      {/* Strain Types */}
      <section className="py-16 bg-cannabis-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Understanding Strain Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cannabis strains are typically classified into three main categories, each with distinct characteristics and effects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strainTypes.map((strain, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-cannabis-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <strain.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-cannabis-green text-2xl">{strain.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{strain.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-cannabis-green mb-2">Common Effects:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {strain.effects.map((effect, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-cannabis-gold text-white">
                            {effect}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-cannabis-green mb-2">Best For:</p>
                      <p className="text-sm text-gray-600">{strain.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consumption Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Consumption Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are several ways to consume cannabis, each with different onset times, duration, and effects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consumptionMethods.map((method, index) => (
              <Card key={index} className="border-cannabis-green">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-cannabis-green text-xl">{method.method}</CardTitle>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Onset: {method.onset}</div>
                      <div className="text-sm text-gray-600">Duration: {method.duration}</div>
                    </div>
                  </div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-green-600 mb-2">Pros:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {method.pros.map((pro, idx) => (
                          <li key={idx}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-2">Cons:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {method.cons.map((con, idx) => (
                          <li key={idx}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 bg-cannabis-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Safety and Responsible Use</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Your safety is our top priority. Follow these guidelines for a positive cannabis experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className="bg-cannabis-light-green p-4 rounded-lg flex items-start space-x-3">
                <Shield className="h-5 w-5 text-cannabis-gold mt-1 flex-shrink-0" />
                <p className="text-white">{tip}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-red-600 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-white" />
              <h3 className="text-xl font-bold text-white">Important Reminders</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <p>• Cannabis is for adults 21+ only</p>
              <p>• Keep away from children and pets</p>
              <p>• Don't drive under the influence</p>
              <p>• Consume only in private spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cannabis-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about cannabis use, effects, and safety.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-cannabis-green">
                  <AccordionTrigger className="px-6 py-4 text-left text-cannabis-green font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cannabis-green mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continue your cannabis education with these helpful resources and tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-cannabis-green">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-cannabis-green mx-auto mb-4" />
                <CardTitle className="text-cannabis-green">Cannabis Glossary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn the terminology and language of cannabis with our comprehensive glossary.
                </p>
                <Badge className="bg-cannabis-green text-white">Coming Soon</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center border-cannabis-green">
              <CardHeader>
                <Users className="h-12 w-12 text-cannabis-green mx-auto mb-4" />
                <CardTitle className="text-cannabis-green">Monthly Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our monthly educational workshops for hands-on learning and Q&A sessions.
                </p>
                <Badge className="bg-cannabis-gold text-white">Register In-Store</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center border-cannabis-green">
              <CardHeader>
                <Brain className="h-12 w-12 text-cannabis-green mx-auto mb-4" />
                <CardTitle className="text-cannabis-green">Dosage Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Use our dosage calculator to find the right amount for your experience level.
                </p>
                <Badge className="bg-cannabis-green text-white">Coming Soon</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EducationPage

