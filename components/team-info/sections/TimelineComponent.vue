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

<script setup>
const timelineItems = [
  {
    title: 'Shared Tag for 100 NFTs',
    content:
      'We can now turn our attention to a shared tag for 100 NFTs. This exciting development marks a significant step forward in our project.',
    date: '08|11|2023',
  },
  {
    title: ' Indexing Two ERC-721 Collections',
    content:
      'Inedexing team successfully indexed two collections, both utilizing the ERC-721 standard. Additionally, indexing team included metadata, allowing us to delve into exploration.',
    date: '21|10|2023',
  },
  {
    title: 'Beggining of the Project',
    content:
      'Our first meeting occured. We started to discuss the main ideas of the project and the technologies we will use.',
    date: '02|10|2023',
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
