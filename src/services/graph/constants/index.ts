import { ChainId } from '@figswap/core-sdk'

const THE_GRAPH = 'https://api.thegraph.com'

export const GRAPH_HOST = {
  [ChainId.ETHEREUM]: THE_GRAPH,
  // [ChainId.XDAI]: THE_GRAPH,
  // [ChainId.MATIC]: THE_GRAPH,
  // [ChainId.FANTOM]: THE_GRAPH,
  // [ChainId.BSC]: THE_GRAPH,
  // [ChainId.AVALANCHE]: THE_GRAPH,
  // [ChainId.CELO]: THE_GRAPH,
  // [ChainId.ARBITRUM]: THE_GRAPH,
  // [ChainId.HARMONY]: THE_GRAPH,
  // [ChainId.OKEX]: HYPER_GRAPH,
  // [ChainId.HECO]: HYPER_GRAPH,
  // [ChainId.MOONRIVER]: THE_GRAPH,
  // [ChainId.TELOS]: THE_GRAPH,
  // [ChainId.KOVAN]: THE_GRAPH,
  // [ChainId.FUSE]: THE_GRAPH,
  // [ChainId.MOONBEAM]: THE_GRAPH,
  // [ChainId.OPTIMISM]: THE_GRAPH,
  // [ChainId.KAVA]: 'https://pvt.graph.kava.io',
  // [ChainId.METIS]: 'https://andromeda.thegraph.metis.io',
}

export const TRIDENT = {
  // [ChainId.MATIC]: 'sushi-labs/trident-polygon',
  // // [ChainId.KOVAN]: 'sushi-labs/trident-kovan',
  // [ChainId.OPTIMISM]: 'sushi-labs/trident-optimism',
  // [ChainId.KAVA]: 'sushiswap/trident-kava',
  // [ChainId.METIS]: 'sushi-labs/trident-metis',
}
