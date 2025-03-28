import { useState } from "react";
import { motion } from "framer-motion";

const AIAgentCostCalculator: React.FC = () => {
  const [callsPerDay, setCallsPerDay] = useState<string>("");
  const [callDuration, setCallDuration] = useState<string>("");
  const costPerMinute = 0.1;

  const totalMinutesPerMonth = (Number(callsPerDay) || 0) * (Number(callDuration) || 0) * 30;
  const totalCost = totalMinutesPerMonth * costPerMinute;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block"
          >
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold text-primary-900 mb-2">AI Agent Cost Calculator</h1>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Estimate your monthly AI agent costs with precision. Enter your daily call volume and average duration to get an accurate cost projection.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-lg font-medium text-primary-900 mb-2">
                Daily Call Volume
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full p-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={callsPerDay}
                onChange={(e) => handleInputChange(e, setCallsPerDay)}
                placeholder="Enter number of calls per day"
              />
              <p className="text-sm text-primary-600 mt-1">Average number of AI agent calls per day</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-lg font-medium text-primary-900 mb-2">
                Average Call Duration
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full p-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={callDuration}
                onChange={(e) => handleInputChange(e, setCallDuration)}
                placeholder="Enter duration in minutes"
              />
              <p className="text-sm text-primary-600 mt-1">Typical duration of each AI agent call in minutes</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-6 bg-primary-50 rounded-xl"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary-900 mb-2">Monthly Cost Breakdown</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-primary-600">Total Minutes</p>
                  <p className="text-2xl font-bold text-primary-900">{totalMinutesPerMonth.toLocaleString()}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-primary-600">Cost per Minute</p>
                  <p className="text-2xl font-bold text-primary-900">${costPerMinute}</p>
                </div>
              </div>
              <motion.div 
                className="bg-primary-500 text-white p-6 rounded-xl cursor-pointer hover:bg-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="text-lg mb-2">Estimated Monthly Cost</p>
                <p className="text-4xl font-bold">${totalCost.toFixed(2)}</p>
                <p className="text-sm text-primary-100 mt-2">Based on 30 days per month</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AIAgentCostCalculator; 