import React from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowRight,LineChart } from "lucide-react";

const portfolioData: any = {
  conservative: {
    name: "Conservative Growth",
    risk: "Low Risk",
    returns: "22–25% Annual",
    overview:
      "This portfolio is designed for investors seeking stable growth with capital protection through disciplined and low-volatility strategies.",
    details: [
      "Focus on capital preservation",
      "Low volatility investment approach",
      "Exposure to blue-chip and large-cap stocks",
      "Regular portfolio monitoring and rebalancing",
      "Ideal for long-term conservative investors",
    ],
  },
  balanced: {
    name: "Balanced Portfolio",
    risk: "Medium Risk",
    returns: "35–40% Annual",
    overview:
      "A balanced mix of equity and debt instruments offering steady growth with controlled risk.",
    details: [
      "Balanced equity and debt allocation",
      "Moderate volatility with stable returns",
      "Risk-managed portfolio construction",
      "Suitable for medium-term investors",
    ],
  },
  aggressive: {
    name: "Aggressive Growth",
    risk: "High Risk",
    returns: "60–70% Annual",
    overview:
      "Designed for investors willing to take higher risk for superior long-term growth.",
    details: [
      "High equity exposure",
      "Active portfolio management",
      "Higher volatility with higher return potential",
      "Suitable for risk-tolerant investors",
    ],
  },
};

const PortfolioDetails = () => {
  const { type } = useParams();
  const portfolio = portfolioData[type as string];

  if (!portfolio) {
    return <div className="text-center py-20">Portfolio not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header Summary */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl w-fit mx-auto mb-3">
              <LineChart className="h-8 w-8 text-white" />
            </div>
            {portfolio.name}
          </h1>

          <div className="flex justify-center gap-6 mb-6">
            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
              {portfolio.risk}
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              {portfolio.returns}
            </span>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto">
            {portfolio.overview}
          </p>
        </div>

        {/* Details Section */}
        <div className=" p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Portfolio Highlights
          </h2>

          <div className="space-y-4">
            {portfolio.details.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PortfolioDetails;
