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
    title: 'Title 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'DD|MM|YYYY',
  },
  {
    title: 'Title 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'DD|MM|YYYY',
  },
  {
    title: 'Title 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'DD|MM|YYYY',
  },
  {
    title: 'Title 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'DD|MM|YYYY',
  },
  {
    title: 'Title 5 ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'DD|MM|YYYY',
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
