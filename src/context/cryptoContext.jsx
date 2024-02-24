import { createContext, useState, useEffect, useContext } from 'react'
import { fakeFetchCrypto, fetchAssets } from '../api'
import { percentDifferencr } from '../utils/utils'

const CryptoContext = createContext({
   assets: [],
   crypto: [],
   loading: false,
})

const mapAssets = (assets, result) => {
   return assets.map((asset) => {
      const coin = result.find((c) => c.id === asset.id)
      return {
         grow: asset.price < coin.price,
         growPercent: percentDifferencr(asset.price, coin.price),
         totalMount: asset.amount * coin.price,
         totalProfit: (asset.amount * coin.price) - (asset.amount * asset.price),
         ...asset
      }
   })
}

export const CryptoContextpProvider = ({ children }) => {
   const [loading, setLoading] = useState(false)
   const [crypto, setCrypto] = useState([])
   const [assets, setAssets] = useState([])

   useEffect(() => {
      async function preload() {
         setLoading(true)
         const { result } = await fakeFetchCrypto()
         const assets = await fetchAssets()

         setAssets(mapAssets(assets, result))
         setCrypto(result)
         setLoading(false)
      }
      preload()
   }, [])

   const addAsset = (newAsset) => {
      setAssets((prev) => mapAssets([...prev, newAsset], crypto))
   }

   return <CryptoContext.Provider value={{ loading, crypto, assets, addAsset }}>
      {children}
   </CryptoContext.Provider>
}

export default CryptoContext

export const useCrypto = () => {
   return useContext(CryptoContext)
}