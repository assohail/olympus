import { NodeHelper } from "./helpers/NodeHelper";
import { EnvHelper } from "./helpers/Environment";
import ethereum from "./assets/tokens/wETH.svg";
import arbitrum from "./assets/arbitrum.png";
import avalanche from "./assets/tokens/AVAX.svg";

// ===================================================graph API
export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-protocol-metrics";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

interface IPoolGraphURLS {
  [index: string]: string;
}

export const POOL_GRAPH_URLS: IPoolGraphURLS = {
  // ===================================================graph API
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  // ==========================================commented
  // 1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    DAI_ADDRESS: "0x34703041fcAe74E16F118A6addf0381344D8aBB2", // duplicate // our address
    OHM_ADDRESS: "0x800b0f835b91aB2A4a824BC2d0D6ed1FC6b11c95",// our address
    STAKING_ADDRESS: "0x79d6b6d43d1984c26C11db9DFC25141F0004b525",// our address
    STAKING_HELPER_ADDRESS: "0xA7c37292Ff6E812C47eD8D8f1900cdD143196DA3",// our address
    OLD_STAKING_ADDRESS: "0x3bE2f691845b16617482F9A7C19a480bfad6ca53",// our address
    SOHM_ADDRESS: "0xa9B777D69B605f0a4822d0F8fB37e94485a8A913",//our address
    // WSOHM_ADDRESS: "0xe73384f11Bb748Aa0Bc20f7b02958DF573e6E2ad",
    // OLD_SOHM_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x10257Ad81062Ffca5be370f2245e7b5a17562353",// our address
    BONDINGCALC_ADDRESS: "0xea0AE615b23442B073FeA61071e135417E112EA4",// our address
    // CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x89add855C48A1BF92e526B71ff791631fa460664",// our address
    // REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    // PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    // PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    // PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
    MIGRATOR_ADDRESS: "0x568c257BF4714864382b643fC8e6Ce5fbBcC6d3C",
    // GOHM_ADDRESS: "0xcF2D6893A1CB459fD6B48dC9C41c6110B968611E",
    // OHM_V2: "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
    // TREASURY_V2: "0x8dd0d811CEFb5CF41528C495E76638B2Ea39d2e6",
    // SOHM_V2: "0xebED323CEbe4FfF65F7D7612Ea04313F718E5A75",
    // STAKING_V2: "0x06984c3A9EB8e3A8df02A4C09770D5886185792D",
  },
  // ==================================================commented
  // 1: {
  //   DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
  //   OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
  //   STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
  //   STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
  //   OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
  //   SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
  //   WSOHM_ADDRESS: "0xca76543cf381ebbb277be79574059e32108e3e65",
  //   OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
  //   PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
  //   AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
  //   MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
  //   DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
  //   BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
  //   CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
  //   TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
  //   CRUCIBLE_OHM_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
  //   LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
  //   MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
  //   REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
  //   FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
  //   FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
  //   FUSE_36_SOHM: "0x252d447c54F33e033AD04048baEAdE7628cB1274", // Fraximalist Money Market
  //   PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
  //   PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
  //   PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  //   MIGRATOR_ADDRESS: "0x184f3FAd8618a6F458C16bae63F70C426fE784B3",
  //   GOHM_ADDRESS: "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f",
  //   OHM_V2: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
  //   TREASURY_V2: "0x9a315bdf513367c0377fb36545857d12e85813ef",
  //   SOHM_V2: "0xF81F3eE093aD1997657f7C5293EC20034f338323",
  //   STAKING_V2: "0x782f33d0bf0ca6228f2ad554de4195da81b15b32",
  //   FIATDAO_WSOHM_ADDRESS: "0xe98ae8cD25CDC06562c29231Db339d17D02Fd486",
  // },
  // 42161: {
  //   DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
  //   OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
  //   STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
  //   STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
  //   OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
  //   SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
  //   OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
  //   PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
  //   AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
  //   MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
  //   DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
  //   BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
  //   CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
  //   TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
  //   WSOHM_ADDRESS: "0x739ca6D71365a08f584c8FC4e1029045Fa8ABC4B",
  //   MIGRATOR_ADDRESS: "0x1e7902a8b0adbf81042b5e30bdfa281f0b928d6d", // good
  //   GOHM_ADDRESS: "0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1", // good
  //   REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
  // }, // TODO: Replace with Arbitrum contract addresses when ready
  // 421611: {
  //   DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
  //   OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
  //   STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
  //   STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
  //   OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
  //   SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
  //   OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
  //   PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
  //   AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
  //   MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
  //   DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
  //   BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
  //   CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
  //   TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
  //   // TODO (appleseed-lusd): swap this out
  //   PICKLE_OHM_LUSD_ADDRESS: "0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f",
  //   REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
  // }, // TODO: Replace with Arbitrum Testnet contract addresses when ready
  // 43113: {
  //   DAI_ADDRESS: "",
  //   OHM_ADDRESS: "",
  //   STAKING_ADDRESS: "", // The new staking contract
  //   STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
  //   OLD_STAKING_ADDRESS: "",
  //   SOHM_ADDRESS: "",
  //   OLD_SOHM_ADDRESS: "",
  //   PRESALE_ADDRESS: "",
  //   AOHM_ADDRESS: "",
  //   MIGRATE_ADDRESS: "",
  //   DISTRIBUTOR_ADDRESS: "",
  //   BONDINGCALC_ADDRESS: "",
  //   CIRCULATING_SUPPLY_ADDRESS: "",
  //   TREASURY_ADDRESS: "",
  //   PICKLE_OHM_LUSD_ADDRESS: "",
  //   REDEEM_HELPER_ADDRESS: "",
  //   // WSOHM_ADDRESS: "",
  //   // GOHM_ADDRESS: "",
  //   // MIGRATOR_ADDRESS: ""
  // }, // TODO: Avalanche Testnet addresses
  // 43114: {
  //   DAI_ADDRESS: "",
  //   OHM_ADDRESS: "",
  //   // STAKING_ADDRESS: "", // The new staking contract
  //   STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
  //   OLD_STAKING_ADDRESS: "",
  //   SOHM_ADDRESS: "",
  //   OLD_SOHM_ADDRESS: "",
  //   PRESALE_ADDRESS: "",
  //   AOHM_ADDRESS: "",
  //   MIGRATE_ADDRESS: "",
  //   DISTRIBUTOR_ADDRESS: "",
  //   BONDINGCALC_ADDRESS: "",
  //   CIRCULATING_SUPPLY_ADDRESS: "",
  //   TREASURY_ADDRESS: "",
  //   PICKLE_OHM_LUSD_ADDRESS: "",
  //   REDEEM_HELPER_ADDRESS: "",
  //   WSOHM_ADDRESS: "0x8cd309e14575203535ef120b5b0ab4dded0c2073",
  //   GOHM_ADDRESS: "0x321e7092a180bb43555132ec53aaa65a5bf84251",
  //   MIGRATOR_ADDRESS: "0xB10209BFbb37d38EC1B5F0c964e489564e223ea7",
  // }, // TODO: Avalanche Mainnet addresses
};

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */

interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  image: SVGImageElement;
  imageAltText: string;
  uri: () => string;
}

// These networks will be available for users to select. Other networks may be functional
// (e.g. testnets, or mainnets being prepared for launch) but need to be selected directly via the wallet.

// =======================================================commented
// export const USER_SELECTABLE_NETWORKS = [1, 42161, 43114];

// Set this to the chain number of the most recently added network in order to enable the 'Now supporting X network'
// message in the UI. Set to -1 if we don't want to display the message at the current time.
// export const NEWEST_NETWORK_ID = 43114;

export const NETWORKS: { [key: number]: INetwork } = {
  //===============================================commented
  // 1: {
  //   chainName: "Ethereum",
  //   chainId: 1,
  //   nativeCurrency: {
  //     name: "Ethereum",
  //     symbol: "ETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: [""],
  //   blockExplorerUrls: ["https://etherscan.io/#/"],
  //   image: ethereum,
  //   imageAltText: "Ethereum Logo",
  //   uri: () => NodeHelper.getMainnetURI(1),
  // },
  4: {
    chainName: "Rinkeby Testnet",
    chainId: 4,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(4),
  },
  //====================================commented
  // 42161: {
  //   chainName: "Arbitrum",
  //   chainId: 42161,
  //   nativeCurrency: {
  //     name: "Ethereum",
  //     symbol: "ETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://arb1.arbitrum.io/rpc"],
  //   blockExplorerUrls: ["https://explorer.arbitrum.io/#/"],
  //   image: arbitrum,
  //   imageAltText: "Arbitrum Logo",
  //   uri: () => NodeHelper.getMainnetURI(42161),
  // },
  // 421611: {
  //   chainName: "Arbitrum Testnet",
  //   chainId: 421611,
  //   nativeCurrency: {
  //     name: "Ethereum",
  //     symbol: "ETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
  //   blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
  //   image: arbitrum,
  //   imageAltText: "Arbitrum Logo",
  //   uri: () => EnvHelper.alchemyArbitrumTestnetURI,
  // },
  // 43113: {
  //   chainName: "Avalanche Fuji Testnet",
  //   chainId: 43113,
  //   nativeCurrency: {
  //     name: "AVAX",
  //     symbol: "AVAX",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  //   blockExplorerUrls: ["https://testnet.snowtrace.io/#/"],
  //   image: avalanche,
  //   imageAltText: "Avalanche Logo",
  //   uri: () => EnvHelper.alchemyAvalancheTestnetURI,
  // },
  // 43114: {
  //   chainName: "Avalanche",
  //   chainId: 43114,
  //   nativeCurrency: {
  //     name: "AVAX",
  //     symbol: "AVAX",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  //   blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
  //   image: avalanche,
  //   imageAltText: "Avalanche Logo",
  //   uri: () => NodeHelper.getMainnetURI(43114),
  // },
};

