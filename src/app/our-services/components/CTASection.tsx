const CTASection = () => {
    return (
        <div className="bg-gradient-to-b from-bg to-myPurple-600 py-12 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-secondBg mb-4">
                    Need Emergency Help?
                </h2>
                <p className="text-lg text-secondBg mb-8">
                    Contact us now for immediate assistance
                </p>
                <button className="bg-white text-myPurple-700 hover:bg-myPurple-900 hover:text-secondBg py-3 px-6  font-semibold text-lg transition duration-300">
                    Get Help Now
                </button>
            </div>
        </div>
    );
};
export default CTASection;
