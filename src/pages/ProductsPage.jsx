import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StateCard from "../components/common/StateCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import ProductTable from "../components/products/ProductTable";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <StateCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366F1"
          />
          <StateCard
            name="New Users"
            icon={Users}
            value="1,234"
            color="#8B5CF6"
          />
          <StateCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StateCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>

		<ProductTable />

		{/* Charts  */}
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<SalesTrendChart/>
			<CategoryDistributionChart/>
		</div>
      </main>
    </div>
  );
};

export default ProductsPage;
