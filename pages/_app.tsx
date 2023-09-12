import '@/styles/globals.css';
	import type { AppProps } from 'next/app'
	import { Toaster } from '@/components/ui/toaster';
import { useState, useEffect } from 'react'
import { providers, utils } from 'ethers'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { AppContext } from '@/context/AppContext'
import { assertExists } from "@/utils/assertExists"

// const { publicClient, webSocketPublicClient } = configureChains(
//   [polygonMumbai],
//   [publicProvider()],
// )
 
// const config = createConfig({
//   publicClient,
//   webSocketPublicClient,
// })

export default function App({ Component, pageProps }: AppProps) {
  const env = assertExists(process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_API_KEY)

  const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [
      alchemyProvider({ apiKey: env }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Crypto Brew',
    projectId: '1ac6c697e8dfb792117061f61457d73a',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  })

  // const [provider, setProvider] = useState();
  // const initializeProvider = async () => {
  //   if (window.ethereum) {
  //     const provider = new providers.Web3Provider(window.ethereum);
  //     await provider._ready()
  //     return provider
  //   }
  //   return null
  // }
 
  // useEffect(() => {
  //   const initialize = async () => {
  //     const provider = await initializeProvider();
  //     setProvider(provider);
  //   };
  //   initialize();
  // }, []);
  

  return (
      <WagmiConfig config={wagmiConfig} >
        <RainbowKitProvider chains={chains} theme={darkTheme({
          accentColor: '#806DFF',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          fontStack: 'system',
          overlayBlur: 'small',
        })}>
          <Component {...pageProps} />
			<Toaster />
        </RainbowKitProvider>
      </WagmiConfig>
  )
}
