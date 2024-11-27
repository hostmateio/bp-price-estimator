import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Download,
  Minus,
  Plus,
  Trash2
} from "lucide-react";
import Switch from './components/ui/switch';

// --- Progress Bar Component ---
const Progress = ({ currentStep }) => (
  <div className="w-full mb-12">
    <div className="flex justify-between mb-4 px-6">
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          className={`w-1/4 h-2 rounded-full mx-1 ${
            s <= currentStep ? "bg-tealCustom-500" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
    <div className="grid grid-cols-4 text-sm text-gray-600 px-6">
      <div className="text-center">Contact Details</div>
      <div className="text-center">Use Case</div>
      <div className="text-center">Products</div>
      <div className="text-center">Estimate</div>
    </div>
  </div>
);

// --- Contact Details Component ---
const ContactDetails = ({ contactInfo, setContactInfo, proceed }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Tell Us About Your Practice</h2>
    <form onSubmit={(e) => { e.preventDefault(); proceed(); }}>
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          value={contactInfo.name}
          onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
          placeholder="Enter your name"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Practice Name</label>
        <input
          type="text"
          value={contactInfo.practiceName}
          onChange={(e) => setContactInfo({ ...contactInfo, practiceName: e.target.value })}
          placeholder="Enter your practice name"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          value={contactInfo.email}
          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          placeholder="Enter your email"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={contactInfo.phone}
          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
          placeholder="Enter your phone number"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
    </form>
  </div>
);

// --- Use Case Data ---
const useCaseData = [
  {
    id: "gp",
    title: "General Practitioner",
    description: "Complete practice management solution for GP clinics",
  },
  {
    id: "specialist",
    title: "Specialist",
    description: "Specialised solutions for medical specialists",
  },
  {
    id: "ahp",
    title: "Allied Health Professional",
    description: "Tailored tools for allied health practices",
  },
];

// --- Use Case Component ---
const UseCase = ({ useCase, setUseCase, setProductType }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {useCaseData.map((case_) => (
      <button
        key={case_.id}
        onClick={() => {
          setUseCase(case_.id);
          setProductType(null);
        }}
        className={`p-8 rounded-lg border-2 hover:border-blue-500 hover:shadow-lg transition-all
          ${useCase === case_.id ? "border-blue-500 bg-tealCustom-50" : "border-gray-200"}
        `}
      >
        <h3 className="text-xl font-semibold mb-4">{case_.title}</h3>
        <p className="text-gray-600">{case_.description}</p>
      </button>
    ))}
  </div>
);

// --- Product Type Data ---
const productTypesData = [
  {
    id: "pms",
    title: "Practice Management System",
    description: "Core clinical and practice management",
    availableTo: ["gp", "specialist", "ahp"],
  },
  {
    id: "mobile",
    title: "Mobile Solutions",
    description: "Access your practice on the go",
    availableTo: ["gp", "specialist", "ahp"],
  },
  {
    id: "patient",
    title: "Patient Engagement",
    description: "Enhanced patient communication tools",
    availableTo: ["gp", "specialist", "ahp"],
  },
  {
    id: "additional",
    title: "Additional Features",
    description: "Extend your system capabilities",
    availableTo: ["gp", "specialist", "ahp"],
  },
];

// --- Products Data ---
const productsData = {
  pms: [
    {
      id: "bp-premier",
      name: "Bp Premier",
      image: "/bp-price-estimator/images/products/bpprem.png",
      description: "Complete practice management solution for GP clinics.",
      tooltip: "Comprehensive solution tailored for general practitioners.",
      basePrice: 199,
      type: "pms",
      availableTo: ["gp"],
    },
    {
      id: "bp-vipnet",
      name: "Bp ViP.net",
      image: "/bp-price-estimator/images/products/vipnet.png",
      description: "Specialized practice management for specialists.",
      tooltip: "Designed for specialists with unique needs.",
      basePrice: 249,
      type: "pms",
      availableTo: ["specialist"],
    },
    {
      id: "bp-allied",
      name: "Bp Allied",
      image: "/bp-price-estimator/images/products/bpallied.png",
      description: "Practice management solution for allied health professionals.",
      tooltip: "Tailored for allied health disciplines.",
      basePrice: 179,
      type: "pms",
      availableTo: ["ahp"],
    },
    {
      id: "bp-omni",
      name: "Bp Omni",
      image: "/bp-price-estimator/images/products/bpomni.png",
      description: "Advanced practice management system with remote access.",
      tooltip: "Flexible, anywhere-accessible system.",
      basePrice: 299,
      type: "pms",
      availableTo: ["gp", "specialist", "ahp"],
    },
  ],
  mobile: [
    {
      id: "bp-mobile",
      name: "Best Practice Mobile",
      image: "/bp-price-estimator/images/products/bpmobile.svg",
      description: "Access your practice on the go.",
      tooltip: "Mobile app integration for remote access.",
      basePrice: 49,
      type: "mobile",
      availableTo: ["gp", "specialist", "ahp"],
    },
  ],
  patient: [
    {
      id: "best-health",
      name: "Best Health App",
      image: "/bp-price-estimator/images/products/bha.png",
      description: "Patient engagement platform.",
      tooltip: "Streamline patient-practice communication.",
      basePrice: 99,
      type: "patient",
      availableTo: ["gp", "specialist", "ahp"],
    },
    {
      id: "best-health-booking",
      name: "Best Health Booking",
      image: "/bp-price-estimator/images/products/bhbooking.png",
      description: "Online appointment booking.",
      tooltip: "24/7 appointment booking for patient convenience.",
      basePrice: 39,
      type: "patient",
      availableTo: ["gp", "specialist", "ahp"],
    },
  ],
  additional: [
    {
      id: "bp-sms",
      name: "Bp SMS",
      image: "/bp-price-estimator/images/products/bpsms.png",
      description: "Integrated SMS messaging.",
      tooltip: "Send reminders and messages via SMS.",
      basePrice: 29,
      type: "additional",
      availableTo: ["gp", "specialist", "ahp"],
    },
    {
      id: "bp-comms",
      name: "Bp Comms",
      image: "/bp-price-estimator/images/products/bpcomms.png",
      description: "Advanced communication suite.",
      tooltip: "Enhance practice-patient interactions.",
      basePrice: 59,
      type: "additional",
      availableTo: ["gp", "specialist", "ahp"],
    },
    {
      id: "lyrebird",
      name: "Best Practice & Lyrebird Scribe",
      image: "/bp-price-estimator/images/products/bplyrebird.png",
      description: "Medical speech recognition.",
      tooltip: "Dictate notes for improved efficiency.",
      basePrice: 79,
      type: "additional",
      availableTo: ["gp", "specialist", "ahp"],
    },
  ],
};

// --- Product Selection Component ---
const ProductSelection = ({ useCase, selectedProducts, handleProductSelect }) => {
  const availableProductTypes = productTypesData.filter((type) =>
    type.availableTo.includes(useCase)
  );

  return (
    <div className="space-y-12">
      {availableProductTypes.map((productType) => {
        const typeProducts = productsData[productType.id] || [];

        return (
          <div key={productType.id} className="border-b pb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{productType.title}</h2>
              <p className="text-gray-600">{productType.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {typeProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className={`p-6 rounded-lg border-2 hover:border-tealCustom-500 hover:shadow-lg transition-all
                    ${selectedProducts.find((p) => p.id === product.id)
                      ? "border-tealCustom-500 bg-tealCustom-50"
                      : "border-gray-200"}`}
                  title={product.tooltip}
                >
                  <div className="flex flex-col items-center space-y-4">
                  {product.image && (
  <div className="bg-gray-100 p-4 rounded-lg w-full flex justify-center">
    <img 
      src={product.image} 
      alt={`${product.name}`} 
      className="h-24 w-auto object-contain invert"
    />
  </div>
)}
                    <p className="text-gray-600">{product.description}</p>
                    <div className="text-xl font-semibold">
                      ${product.basePrice}/user/month
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- Estimate Component ---
const EstimateStep = ({ selectedProducts = [], users = {}, setUsers, handleRemoveProduct }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleUserChange = (productId, licenseType, value) => {
    if (!setUsers) return;
    setUsers(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [licenseType]: parseInt(value) || 0
      }
    }));
  };

  const calculateProductTotal = (productId, userCounts = {}, basePrice = 0) => {
    if (!userCounts) return 0;
    const monthlyTotal = Object.entries(userCounts).reduce((acc, [type, count]) => {
      const multiplier = type === 'fullTime' ? 1 : 0.5;
      return acc + (count * basePrice * multiplier);
    }, 0);
    
    return billingCycle === 'annually' ? monthlyTotal * 12 : monthlyTotal;
  };

  const totalCost = selectedProducts?.reduce((acc, product) => {
    if (!product) return acc;
    const productUsers = users[product.id] || {};
    return acc + calculateProductTotal(product.id, productUsers, product.basePrice);
  }, 0) || 0;

  return (
    <div className="flex flex-col space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Get your estimate</h2>
        <button className="flex items-center px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">
          <Plus className="w-4 h-4 mr-2" />
          Add a Feature
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Product Details */}
        <div className="col-span-2 space-y-8">
  {selectedProducts.map(product => (
    <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center space-x-6">
        <div className="bg-gray-100 p-3 rounded-lg">
          <img 
            src={product.image} 
            alt={`${product.name}`} 
            className="h-12 w-auto object-contain invert"  
          />
        </div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>

      <div className="space-y-6">
        {['fullTime', 'partTime'].map(licenseType => (
          <div key={licenseType} className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <label className="font-medium text-gray-700">
                {licenseType === 'fullTime' ? 'Full Time' : 'Part Time'}
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  min="0"
                  value={users[product.id]?.[licenseType] || 0}
                  onChange={(e) => handleUserChange(product.id, licenseType, e.target.value)}
                  className="w-20 px-3 py-2 border rounded-lg text-center"
                />
                <span className="text-gray-600">users</span>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>${(product.basePrice * (licenseType === 'fullTime' ? 1 : 0.5)).toFixed(2)} per user</span>
              <span className="font-medium">
                ${calculateProductTotal(
                  product.id,
                  {[licenseType]: users[product.id]?.[licenseType] || 0},
                  product.basePrice
                ).toFixed(2)} {billingCycle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {handleRemoveProduct && (
        <button
          onClick={() => handleRemoveProduct(product)}
          className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Remove {product.name}</span>
        </button>
      )}
    </div>
  ))}
</div>

        {/* Right Column - Estimate Summary */}
        <div className="col-span-1">
  <div className="sticky top-4">
    <div className="bg-tealCustom-500 rounded-t-lg p-4">
      <h3 className="text-xl font-semibold text-white">Estimate</h3>
    </div>
    <div className="border-x border-b rounded-b-lg p-4 space-y-6 bg-white shadow-sm">
      <div className="flex justify-center items-center space-x-6 p-2 bg-gray-50 rounded-lg">
        <span className={`${billingCycle === 'monthly' ? 'text-tealCustom-500 font-medium' : 'text-gray-600'}`}>Monthly</span>
        <Switch
          checked={billingCycle === 'annually'}
          onCheckedChange={(checked) => setBillingCycle(checked ? 'annually' : 'monthly')}
        />
        <span className={`${billingCycle === 'annually' ? 'text-tealCustom-500 font-medium' : 'text-gray-600'}`}>Annually</span>
      </div>

      {selectedProducts.map(product => (
        <div key={product.id} className="space-y-2 pb-4 border-b">
          <h4 className="font-medium text-gray-900">{product.name}</h4>
          {Object.entries(users[product.id] || {}).map(([type, count]) => (
            Number(count) > 0 && (
              <div key={type} className="flex justify-between text-sm text-gray-600">
                <span>{type === 'fullTime' ? 'Full Time' : 'Part Time'} × {count}</span>
                <span className="font-medium">${(product.basePrice * count * (type === 'fullTime' ? 1 : 0.5)).toFixed(2)}</span>
              </div>
            )
          ))}
        </div>
      ))}

      <div className="pt-2">
        <div className="text-3xl font-bold text-center text-gray-900">
          ${totalCost.toFixed(2)} AU
        </div>
        <div className="text-center text-gray-600 text-sm mt-1">
          Estimated {billingCycle} cost<br />
          excluding GST
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <button className="w-full py-3 px-4 bg-tealCustom-500 text-white rounded-lg font-medium hover:bg-tealCustom-600 transition-colors">
          Contact Sales
        </button>
        <button className="w-full py-2.5 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

// --- Main Component ---
const PricingCalculator = () => {
  const [step, setStep] = useState(1);
  const [contactInfo, setContactInfo] = useState({ name: "", practiceName: "", email: "", phone: "" });
  const [useCase, setUseCase] = useState(null);
  const [productType, setProductType] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [users, setUsers] = useState({});

  const handleProductSelect = (product) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        setUsers((currUsers) => {
          const updatedUsers = { ...currUsers };
          delete updatedUsers[product.id];
          return updatedUsers;
        });
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleRemoveProduct = (product) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
    setUsers((prev) => {
      const updatedUsers = { ...prev };
      delete updatedUsers[product.id];
      return updatedUsers;
    });
  };

  const handleResetQuote = () => {
    setStep(1);
    setContactInfo({ name: "", practiceName: "", email: "", phone: "" });
    setUseCase(null);
    setProductType(null);
    setSelectedProducts([]);
    setUsers({});
  };

  const proceed = () => setStep((prev) => prev + 1);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <Progress currentStep={step} />
      <div className="mb-12">
        {step === 1 && <ContactDetails contactInfo={contactInfo} setContactInfo={setContactInfo} proceed={proceed} />}
        {step === 2 && <UseCase useCase={useCase} setUseCase={setUseCase} setProductType={setProductType} />}
        {step === 3 && (
          <ProductSelection useCase={useCase} selectedProducts={selectedProducts} handleProductSelect={handleProductSelect} />
        )}
        {step === 4 && (
          <EstimateStep
            selectedProducts={selectedProducts}
            users={users}
            setUsers={setUsers}
            handleRemoveProduct={handleRemoveProduct}
          />
        )}
      </div>
      <div className="flex justify-between">
        {step > 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-500"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        )}
        {step < 4 && (
          <button
            onClick={proceed}
            className="flex items-center space-x-2 px-6 py-3 bg-tealCustom-500 text-white rounded-lg hover:bg-tealCustom-600"
          >
            <span>Continue</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
        {step === 4 && (
          <button
            onClick={handleResetQuote}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-500"
          >
            <Trash2 className="w-5 h-5" />
            <span>Reset Quote</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PricingCalculator;