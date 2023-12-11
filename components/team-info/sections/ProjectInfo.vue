<template>
  <div id="about" class="grid gap-8 mt-2">
    <n-h1 class="font-bold text-6xl">Social Graph Explorer</n-h1>
    <div class="mx-auto lg:mx-0 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      <div>
        <n-h2 class="text-2xl font-bold tracking-tight underline">About our project</n-h2>

        <n-text depth="2" class="mt-6 text-lg leading-8">
          Dive into the captivating world of blockchain transactions with our project, centered around Ethereum and
          smart contracts. We transform complex data into a visual narrative, representing blockchain records as a
          dynamic graph. Explore the dependencies of tokenized real assets among network participants, bridging data
          science, blockchain, and visualization.
        </n-text>
      </div>
      <nuxt-img
        class="hidden md:block self-center justify-self-center"
        width="450"
        height="450"
        src="/images/graph.png"
      />
      <nuxt-img class="self-center justify-self-center" width="450" height="450" src="/images/screen.png" />
      <div>
        <n-h2 depth="1" class="text-2xl font-bold tracking-tight underline">Key features</n-h2>
        <n-text depth="2" class="mt-6 text-lg leading-8">
          <b>Graph layer</b>
          <n-text depth="3">
            - Uncover patterns in blockchain transactions by modeling dependencies among addresses and smart
            contracts.</n-text
          >
        </n-text>
        <br />
        <n-text depth="2" class="mt-6 text-lg leading-8">
          <b>Data Visualization</b>
          <n-text depth="3">
            - Our Neo4j graph database is not just a repository; it's a vibrant canvas revealing the intricate
            connections defining the NFT landscape.</n-text
          >
        </n-text>
      </div>
    </div>
    <n-button
      strong
      ghost
      type="primary"
      class="w-full h-20 font-bold text-lg blinking-dash self-center my-8"
      @click="$router.push('/project/login')"
    >
      PROJECT SECTION
    </n-button>
  </div>
</template>
<style>
.blinking-dash {
  overflow: hidden;
}

.blinking-dash .n-button__content::after {
  content: '<<<';
  margin-left: 1rem;
  animation: blinker 1s linear infinite;
}

.blinking-dash .n-button__content::before {
  content: '>>>';
  margin-right: 1rem;
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
