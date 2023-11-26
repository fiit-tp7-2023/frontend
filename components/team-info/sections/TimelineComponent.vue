<template>
  <div id="timeline" class="flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-0">Timeline</h1>
    <div class="timeline" :class="theme">
      <div v-for="(item, index) in timelineItems" :key="index" class="card">
        <div class="info flex">
          <n-card :title="item.title" class="title">
            {{ item.content }}
            <template #header-extra>
              {{ item.date }}
            </template>
          </n-card>
          <div class="dot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type TimelineItem = {
  title: string;
  content: string;
  date: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: 'Beginning of the Project',
    content:
      'Our first meeting occured. We started to discuss the main ideas of the project and the technologies we will use.',
    date: '02.10.2023',
  },
  {
    title: 'Initiating Transaction Processing',
    content:
      'Successfully processed the first transaction, including setting up Neo4j database and storing transactions within it.',
    date: '17.10.2023',
  },
  {
    title: 'Indexing of ERC-721 Collection',
    content: 'ERC-721 collection successfully indexed.',
    date: '21.10.2023',
  },
  {
    title: 'NFT Tagging Achievement',
    content: 'Accomplished tagging for every new NFT recorded, introducing a shared tag.',
    date: '09.11.2023',
  },
  {
    title: 'Optimized IPFS Metadata Retrieval',
    content:
      'Implemented a custom system for fetching metadata from IPFS using multiple gateways simultaneously, enhancing efficiency.',
    date: '10.11.2023',
  },
  {
    title: 'Metadata Fetching Enhancement',
    content: ' Improved metadata fetching for the collection using RPC calls and IPFS.',
    date: '12.11.2023',
  },
  {
    title: 'RPC Data Fetching Optimization',
    content:
      'Integrated Multicall smart contract for optimal fetching of blockchain data, resulting in reduced RPC calls.',
    date: '12.11.2023',
  },
  {
    title: 'Indexer Optimization for ERC-1155 Tokens',
    content: 'Upgraded the indexer to support ERC-1155 tokens.',
    date: '12.11.2023',
  },
  {
    title: 'Optimization for ERC-20 Tokens',
    content: 'Upgraded the indexer to support ERC-20 tokens.',
    date: '12.11.2023',
  },
  {
    title: 'Description, Attributes and Name Tokenization',
    content: 'Extended functionality by tokenizing NFT names, descriptions, and attributes.',
    date: '12.11.2023',
  },
  {
    title: ' Automation of Data Processing',
    content: ' Implemented automated processes for data processing.',
    date: '14.11.2023',
  },
];
const { colorMode } = useNaiveColorMode();

const theme = computed(() => {
  if (colorMode.value === 'dark') {
    return 'darkMode';
  } else {
    return 'lightMode';
  }
});
</script>

<style scoped>
.timeline {
  margin-top: 5%;
}
.card {
  position: relative;
  max-width: 500px;
}

.card::before {
  content: '';
  position: absolute;
  width: 50%;
}

.lightMode .card::before {
  border: solid #fe086e;
}
.darkMode .card::before {
  border: solid #5964c9;
}
.card:nth-child(odd) {
  padding: 30px 0 30px 30px;
}
.card:nth-child(even) {
  padding: 30px 30px 30px 0;
}
.card:nth-child(odd)::before {
  left: 0px;
  top: 0px;
  bottom: -5px;
  border-width: 5px 0 5px 5px;
  border-radius: 50px 0 0 50px;
}
.card:nth-child(even)::before {
  right: 0;
  top: 0px;
  bottom: -5px;
  border-width: 5px 5px 5px 0;
  border-radius: 0 50px 50px 0;
}
.card:first-child::before {
  border-top: 0;
  border-top-left-radius: 0;
}
.card:last-child:nth-child(odd)::before {
  border-bottom: 0;
  border-bottom-left-radius: 0;
}
.card:last-child:nth-child(even)::before {
  border-bottom: 0;
  border-bottom-right-radius: 0;
}

.darkMode .dot {
  border: 3px solid #5964c9;
}

.dot {
  background: white;
  width: 15px;
  height: 15px;
  border-radius: 999px;
  position: absolute;
}

.lightMode .dot {
  border: 5px solid #fe086e;
}

.card:nth-child(odd) > .info > .dot {
  left: -5px;
}

.card:nth-child(even) > .info > .dot {
  right: -5px;
}

.info {
  max-height: 100%;
  align-items: center;
}
</style>
