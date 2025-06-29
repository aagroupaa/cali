import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Leaf } from 'lucide-react'

const AgeGate = ({ onVerify }) => {
  const handleExit = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <div className="min-h-screen age-gate-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-cannabis-green p-3 rounded-full">
              <Leaf className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-cannabis-green">
            Welcome to Green Valley Cannabis
          </CardTitle>
          <CardDescription className="text-lg">
            Premium Cannabis Products for Adults 21+
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">
              By entering this website, you certify that you are 21 years of age or older 
              and agree to our Terms of Service and Privacy Policy.
            </p>
            <p className="mb-3">
              Cannabis products have not been evaluated by the FDA and are not intended 
              to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="font-semibold text-cannabis-green">
              Please consume responsibly.
            </p>
          </div>
          <div className="space-y-3">
            <Button 
              onClick={onVerify}
              className="w-full bg-cannabis-green hover:bg-cannabis-light-green text-white py-3 text-lg"
            >
              I am 21 or older - Enter Site
            </Button>
            <Button 
              onClick={handleExit}
              variant="outline"
              className="w-full border-cannabis-green text-cannabis-green hover:bg-cannabis-green hover:text-white py-3 text-lg"
            >
              I am under 21 - Exit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AgeGate

