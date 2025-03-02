 const WalletBalance = ({ balance, name, cardNumber }) => {
    return (
      <div className="mt-4 p-6 w-full max-w-md bg-gradient-to-r from-green-800 to-green-900 text-white rounded-xl shadow-lg flex flex-col mx-auto">
        <h3 className="text-3xl font-extrabold mb-4">{balance}</h3>
        <p className="text-lg font-medium">{name}</p>
        <p className="tracking-wider text-sm opacity-80">{cardNumber}</p>
      </div>
    );
  };
  
  export default WalletBalance;
  