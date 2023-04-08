import {
	RainbowKitProvider,
	connectorsForWallets,
	darkTheme,
	lightTheme,
} from '@rainbow-me/rainbowkit';
import {
	metaMaskWallet,
	trustWallet,
	walletConnectWallet,
	coinbaseWallet,
	rainbowWallet,
	ledgerWallet,
	braveWallet,
	argentWallet,
	injectedWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider } = configureChains([polygonMumbai], [publicProvider()]);

const connectors = connectorsForWallets([
	{
		groupName: 'Recommended',
		wallets: [
			metaMaskWallet({ chains }),
			trustWallet({ chains }),
			walletConnectWallet({ chains }),
		],
	},
	{
		groupName: 'Others',
		wallets: [
			rainbowWallet({ chains }),
			injectedWallet({ chains }),
			braveWallet({ chains }),
			coinbaseWallet({ chains, appName: 'dAppKit' }),
			argentWallet({ chains }),
			ledgerWallet({ chains }),
		],
	},
]);

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

export default function App({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				chains={chains}
				coolMode
				theme={lightTheme({ overlayBlur: 'small', accentColor: '#000' })}
			>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
