import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Navigation from './Navigation'
import Footer from './Footer'
import { Filter, Search, Star, Info } from 'lucide-react'

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: "Premium OG Kush",
      category: "flower",
      type: "Indica",
      thc: "22%",
      cbd: "1%",
      price: "$45",
      description: "Classic indica strain with earthy, pine flavors. Perfect for evening relaxation.",
      effects: ["Relaxing", "Sleepy", "Happy"],
      image: "/src/assets/aqgEhQYqu66r.webp"
    },
    {
      id: 2,
      name: "Sour Diesel",
      category: "flower",
      type: "Sativa",
      thc: "20%",
      cbd: "0.5%",
      price: "$40",
      description: "Energizing sativa with diesel aroma. Great for daytime use and creativity.",
      effects: ["Energetic", "Creative", "Uplifting"],
      image: "/src/assets/TqX6xLHYXA5U.jpg"
    },
    {
      id: 3,
      name: "Blue Dream",
      category: "flower",
      type: "Hybrid",
      thc: "18%",
      cbd: "2%",
      price: "$38",
      description: "Balanced hybrid with sweet berry flavors. Perfect for any time of day.",
      effects: ["Balanced", "Creative", "Relaxed"],
      image: "/src/assets/EjyugmVWcEGR.jpg"
    },
    {
      id: 4,
      name: "Mixed Berry Gummies",
      category: "edibles",
      type: "Hybrid",
      thc: "10mg each",
      cbd: "2mg each",
      price: "$25",
      description: "Delicious mixed berry gummies. 10 pieces per package.",
      effects: ["Long-lasting", "Relaxing", "Euphoric"],
      image: "/src/assets/iZBSoxOnctAt.jpg"
    },
    {
      id: 5,
      name: "Chocolate Bar",
      category: "edibles",
      type: "Indica",
      thc: "100mg total",
      cbd: "10mg total",
      price: "$30",
      description: "Premium dark chocolate bar divided into 10 squares (10mg each).",
      effects: ["Relaxing", "Sleepy", "Pain Relief"],
      image: "/src/assets/KEMKe4656ZwN.jpg"
    },
    {
      id: 6,
      name: "Live Resin Cart",
      category: "concentrates",
      type: "Hybrid",
      thc: "85%",
      cbd: "3%",
      price: "$55",
      description: "High-quality live resin vape cartridge with full spectrum terpenes.",
      effects: ["Potent", "Flavorful", "Fast-acting"],
      image: "/src/assets/ilfeLgNjpr0D.jpeg"
    },
    {
      id: 7,
      name: "Glass Pipe",
      category: "accessories",
      type: "Accessory",
      thc: "N/A",
      cbd: "N/A",
      price: "$35",
      description: "Hand-blown glass pipe with unique design. Easy to clean and durable.",
      effects: ["Smooth", "Durable", "Artistic"],
      image: "/src/assets/gfJPu5hzGHxZ.jpg"
    },
    {
      id: 8,
      name: "Storage Container",
      category: "accessories",
      type: "Accessory",
      thc: "N/A",
      cbd: "N/A",
      price: "$20",
      description: "Airtight storage container to keep your cannabis fresh and potent.",
      effects: ["Airtight", "UV Protection", "Odor-proof"],
      image: "/src/assets/UKTRyARUFC4L.jpg"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'flower', name: 'Flower', count: products.filter(p => p.category === 'flower').length },
    { id: 'edibles', name: 'Edibles', count: products.filter(p => p.category === 'edibles').length },
    { id: 'concentrates', name: 'Concentrates', count: products.filter(p => p.category === 'concentrates').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-cannabis-green text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Cannabis Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our carefully curated selection of lab-tested cannabis products
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id 
                    ? 'bg-cannabis-green hover:bg-cannabis-light-green' 
                    : 'border-cannabis-green text-cannabis-green hover:bg-cannabis-green hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cannabis-cream">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-cannabis-green" />
                <span className="text-cannabis-green font-semibold">
                  All products are lab-tested for potency and purity
                </span>
              </div>
              <div className="text-gray-600">
                Showing {filteredProducts.length} products
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="product-card bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-cannabis-green">{product.name}</CardTitle>
                    <Badge variant="secondary" className="bg-cannabis-gold text-white text-xs">
                      {product.type}
                    </Badge>
                  </div>
                  {product.category !== 'accessories' && (
                    <div className="flex space-x-2 text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        THC: {product.thc}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        CBD: {product.cbd}
                      </span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.effects.slice(0, 3).map((effect, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-cannabis-green text-cannabis-green">
                        {effect}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cannabis-green">{product.price}</span>
                    <Button size="sm" className="bg-cannabis-green hover:bg-cannabis-light-green">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-cannabis-green mb-8 text-center">
              Product Information & Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-cannabis-green">
                <CardHeader>
                  <CardTitle className="text-cannabis-green">Flower Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Premium cannabis flower from California's finest cultivators. Each strain is 
                    carefully selected for quality, potency, and unique characteristics.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Effects typically last 1-3 hours</li>
                    <li>• Can be smoked or vaporized</li>
                    <li>• Start with small amounts</li>
                    <li>• Store in cool, dry place</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-cannabis-green">
                <CardHeader>
                  <CardTitle className="text-cannabis-green">Edible Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Delicious and precisely dosed edibles for a controlled, long-lasting experience. 
                    Perfect for both new and experienced users.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Effects can last 4-8 hours</li>
                    <li>• Takes 30 minutes to 2 hours to onset</li>
                    <li>• Start low and go slow</li>
                    <li>• Keep away from children and pets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductsPage

