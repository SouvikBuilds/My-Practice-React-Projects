import React, { useEffect, useState } from 'react'

const Container = () => {

    const popularCoins = [
        { id: "1inch", symbol: "1INCH", name: "1inch" },
        { id: "aave", symbol: "AAVE", name: "Aave" },
        { id: "cardano", symbol: "ADA", name: "Cardano" },
        { id: "algorand", symbol: "ALGO", name: "Algorand" },
        { id: "aptos", symbol: "APT", name: "Aptos" },
        { id: "arbitrum", symbol: "ARB", name: "Arbitrum" },
        { id: "avalanche-2", symbol: "AVAX", name: "Avalanche" },
        { id: "axie-infinity", symbol: "AXS", name: "Axie Infinity" },
        { id: "balancer", symbol: "BAL", name: "Balancer" },
        { id: "basic-attention-token", symbol: "BAT", name: "Basic Attention Token" },
        { id: "bitcoin-cash", symbol: "BCH", name: "Bitcoin Cash" },
        { id: "binancecoin", symbol: "BNB", name: "BNB" },
        { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
        { id: "pancakeswap-token", symbol: "CAKE", name: "PancakeSwap" },
        { id: "chiliz", symbol: "CHZ", name: "Chiliz" },
        { id: "compound-governance-token", symbol: "COMP", name: "Compound" },
        { id: "curve-dao-token", symbol: "CRV", name: "Curve DAO Token" },
        { id: "crypto-com-chain", symbol: "CRO", name: "Cronos" },
        { id: "dash", symbol: "DASH", name: "Dash" },
        { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
        { id: "polkadot", symbol: "DOT", name: "Polkadot" },
        { id: "dydx", symbol: "DYDX", name: "dYdX" },
        { id: "multiversx", symbol: "EGLD", name: "MultiversX" },
        { id: "enjincoin", symbol: "ENJ", name: "Enjin Coin" },
        { id: "eos", symbol: "EOS", name: "EOS" },
        { id: "ethereum-classic", symbol: "ETC", name: "Ethereum Classic" },
        { id: "ethereum", symbol: "ETH", name: "Ethereum" },
        { id: "filecoin", symbol: "FIL", name: "Filecoin" },
        { id: "flow", symbol: "FLOW", name: "Flow" },
        { id: "fantom", symbol: "FTM", name: "Fantom" },
        { id: "stepn", symbol: "GMT", name: "STEPN" },
        { id: "gmx", symbol: "GMX", name: "GMX" },
        { id: "the-graph", symbol: "GRT", name: "The Graph" },
        { id: "helium", symbol: "HNT", name: "Helium" },
        { id: "immutable-x", symbol: "IMX", name: "Immutable" },
        { id: "injective-protocol", symbol: "INJ", name: "Injective" },
        { id: "kaspa", symbol: "KAS", name: "Kaspa" },
        { id: "kava", symbol: "KAVA", name: "Kava" },
        { id: "chainlink", symbol: "LINK", name: "Chainlink" },
        { id: "litecoin", symbol: "LTC", name: "Litecoin" },
        { id: "decentraland", symbol: "MANA", name: "Decentraland" },
        { id: "mask-network", symbol: "MASK", name: "Mask Network" },
        { id: "matic-network", symbol: "MATIC", name: "Polygon" },
        { id: "maker", symbol: "MKR", name: "Maker" },
        { id: "near", symbol: "NEAR", name: "NEAR Protocol" },
        { id: "neo", symbol: "NEO", name: "NEO" },
        { id: "optimism", symbol: "OP", name: "Optimism" },
        { id: "pepe", symbol: "PEPE", name: "Pepe" },
        { id: "quant-network", symbol: "QNT", name: "Quant" },
        { id: "render-token", symbol: "RENDER", name: "Render" },
        { id: "thorchain", symbol: "RUNE", name: "THORChain" },
        { id: "the-sandbox", symbol: "SAND", name: "The Sandbox" },
        { id: "shiba-inu", symbol: "SHIB", name: "Shiba Inu" },
        { id: "synthetix-network-token", symbol: "SNX", name: "Synthetix" },
        { id: "solana", symbol: "SOL", name: "Solana" },
        { id: "sui", symbol: "SUI", name: "Sui" },
        { id: "the-open-network", symbol: "TON", name: "Toncoin" },
        { id: "tron", symbol: "TRX", name: "TRON" },
        { id: "trust-wallet-token", symbol: "TWT", name: "Trust Wallet Token" },
        { id: "uniswap", symbol: "UNI", name: "Uniswap" },
        { id: "usd-coin", symbol: "USDC", name: "USD Coin" },
        { id: "tether", symbol: "USDT", name: "Tether" },
        { id: "woo-network", symbol: "WOO", name: "WOO Network" },
        { id: "ecash", symbol: "XEC", name: "eCash" },
        { id: "stellar", symbol: "XLM", name: "Stellar" },
        { id: "ripple", symbol: "XRP", name: "XRP" },
        { id: "zcash", symbol: "ZEC", name: "Zcash" },
        { id: "0x", symbol: "ZRX", name: "0x Protocol" },
    ];



    const [inputCoin, setInputCoin] = useState("")
    const [allCoins, setAllCoins] = useState(() => {
        return JSON.parse(localStorage.getItem("allCoins")) || [];
    });

    useEffect(() => {
        localStorage.setItem("allCoins", JSON.stringify(allCoins))
    }, [allCoins])

    async function addCoins() {
        if (!inputCoin) {
            alert("Please Enter The Coin Name First")
            return
        }
        const apiKey = 'CG-XmguQcyRSVNVt7SzENAskjcW';
        const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${inputCoin}`

        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "x-cg-demo-api-key": apiKey
            }
        })

        if (!response.ok) {
            alert("Error")
            return
        }

        const data = await response.json()
        if (data.length === 0) {
            alert("Coin Not Found")
            return
        }

        const cryptoName = data[0].name
        const priceChange = data[0].price_change_percentage_24h;
        const logo = data[0].image;

        const cryptoDetails = {
            cryptoId: Date.now(),
            Name: cryptoName,
            Logo: logo,
            PriceChange: priceChange
        }

        setAllCoins([...allCoins, cryptoDetails])


    }

    const deleteCoin = (cryptoId) => {
        if (confirm("Are You Sure?")) {

            setAllCoins(prevCoin => prevCoin.filter(coin => coin.cryptoId !== cryptoId))
        } else {
            return
        }
    };
    return (
        <div className='flex flex-col gap-3 justify-center items-center p-5 rounded-lg shadow-lg w-[40vw] mt-[5%] bg-black m-auto'>
            <div className="heading">
                <h2 className='text-white text-3xl animate-bounce font-semibold'>
                    Crypto Currency Tracker
                </h2>
            </div>

            <div className="inputCurrencySection flex flex-row items-center gap-2 mt-10">

                <div>
                    <input
                        value={inputCoin}
                        type="text"
                        name=""
                        id=""
                        readOnly
                        className='w-[300px] px-5 py-2 rounded-lg shadow-lg text-orange-500 border-[5px] border-red-400'
                        placeholder='Enter Coin Name Here' />
                </div>
                <div>
                    <select
                        onChange={(e) => setInputCoin(e.target.value)}
                        name="" id="" className='bg-[#333] px-5 py-3 rounded-lg w-[200px] shadow-lg text-white'>
                        {popularCoins.map((coin) => (
                            <option
                                key={coin.id}
                                value={coin.id}>
                                {coin.symbol} - {coin.name}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

            <div className="button mt-6">
                <button
                    onClick={addCoins}
                    type="button" className='px-5 py-2 rounded-lg shadow-lg bg-red-500 text-white text-center active:bg-red-700 duration-300'>Add Coin</button>
            </div>

            <div className="overflow-x-auto p-6">
                <table className="min-w-full text-center border-collapse rounded-2xl shadow-lg overflow-hidden">
                    <thead>
                        <tr className="bg-[#333]text-white text-lg text-white">
                            <th className="py-4 px-6">Serial No</th>
                            <th className="py-4 px-6">Logo</th>
                            <th className="py-4 px-6">Name</th>
                            <th className="py-4 px-6">Price Change</th>
                            <th className="py-4 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-900 text-gray-200">
                        {allCoins.map((coin, index) => (
                            <tr key={coin.cryptoId} className="hover:bg-gray-800 transition">
                                <td className="py-4 px-6 font-medium">{index + 1}</td>
                                <td className="py-4 px-6">
                                    <img src={coin.Logo} alt={coin.Name} className="w-8 h-8 mx-auto" />
                                </td>
                                <td className="py-4 px-6">{coin.Name}</td>
                                <td className={`py-4 px-6 font-semibold ${coin.PriceChange < 0 ? "text-red-500" : "text-green-500"}`}>
                                    {coin.PriceChange.toFixed(2)}%
                                </td>
                                <td className="py-4 px-6">
                                    <button
                                        onClick={() => deleteCoin(coin.cryptoId)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Container
