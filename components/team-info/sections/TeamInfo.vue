<template>
  <div id="about" class="grid lg:grid-cols-2 gap-8 column-2">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <div>
        <n-h2 class="text-4xl font-bold tracking-tight sm:text-6xl">About our project</n-h2>
      </div>
      <div>
        <p class="mt-6 text-lg leading-8">
          At the heart of our project lies a fascination with the intricate details encoded in blockchain transactions.
          We've set our sights on collecting and dissecting the metadata of NFTs, treating each piece of information as
          a puzzle piece that, when put together, forms a captivating narrative. Through meticulous data science
          techniques, we aim to uncover the relationships between various addresses, shedding light on the
          interconnected web of transactions within the blockchain.
        </p>
        <p class="mt-6 text-lg leading-8 opacity-70">
          Armed with our findings, we are channeling our data into the dynamic realm of Neo4j, a powerful graph
          database. Here, relationships between addresses will materialize into a visual symphony, providing insights
          into the patterns and connections that define the NFT landscape. Our Neo4j graph database is not just a
          repository; it's a canvas where the story of blockchain transactions unfolds in vibrant detail.
        </p>
      </div>
    </div>
    <div class="flex justify-center items-center mt-3 mr-11">
      <n-button strong ghost type="primary" class="w-1/2 h-20 ml-auto" @click="$router.push('/project/login')">
        Project section
      </n-button>
    </div>
  </div>
</template>
