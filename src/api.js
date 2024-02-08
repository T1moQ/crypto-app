import { cryptoData, cryptoAsset } from "./data/data"

export function fakeFetchCrypto() {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(cryptoData)
      }, 2)
   })
}

export function fetchAssets() {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(cryptoAsset)
      }, 2)
   })
}