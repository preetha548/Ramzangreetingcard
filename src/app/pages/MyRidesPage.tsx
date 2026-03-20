import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, MapPin, Clock, Trash2, Plus, Bike } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

interface Rental {
  id: string;
  bikeId: string;
  bikeName: string;
  bikeImage: string;
  bikeType: string;
  startDate: string;
  endDate: string;
  price: number;
  status: 'active' | 'completed' | 'upcoming';
  pickupLocation: string;
}

export function MyRidesPage() {
  const [rentals, setRentals] = useState<Rental[]>([
    {
      id: '1',
      bikeId: '1',
      bikeName: 'Trail Blazer Pro',
      bikeImage: 'https://images.unsplash.com/photo-1645520719499-6856445fe4ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjB0cmFpbCUyMGZvcmVzdHxlbnwxfHx8fDE3NzM5OTAwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bikeType: 'Mountain',
      startDate: '2026-03-25',
      endDate: '2026-03-28',
      price: 135,
      status: 'upcoming',
      pickupLocation: 'Downtown Store',
    },
    {
      id: '2',
      bikeId: '3',
      bikeName: 'E-Cruiser Urban',
      bikeImage: 'https://images.unsplash.com/photo-1730351607286-dadd17b1444e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGJpa2UlMjBjaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc3Mzk5MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bikeType: 'Electric',
      startDate: '2026-03-10',
      endDate: '2026-03-12',
      price: 130,
      status: 'active',
      pickupLocation: 'Downtown Store',
    },
    {
      id: '3',
      bikeId: '2',
      bikeName: 'Speedster Carbon',
      bikeImage: 'https://images.unsplash.com/photo-1720749407246-abceac18f730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY3ljbGluZyUyMGJpY3ljbGUlMjByYWNlfGVufDF8fHx8MTc3Mzk5MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bikeType: 'Road',
      startDate: '2026-02-15',
      endDate: '2026-02-17',
      price: 110,
      status: 'completed',
      pickupLocation: 'City Center',
    },
  ]);

  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'upcoming' | 'completed'>('all');

  const filteredRentals = rentals.filter((rental) => {
    if (activeTab === 'all') return true;
    return rental.status === activeTab;
  });

  const handleCancelRental = (rentalId: string) => {
    setRentals(rentals.filter((rental) => rental.id !== rentalId));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Rides</h1>
            <p className="text-xl text-green-100">
              Manage your bike rentals and view your riding history
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          {['all', 'active', 'upcoming', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-2 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {tab}
              {tab !== 'all' && (
                <span className="ml-2 text-sm">
                  ({rentals.filter((r) => r.status === tab).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Rentals List */}
        {filteredRentals.length > 0 ? (
          <div className="space-y-6">
            {filteredRentals.map((rental, index) => (
              <motion.div
                key={rental.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Image */}
                    <div className="relative h-48 md:h-auto">
                      <img
                        src={rental.bikeImage}
                        alt={rental.bikeName}
                        className="w-full h-full object-cover"
                      />
                      <Badge
                        className={`absolute top-4 right-4 capitalize ${getStatusColor(
                          rental.status
                        )}`}
                      >
                        {rental.status}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{rental.bikeName}</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Bike className="size-4" />
                            <span>{rental.bikeType} Bike</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            ${rental.price}
                          </div>
                          <p className="text-sm text-gray-600">Total</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Calendar className="size-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">Start Date</p>
                            <p className="font-medium">
                              {new Date(rental.startDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="size-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">End Date</p>
                            <p className="font-medium">
                              {new Date(rental.endDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="size-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">Pickup Location</p>
                            <p className="font-medium">{rental.pickupLocation}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/bikes/${rental.bikeId}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View Bike
                          </Button>
                        </Link>
                        {rental.status === 'upcoming' && (
                          <Button
                            variant="destructive"
                            onClick={() => handleCancelRental(rental.id)}
                            className="gap-2"
                          >
                            <Trash2 className="size-4" />
                            Cancel
                          </Button>
                        )}
                        {rental.status === 'active' && (
                          <Button variant="default" className="gap-2">
                            <Clock className="size-4" />
                            Extend Rental
                          </Button>
                        )}
                        {rental.status === 'completed' && (
                          <Button
                            variant="outline"
                            onClick={() => handleCancelRental(rental.id)}
                            className="gap-2"
                          >
                            <Trash2 className="size-4" />
                            Remove
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Bike className="size-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No rentals found</h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'all'
                ? "You haven't rented any bikes yet"
                : `No ${activeTab} rentals`}
            </p>
            <Link to="/bikes">
              <Button className="gap-2">
                <Plus className="size-4" />
                Browse Bikes
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
