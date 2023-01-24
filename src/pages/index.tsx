import Head from 'next/head'
import Header from 'src/components/Header'
import Card from 'src/components/ProductCard'
import { ProductGrid } from './style'
import Checkout from 'src/components/Checkout'
import Footer from 'src/components/Footer'
import { useEffect, useState } from 'react'
import { api } from 'src/services/api'

import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from 'src/components/ProductCardSkeleton'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    async function getProducts() {
      try {
        const products = await api.get('')
        console.log(products)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="Created by LucianoNeo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header />
        {/* <Checkout /> */}
        <ProductGrid>
          {isLoading
            ?
            <>
              <CardSkeleton />
              <Card
                imageUrl="./apple-watch.png"
                title="Apple Watch Series 4 GPS"
                text="Redesigned from scratch and completely revised."
              />
            </>
            :
            <Card
              imageUrl="./apple-watch.png"
              title="Apple Watch Series 4 GPS"
              text="Redesigned from scratch and completely revised."
            />
          }

        </ProductGrid>
        <Footer />
      </main>
    </>
  )
}
