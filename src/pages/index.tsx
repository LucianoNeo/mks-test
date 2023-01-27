import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { ToastContainer } from 'react-toastify'
import { ProductGrid } from '../styles/globals'
import Checkout from '../components/Checkout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Card, { CardProps } from '../components/ProductCard'
import CardSkeleton from '../components/ProductCardSkeleton'
import { api } from '../services/api'
import { IProduct } from '../types'

export const getStaticProps: GetStaticProps = async () => {
  const response = await api('')
  const data = await response.data
  const productsSSR = data.products

  return {
    props: { productsSSR },
    revalidate: 20
  }

}

interface IProps {
  productsSSR: CardProps[];
}


export default function Home({ productsSSR }: IProps) {
  const [isLoading, setIsLoading] = useState(true)
  const products = productsSSR


  async function getProducts() {
    try {
      setIsLoading(true)
      setTimeout(() => {
        console.log('Simulating loading')
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.log(error);
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
      <ToastContainer />
      <main >
        <Checkout />
        <Header />
        <ProductGrid data-testid='productsContainer'>
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
                photo={product.photo}
                name={product.name}
                description={product.description}
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
