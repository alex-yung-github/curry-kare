"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Minus, ShoppingCart } from "lucide-react"

interface Ingredient {
  id: string
  name: string
  price: number
  category: string
}

const ingredients: Ingredient[] = [
  // Broth
  { id: "pork-broth", name: "Pork", price: 0, category: "broth" },
  { id: "beef-broth", name: "Beef", price: 0, category: "broth" },
  { id: "chicken-broth", name: "Chicken", price: 0, category: "broth" },
  { id: "dashi-broth", name: "Dashi", price: 0, category: "broth" },

  // Protein
  { id: "pork-protein", name: "Pork", price: 2.00, category: "protein" },
  { id: "beef-protein", name: "Beef", price: 2.50, category: "protein" },
  { id: "chicken-protein", name: "Chicken", price: 2.00, category: "protein" },
  { id: "tofu-protein", name: "Tofu", price: 1.50, category: "protein" },

  // Carb
  { id: "white-rice", name: "White rice", price: 0, category: "carb" },
  { id: "brown-rice", name: "Brown rice", price: 0.50, category: "carb" },
  { id: "vermicelli", name: "Vermicelli", price: 0.50, category: "carb" },
  { id: "rice-noodles", name: "Rice noodles", price: 0.50, category: "carb" },

  // Toppings
  { id: "potatoes", name: "Potatoes", price: 0.75, category: "toppings" },
  { id: "carrots", name: "Carrots", price: 0.75, category: "toppings" },
  { id: "onions", name: "Onions", price: 0.50, category: "toppings" },
  { id: "turnips", name: "Turnips", price: 0.75, category: "toppings" },
  { id: "shiitake", name: "Shiitake", price: 1.00, category: "toppings" },
  { id: "scallions", name: "Scallions", price: 0.50, category: "toppings" },

  // Special Proteins
  { id: "pork-cutlets", name: "Pork cutlets", price: 3.50, category: "special-protein" },
  { id: "chicken-cutlets", name: "Chicken cutlets", price: 3.00, category: "special-protein" },
]

const categories = [
  { id: "broth", name: "Broth", required: true, multiple: false },
  { id: "protein", name: "Protein", required: true, multiple: false },
  { id: "carb", name: "Carb", required: true, multiple: false },
  { id: "toppings", name: "Toppings", required: false, multiple: true },
  { id: "special-protein", name: "Special Proteins", required: false, multiple: false },
]

export default function MenuPage() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [orderCount, setOrderCount] = useState(1)

  const basePrice = 8.99

  const toggleIngredient = (ingredientId: string, category: string) => {
    const categoryInfo = categories.find(c => c.id === category)

    if (categoryInfo?.multiple) {
      // Multiple selection allowed
      setSelectedIngredients(prev =>
        prev.includes(ingredientId)
          ? prev.filter(id => id !== ingredientId)
          : [...prev, ingredientId]
      )
    } else {
      // Single selection only
      setSelectedIngredients(prev => {
        const filtered = prev.filter(id => {
          const ing = ingredients.find(i => i.id === id)
          return ing?.category !== category
        })
        return prev.includes(ingredientId) ? filtered : [...filtered, ingredientId]
      })
    }
  }

  const getSelectedIngredientsForCategory = (category: string) => {
    return selectedIngredients.filter(id => {
      const ingredient = ingredients.find(i => i.id === id)
      return ingredient?.category === category
    })
  }

  const calculateTotal = () => {
    const ingredientTotal = selectedIngredients.reduce((total, id) => {
      const ingredient = ingredients.find(i => i.id === id)
      return total + (ingredient?.price || 0)
    }, 0)
    return (basePrice + ingredientTotal) * orderCount
  }

  const getSelectedIngredientNames = () => {
    return selectedIngredients.map(id => {
      const ingredient = ingredients.find(i => i.id === id)
      return ingredient?.name
    }).filter(Boolean).join(", ")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Build Your Curry Bowl
          </h1>
          <p className="text-xl text-gray-600">
            Choose your ingredients and create the perfect curry
          </p>
          <div className="mt-4">
            <Badge className="bg-orange-600 text-white text-lg px-4 py-2">
              Base Price: ${basePrice.toFixed(2)}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredient Selection */}
          <div className="lg:col-span-2 space-y-8">
            {categories.map((category) => (
              <Card key={category.id} className="border-2 border-gray-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-2xl text-gray-900">
                      {category.name}
                      {category.required && <span className="text-red-500 ml-1">*</span>}
                    </span>
                    <Badge variant="outline" className="text-sm">
                      {category.multiple ? "Multiple allowed" : "Choose one"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {ingredients
                      .filter(ingredient => ingredient.category === category.id)
                      .map((ingredient) => {
                        const isSelected = selectedIngredients.includes(ingredient.id)
                        return (
                          <div
                            key={ingredient.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                              isSelected
                                ? "border-orange-500 bg-orange-50"
                                : "border-gray-200 hover:border-orange-300"
                            }`}
                            onClick={() => toggleIngredient(ingredient.id, category.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                checked={isSelected}
                                onChange={() => {}}
                                className="pointer-events-none"
                              />
                              <div className="flex-1">
                                <Label className="text-lg font-medium cursor-pointer">
                                  {ingredient.name}
                                </Label>
                                {ingredient.price > 0 && (
                                  <div className="text-orange-600 font-semibold">
                                    +${ingredient.price.toFixed(2)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-orange-200">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-2xl">Your Order</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Curry Bowl</h3>
                    <div className="text-sm text-gray-600 mb-4">
                      {getSelectedIngredientNames() || "No ingredients selected"}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold">Quantity</span>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setOrderCount(Math.max(1, orderCount - 1))}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{orderCount}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setOrderCount(orderCount + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-2xl font-bold text-orange-600">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6"
                        disabled={!getSelectedIngredientsForCategory("broth").length ||
                                 !getSelectedIngredientsForCategory("protein").length ||
                                 !getSelectedIngredientsForCategory("carb").length}
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Order Confirmation</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p>Your curry bowl has been added to cart!</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-semibold">Order Summary:</p>
                          <p className="text-sm text-gray-600">{getSelectedIngredientNames()}</p>
                          <p className="text-lg font-bold text-orange-600 mt-2">
                            Total: ${calculateTotal().toFixed(2)}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1" onClick={() => setSelectedIngredients([])}>
                            Build Another
                          </Button>
                          <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
