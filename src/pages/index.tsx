import Head from 'next/head'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Checkout from 'src/components/Checkout'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Card from 'src/components/ProductCard'
import CardSkeleton from 'src/components/ProductCardSkeleton'
import { api } from 'src/services/api'
import { IProduct } from '../types'
import { ProductGrid } from './style'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<IProduct[] | null>(null)
  const [checkoutVisible, setCheckoutVisible] = useState(false)

  async function getProducts() {
    try {
      setIsLoading(true)
      const response = await api.get('')
      const data = await response.data.products
      if (!data) throw 'Problema na requisição'
      setProducts(data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
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
        <Checkout />
        <Header />
        <ProductGrid>
          {isLoading ?
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
            :
            products!.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                imageUrl={product.photo}
                title={product.name}
                text={product.description}
                price={product.price}
                quantity={1}
                brand={product.brand}
              />
            ))
          }


        </ProductGrid>
        <Footer />
      </main>
    </>
  )
}
