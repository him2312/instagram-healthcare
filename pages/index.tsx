import Head from 'next/head'

import styles from '@/pages/index.module.css'
import { Header } from '@/components/Header/Header'
import { Feed } from '../components/Feed/Feed'
import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nintee - Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Feed/>
    </div>
  )
}
