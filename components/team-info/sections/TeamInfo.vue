<template>
  <div id="about" class="grid lg:grid-cols-2 gap-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <div>
        <n-h2 class="text-4xl font-bold tracking-tight sm:text-6xl">About our project</n-h2>
      </div>
      <div>
        <n-text depth="1" class="mt-6 text-lg leading-8">
          Dive into the captivating world of blockchain transactions with our project, centered around Ethereum and
          smart contracts. We transform complex data into a visual narrative, representing blockchain records as a
          dynamic graph. Explore the dependencies of tokenized real assets among network participants, bridging data
          science, blockchain, and visualization.
        </n-text>

        <n-h1 depth="1" class="font-bold tracking-tight">Key features</n-h1>
        <n-text depth="2" class="mt-6 text-lg leading-8">
          <b>Graph layer</b>
          <n-text depth="3">
            - Uncover patterns in blockchain transactions by modeling dependencies among addresses and smart
            contracts.</n-text
          >
        </n-text>
        <n-text depth="2" class="mt-6 text-lg leading-8">
          <br /><b>Data Visualization</b>
          <n-text depth="3">
            - Our Neo4j graph database is not just a repository; it's a vibrant canvas revealing the intricate
            connections defining the NFT landscape.</n-text
          >
        </n-text>
      </div>
    </div>
    <div class="flex justify-center items-center mt-3">
      <n-button
        strong
        round
        type="primary"
        class="w-full md:w-1/2 h-20 text-xl rounded-lg"
        @click="$router.push('/project/login')"
      >
        Project Section
      </n-button>
    </div>
  </div>
</template>
