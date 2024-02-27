import { cryptoData, cryptoAsset } from "./data/data"

export function fakeFetchCrypto() {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(cryptoData)
      }, 1000)
   })
}

export function fetchAssets() {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(cryptoAsset)
      }, 1000)
   })
}
