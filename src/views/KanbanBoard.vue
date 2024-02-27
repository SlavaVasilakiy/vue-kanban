<template>
  <div class="kanban-board">
    <task-column v-for="(tasks, columnName) in columns" :key="columnName" :column-name="columnName" :tasks="tasks" />
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue";
import { defineStore } from "pinia";
import TaskColumn from "@/components/TaskColumn.vue";



const usePiniaStore = defineStore("kanban", () => {
  return {
    columns: {
      "ON-HOLD": [],
      "IN-PROGRESS": [],
      "NEEDS-REVIEW": [],
      "APPROVED": [],
    },
  };
});

export default {
  components: {
    TaskColumn,
  },
  setup() {
    const store = usePiniaStore();

    const saveState = () => {
      localStorage.setItem("kanban-state", JSON.stringify(store.columns));
    };

    onMounted(() => {
      const savedState = localStorage.getItem("kanban-state");
      if (savedState) {
        store.columns = JSON.parse(savedState);
      }
    });

    onBeforeUnmount(() => {
      saveState();
    });

    return {
      columns: store.columns,
    };
  },
};
</script>

<style scoped>
.kanban-board {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
</style>
