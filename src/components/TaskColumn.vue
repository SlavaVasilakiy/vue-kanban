<template>
	<div class="task-column">
		<h2>{{ columnName }}</h2>
		<div class="task-list">
			<task-card v-for="task in tasks" :key="task.id" :task="task" />
		</div>
	</div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";

export default {
	components: {
		TaskCard,
	},
	props: {
		columnName: String,
		tasks: Array,
	},
};
</script>

<style scoped>
.task-column {
	flex: 1;
	margin: 10px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}

.task-list {
	margin-top: 10px;
}
</style>