// VIEWS FOR NETWORK is used to denote which paths should be viewable on each network
// ... attempting to prevent contract calls that can't complete & prevent user's from getting
// ... stuck on the wrong view
interface IViewsForNetwork {
  dashboard: boolean;
  stake: boolean;
  wrap: boolean;
  zap: boolean;
  threeTogether: boolean;
  bonds: boolean;
  network: boolean;
}

export const VIEWS_FOR_NETWORK: { [key: number]: IViewsForNetwork } = {
  // ==========================================commented
  // 1: {
  //   dashboard: true,
  //   stake: true,
  //   wrap: true,
  //   zap: true,
  //   threeTogether: true,
  //   bonds: true,
  //   network: true,
  // },
  4: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  // ====================================commented
  // 42161: {
  //   dashboard: true,
  //   stake: false,
  //   wrap: true,
  //   zap: false,
  //   threeTogether: false,
  //   bonds: false,
  //   network: true,
  // },
  // 421611: {
  //   dashboard: true,
  //   stake: false,
  //   wrap: true,
  //   zap: false,
  //   threeTogether: false,
  //   bonds: false,
  //   network: true,
  // },
  // 43114: {
  //   dashboard: true,
  //   stake: false,
  //   wrap: true,
  //   zap: false,
  //   threeTogether: false,
  //   bonds: false,
  //   network: true,
  // },
  // 43113: {
  //   dashboard: true,
  //   stake: false,
  //   wrap: true,
  //   zap: false,
  //   threeTogether: false,
  //   bonds: false,
  //   network: true,
  // },
};