import Head from 'next/head'
import Link from 'next/link'
import Widget from '@/components/widget'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'

import React, {useEffect} from 'react'
import {
  AceConfiguration,
  ACParams,
  ACS,
  ACEResponseToCaller,
  ACProduct,
  ACEGender,
  ACEMaritalStatus,
} from '@jinsang/slimer-react'
import {gcodeSelector, sendCommonWithPromise} from '../utils'

const inter = Inter({subsets: ['latin']})

function Homepage() {
  // useEffect(() => {
  //   const _config = AceConfiguration.init(gcodeSelector())
  //   ACS.configure(_config)
  //     .then(response => {
  //       console.log('SDK Promise 초기화::in then!!')
  //       console.log('response: ' + JSON.stringify(response, null, 2))
  //       // setEnableInSDK(ACS.isEnableSDK())
  //       console.log(`1. ACS.isEnableSDK(): ${ACS.isEnableSDK()}`)
  //       // setDetailInSDK(Object.assign(ACS.getSdkDetails()))
  //       console.log('ACS.getDetail(): ' + JSON.stringify(ACS.getSdkDetails(), null, 2))
  //       console.log('ACS.getSdkVersion(): ' + JSON.stringify(JSON.parse(ACS.getSdkVersion()), null, 2))
  //       console.log('ACS.getTS(): ' + JSON.stringify(JSON.parse(ACS.getTS()), null, 2))
  //       console.log('ACS.getKey(): ' + ACS.getKey())

  //       const msg = 'index.tsx 초기화면'
  //       const params = ACParams.init(ACParams.TYPE.EVENT, msg)
  //       sendCommonWithPromise(msg, params)
  //     })
  //     .catch(err => {
  //       console.log('SDK Promise 초기화::in reject!!')
  //       console.log('err: ' + JSON.stringify(err, null, 2))
  //     })
  // }, [])
  // const _config = AceConfiguration.init(gcodeSelector())
  // ACS.configure(_config)
  //   .then(response => {
  //     console.log('SDK Promise 초기화::in then!!')
  //     console.log('response: ' + JSON.stringify(response, null, 2))
  //     // setEnableInSDK(ACS.isEnableSDK())
  //     console.log(`1. ACS.isEnableSDK(): ${ACS.isEnableSDK()}`)
  //     // setDetailInSDK(Object.assign(ACS.getSdkDetails()))
  //     console.log('ACS.getDetail(): ' + JSON.stringify(ACS.getSdkDetails(), null, 2))
  //     console.log('ACS.getSdkVersion(): ' + JSON.stringify(JSON.parse(ACS.getSdkVersion()), null, 2))
  //     console.log('ACS.getTS(): ' + JSON.stringify(JSON.parse(ACS.getTS()), null, 2))
  //     console.log('ACS.getKey(): ' + ACS.getKey())
  //   })
  //   .catch(err => {
  //     console.log('SDK Promise 초기화::in reject!!')
  //     console.log('err: ' + JSON.stringify(err, null, 2))
  //   })

  return (
    <>
      <Head>
        <title>Welcome to my Next.js website</title>
      </Head>
      <div>
        <Link href='/about'>About us</Link>
      </div>
      <div>
        <Widget pageName='index' />
      </div>
    </>
  )
}

export default Homepage
