/* eslint-disable @next/next/no-css-tags */
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslations from '@/hooks/useTranslations'
import Header from '../components/Header'
import Button from '@/components/Button'

const Home: NextPage = () => {
  const { translations } = useTranslations()

  return (
    <>
      <Head>
        <title>{translations.home.pageTitle}</title>
        <meta name="description" content={translations.home.metaDescription} />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>{translations.home.greeting}</h1>
      <Button cta="Save changes" className="btn-primary" />
    </>
  )
}

Home.displayName = 'Home'

export default Home
