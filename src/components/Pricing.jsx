import { Check, Star } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "29.99",
        description: "Perfect for individuals and small teams",
        features: [
            "Up to 5 team members",
            "10GB storage",
            "Basic analytics",
            "Email support",
            "API access",
            "Mobile app",
        ],
        mostPopular: false,
    },
    {
        name: "Professional",
        price: "79.99",
        description: "Best for growing businesses",
        features: [
            "Up to 25 team members",
            "100GB storage",
            "Advanced analytics",
            "Priority support",
            "API access",
            "Mobile app",
            "Custom integrations",
            "Advanced security",
        ],
        mostPopular: true,
    },
    {
        name: "Enterprise",
        price: "199.99",
        description: "For large organizations",
        features: [
            "Unlimited team members",
            "Unlimited storage",
            "Enterprise analytics",
            "24/7 phone support",
            "API access",
            "Mobile app",
            "Custom integrations",
            "Advanced security",
            "Dedicated account manager",
            "Custom SLA",
        ],
        mostPopular: false,
    },
];

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-16 px-6 sm:py-20 sm:px-10 lg:px-8 relative"
        >
            {/* cotains headlines, paragraph and card */}
            <div className="max-w-[1600px] mx-auto">
                {/* headlines */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-wxl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">Simple, Transparent </span>
                        <br />

                        <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing Plans</span>
                    </h2>
                    {/* paragraph below the headlines */}
                    <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. All plans include a 14-day
                        free trial.
                    </p>
                </div>


                {/* card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {plans.map((plan, key) => (
                        <div key={key}
                            className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all anim-duration-300 overflow-visible group flex flex-col h-full
                         ${plan.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105"
                                    : "border-slate-800 hover:border-slate-900"}`}
                        >
                            {/* center of the colum */}
                            {plan.mostPopular && (
                                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="flex items-center spcae-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                        <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white" />
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}
                            {/* discription inside the pricings colums */}
                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-s sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">${plan.price}</span>
                                    <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/month</span>
                                </div>
                            </div>
                            {/* contains features */}
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                                {plan.features.map((feature, featureKey) => (
                                    <li key={featureKey} className="flex items-start space-x-2 sm:space-x-3">
                                        <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Action button */}
                            <button
                                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${plan.mostPopular
                                    ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-gray-400 text-base text-xl">
                        Need a custom plan?{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                            Contact our sales team
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}