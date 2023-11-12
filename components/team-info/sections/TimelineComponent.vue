<template>
  <div id="timeline" class="overflow-hidden flex flex-col items-center space-y-5">
    <h1 class="text-3xl font-bold mb-0">Timeline</h1>
    <div class="timeline body" :class="theme">
      <div class="outer">
        <div v-for="(item, index) in timelineItems" :key="index" class="card">
          <div class="info">
            <n-card :title="item.title" class="title"
              >{{ item.content }} <template #header-extra>{{ item.date }}</template></n-card
            >
          </div>
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

<!--PINK VERSION DARK MODE-->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.body {
  display: flex;
  justify-content: center;
}
.timeline {
  background: transparent;
  margin: 20px auto;
  padding: 20px;
}
.card {
  position: relative;
  max-width: 400px;
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
  top: -5px;
  bottom: -5px;
  border-width: 5px 0 5px 5px;
  border-radius: 50px 0 0 50px;
}
@media only screen and (max-width: 400px) {
  .card:nth-child(odd)::before {
    top: -5px;
    bottom: -5px;
  }
}
.card:nth-child(even)::before {
  right: 0;
  top: 0;
  bottom: 0;
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

.lightMode .title {
  position: relative;
}

.darkMode .title {
  position: relative;
}

.title::before {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 999px;
  transform: translateY(450%);
}

.lightMode .title::before {
  background: white;
  border: 3px solid #fe086e;
}

.darkMode .title::before {
  background: white;
  border: 3px solid #5964c9;
}

.card:nth-child(odd) > .info > .title::before {
  left: -36px;
}
.card:nth-child(even) > .info > .title::before {
  right: -36px;
}
</style>
