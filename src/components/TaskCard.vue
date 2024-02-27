<template>
  <div class="task-card">
    <p>{{ task.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.task-card {
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
}
</style>
