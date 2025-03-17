import { http, createConfig } from "wagmi";
import { mainnet, sepolia, goerli } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia, goerli],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [goerli.id]: http(),
  },
  connectors: [
    injected({
      target: "metaMask",
      shimDisconnect: true,
    }),
  ],
});
