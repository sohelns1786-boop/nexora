import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, ArrowRight, Clock, CheckCircle, Truck } from 'lucide-react';

const Orders = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: '/orders' } } });
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  // Mock orders data
  const orders = [
    {
      id: "NEXORA-2024-001",
      date: "December 15, 2024",
      status: "Delivered",
      total: "$2,450.00",
      items: 3,
      statusIcon: CheckCircle,
      statusColor: "text-green-400"
    },
    {
      id: "NEXORA-2024-002",
      date: "December 10, 2024",
      status: "In Transit",
      total: "$1,890.00",
      items: 2,
      statusIcon: Truck,
      statusColor: "text-blue-400"
    },
    {
      id: "NEXORA-2024-003",
      date: "December 5, 2024",
      status: "Processing",
      total: "$3,120.00",
      items: 4,
      statusIcon: Clock,
      statusColor: "text-yellow-400"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
            MY ORDERS
          </h1>
          <p className="text-white text-opacity-50 text-lg">
            Track and manage your purchases from NEXORA
          </p>
        </motion.div>

        {/* User Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-dark p-8 rounded-2xl mb-12"
        >
          <p className="text-white text-opacity-80">
            Welcome back, <span className="font-bold text-white">{user.name || user.email}</span>!
          </p>
          <p className="text-white text-opacity-60 mt-2">
            You have {orders.length} orders in total.
          </p>
        </motion.div>

        {/* Orders List */}
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order, index) => {
              const StatusIcon = order.statusIcon;
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark p-8 rounded-2xl hover:border-white hover:border-opacity-40 border border-white border-opacity-20 transition-all group cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Package size={20} className="text-white text-opacity-60" />
                        <p className="text-xl font-bold text-white">{order.id}</p>
                      </div>
                      <p className="text-white text-opacity-60 mb-2">{order.date}</p>
                      <p className="text-sm text-white text-opacity-50">{order.items} items</p>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm text-white text-opacity-50 mb-1">Status</p>
                        <div className="flex items-center gap-2">
                          <StatusIcon size={16} className={order.statusColor} />
                          <p className={`font-bold ${order.statusColor}`}>
                            {order.status}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="text-right">
                      <p className="text-sm text-white text-opacity-50 mb-1">Total</p>
                      <p className="text-2xl font-display font-bold text-white">
                        {order.total}
                      </p>
                    </div>

                    {/* Action */}
                    <button className="md:w-auto px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all flex items-center gap-2 justify-center">
                      <span className="text-white font-medium">View Details</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-dark p-16 rounded-2xl text-center"
          >
            <Package size={48} className="mx-auto mb-6 text-white text-opacity-30" />
            <h3 className="text-2xl font-bold mb-2">No Orders Yet</h3>
            <p className="text-white text-opacity-60 mb-8">
              You haven't placed any orders yet. Start shopping to create your first order!
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="premium-button inline-flex items-center"
            >
              Start Shopping
              <ArrowRight size={18} className="ml-2" />
            </button>
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 glass-dark p-12 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-white text-opacity-60 mb-6">
            If you have any questions about your orders, our customer support team is available 24/7.
          </p>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-opacity-90 transition-all">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Orders;
