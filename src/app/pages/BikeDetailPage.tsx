import { useParams, Link } from 'react-router';
import { bikes } from '../data/bikes';
import { Star, ArrowLeft, Heart, Share2, CheckCircle, Gauge, Weight, Settings, Wrench, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';

export function BikeDetailPage() {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === id);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [rentalDuration, setRentalDuration] = useState<'day' | 'week'>('day');

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bike not found</h1>
          <Link to="/bikes">
            <Button>Back to Bikes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRentBike = () => {
    if (!bike.available) {
      toast.error('This bike is currently rented');
      return;
    }
    toast.success(`${bike.name} added to your rentals!`);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleShare = () => {
    toast.success('Link copied to clipboard!');
  };

  const price = rentalDuration === 'day' ? bike.pricePerDay : bike.pricePerWeek;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[500px]">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-4 sm:left-8">
          <Link to="/bikes">
            <Button variant="secondary" className="gap-2">
              <ArrowLeft className="size-4" />
              Back
            </Button>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-8 right-4 sm:right-8 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleBookmark}
            className={isBookmarked ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
          >
            <Heart className={`size-5 ${isBookmarked ? 'fill-white' : ''}`} />
          </Button>
          <Button variant="secondary" size="icon" onClick={handleShare}>
            <Share2 className="size-5" />
          </Button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 capitalize bg-white text-gray-900">
                {bike.type}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {bike.name}
              </h1>
              <div className="flex items-center gap-4 text-white">
                <p className="text-xl">{bike.brand}</p>
                <div className="flex items-center gap-1">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{bike.rating}</span>
                  <span className="text-gray-200">({bike.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Bike</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {bike.description}
                </p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Gauge className="size-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Frame Size</p>
                      <p className="text-gray-600">{bike.specifications.frameSize}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Weight className="size-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Weight</p>
                      <p className="text-gray-600">{bike.specifications.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="size-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Gears</p>
                      <p className="text-gray-600">{bike.specifications.gears}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="size-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Brakes</p>
                      <p className="text-gray-600">{bike.specifications.brakes}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Wheel Size</p>
                      <p className="text-gray-600">{bike.specifications.wheelSize}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bike.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex gap-2 mb-4">
                    <Button
                      variant={rentalDuration === 'day' ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => setRentalDuration('day')}
                    >
                      Per Day
                    </Button>
                    <Button
                      variant={rentalDuration === 'week' ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => setRentalDuration('week')}
                    >
                      Per Week
                    </Button>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${price}
                  </div>
                  <p className="text-gray-600">per {rentalDuration}</p>
                  {rentalDuration === 'week' && (
                    <p className="text-sm text-green-600 font-medium mt-1">
                      Save ${bike.pricePerDay * 7 - bike.pricePerWeek}!
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="size-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Pickup Location</p>
                      <p className="text-sm text-gray-600">{bike.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="size-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Status</p>
                      <p className={`text-sm font-medium ${bike.available ? 'text-green-600' : 'text-red-600'}`}>
                        {bike.available ? 'Available Now' : 'Currently Rented'}
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full py-6 text-lg"
                  onClick={handleRentBike}
                  disabled={!bike.available}
                >
                  {bike.available ? 'Rent This Bike' : 'Currently Unavailable'}
                </Button>

                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600 text-center">
                    Free helmet and lock included with rental
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Bikes */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Similar Bikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bikes
              .filter((b) => b.id !== bike.id && b.type === bike.type)
              .slice(0, 3)
              .map((similarBike) => (
                <Link key={similarBike.id} to={`/bikes/${similarBike.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={similarBike.image}
                        alt={similarBike.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-semibold">
                        ${similarBike.pricePerDay}/day
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{similarBike.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{similarBike.brand}</p>
                      <div className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{similarBike.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
