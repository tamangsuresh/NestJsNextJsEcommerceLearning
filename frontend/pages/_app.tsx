import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider, } from '@apollo/client'
import client from './apollo-client'
import Layout from '../component/layout'
function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </Layout>
}

export default MyApp
