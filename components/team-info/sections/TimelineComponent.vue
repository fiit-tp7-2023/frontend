<!-- <template>
  <div style="overflow: auto" class="justify-center items-center">
    <n-timeline vertical>
      <n-timeline-item content="Oops" />
      <n-timeline-item type="success" title="Success" content="Success content" time="2018-04-03 20:46" />
      <n-timeline-item type="error" content="Error content" time="2018-04-03 20:46" />
      <n-timeline-item type="warning" title="Warning" content="Warning content" time="2018-04-03 20:46" />
      <n-timeline-item type="info" title="Info" content="Info content" time="2018-04-03 20:46" />
    </n-timeline>
  </div>
</template>

<scrip setup>
import { NTimeline, NTimelineItem } from 'naive-ui';
</script> -->

<template>
  <div class="timeline">
    <div class="outer">
      <div v-for="(item, index) in timelineItems" :key="index" class="card">
        <div class="info">
          <h3 class="title">{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const timelineItems = [
  {
    title: 'Title 1 DD|MM|YYYY',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Title 2 DD|MM|YYYY',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Title 3 DD|MM|YYYY',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Title 4 DD|MM|YYYY',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Title 5 DD|MM|YYYY',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
</script>

<style scoped>
.timeline {
  /* background: var(--primary-color); */
  /* background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(59, 52, 92, 1) 100%); */
  background: #18181b;
  margin: 20px auto;
  padding: 20px;
}

.card {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 30px 30px 0;
}

.card::before {
  content: '';
  position: absolute;
  width: 50%;
  border: solid #fe086e;
  border-width: 5px 5px 5px 0;
}

.card:nth-child(odd)::before {
  left: 0px;
  top: -4.5px;
  bottom: -4.5px;
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

.info {
  display: flex;
  flex-direction: column;
  background: #333;
  color: gray;
  border-radius: 10px;
  padding: 10px;
}

.title {
  color: #fe086e;
  position: relative;
}

.title::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 999px;
  border: 3px solid #fe086e;
  left: -45px;
}
</style>
