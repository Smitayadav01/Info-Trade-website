import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowRight,LineChart } from "lucide-react";
import Conservative1 from '../assets/portfolio/conservative1.jpeg';
import Conservative2 from '../assets/portfolio/conservative2.jpeg';
import Conservative3 from '../assets/portfolio/conservative3.jpeg';
import Balanced1 from '../assets/portfolio/balanced1.jpeg';
import Balanced2 from '../assets/portfolio/balanced2.jpeg';
import Aggresive1 from "../assets/portfolio/Aggressive1.jpeg";
import Aggresive2 from "../assets/portfolio/Aggressive2.jpeg";
import Aggresive3 from "../assets/portfolio/Aggressive3.jpeg";


const portfolioData: any = {
  conservative: {
    name: "Conservative Growth",
    risk: "Low Risk",
    returns: "40–45% Annual",
    overview:
      "This portfolio is designed for investors seeking stable growth with capital protection through disciplined and low-volatility strategies.",
    details: [
      "Focus on capital preservation",
      "Low volatility trading approach",
      "Regular portfolio monitoring and rebalancing",
      "Ideal for long-term conservative investors",
    ],
    summary: [
      "Average Annual ROI: +40-50%",
      "Max Risk Per Day: 0.8% ",
      "Capital For Expiry Days: 50L",
      "Capital For Non-Expiry Days: 30L",
      "Historical Max DD: 1-1.5%",
    ],
    image:[Conservative1,Conservative2,Conservative3],
  },
  balanced: {
    name: "Balanced Portfolio",
    risk: "Medium Risk",
    returns: "60–65% Annual",
    overview:
      "A balanced mix of equity and debt instruments offering steady growth with controlled risk.",
    details: [
      "Moderate volatility with stable returns",
      "Risk-managed portfolio construction",
      "Regular portfolio monitoring",
      "Suitable for medium-term investors",
    ],
    summary: [
      "Average Annual ROI: +60-70%",
      "Max Risk Per Day: 1-1.2% ",
      "Capital For Expiry Days: 20L",
      "Capital For Non-Expiry Days: 15L",
      "Historical Max DD: 2-2.5%",
    ],
    image:[Balanced1,Balanced2],
  },
  aggressive: {
    name: "Aggressive Growth",
    risk: "High Risk",
    returns: "100–110% Annual",
    overview:
      "Designed for investors willing to take higher risk for superior long-term growth.",
    details: [
      "High capital exposure & leveraging",
      "Active portfolio management",
      "Higher volatility with higher return potential",
      "Suitable for risk-tolerant investors",
    ],
    summary: [
      "Average Annual ROI: +100-110%",
      "Max Risk Per Day: 1.5% ",
      "Capital For Expiry Days: 20L",
      "Capital For Non-Expiry Days: 20L",
      "Historical Max DD: 3-4%",
    ],
    image:[Aggresive1,Aggresive2,Aggresive3],
  },
};

const PortfolioDetails = () => {
  const { type } = useParams();
  const portfolio = portfolioData[type as string];
  const [showTerms, setShowTerms] = useState(false);


  if (!portfolio) {
    return <div className="text-center py-20">Portfolio not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isLandscape, setIsLandscape] = useState(false);



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

        {/* summary Section */}
        <div className=" p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Performance Summary
          </h2>

          <div className="space-y-4">
            {portfolio.summary.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

{/* Images Section */}
{portfolio.image && (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
      Portfolio Performance
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolio.image.map((img: string, index: number) => (
        <div
          key={index}
          onClick={() => {
            setSelectedImage(img);
            setZoom(1);
          }}
          className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden 
                     flex items-center justify-center h-[220px] sm:h-[260px] md:h-[300px]
                     hover:scale-[1.02] transition"
        >
          <img
            src={img}
            alt={`${portfolio.name} ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
)}

{selectedImage && (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

    <div
      className="absolute inset-0"
      onClick={() => {
        setSelectedImage(null);
        setZoom(1);
      }}
    />

    <div className="absolute top-6 right-6 flex gap-3 z-50">
      <button
        onClick={() => setZoom(z => Math.min(z + 0.2, 3))}
        className="bg-white px-4 py-2 rounded-lg font-bold"
      >
        +
      </button>
      <button
        onClick={() => setZoom(z => Math.max(z - 0.2, 1))}
        className="bg-white px-4 py-2 rounded-lg font-bold"
      >
        −
      </button>
    </div>

    <img
      src={selectedImage}
      alt="Preview"
      style={{ transform: `scale(${zoom})` }}
      className="max-w-full max-h-[90vh] object-contain transition-transform duration-300"
    />
  </div>
)}



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



{/* Disclaimer Note */}
<div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
  <p className="text-sm text-yellow-800 leading-relaxed">
    <span className="font-semibold">Note:</span> In live market conditions, we consider a
    <span className="font-medium"> 10–15% performance buffer </span>
    compared to back-tested results due to real-time market fluctuations.
    Past performance is not an indication of future results.
  </p>
</div>

        

         {/* CTA */}
<div className="text-center">
  <button
    onClick={() => setShowTerms(true)}
    className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
  >
    Get Started
    <ArrowRight className="ml-2 h-5 w-5" />
  </button>
</div>


{showTerms && (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
    
    {/* Overlay click close */}
    <div
      className="absolute inset-0"
      onClick={() => setShowTerms(false)}
    />

    {/* Modal */}
    <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6 z-50">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        Terms & Conditions
      </h3>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        By scheduling a consultation, you acknowledge that market investments
        involve risk and returns may vary. Live performance can differ from
        back-tested results, and past performance is not a guarantee of future outcomes.
      </p>

      <p className="text-sm text-gray-700 mb-5">
        Please review our{" "}
        <Link
          to="/terms"
          className="text-blue-600 font-medium underline"
          
        >
          Terms & Conditions
        </Link>{" "}
        before proceeding.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowTerms(false)}
          className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <Link
          to="/contact"
          onClick={() => setShowTerms(false)}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          I Agree
        </Link>
      </div>
    </div>
  </div>
)}

            
      </div>
    </div>
  );
};

export default PortfolioDetails;
