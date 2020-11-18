<template>
	<v-card>
		<v-card-title>
			Students
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
		</v-card-title>

		<v-data-table :headers="headers" :items="students" :search="search">
			<template v-slot:[`item.RESULT`]="{ item }">
				<v-icon
					v-if="item.PERCENT || item.SID == resultAddedTrueId ||item.PERCENT === 0"
					color="green"
				>
					mdi-checkbox-marked-circle
				</v-icon>
			</template>

			<template v-slot:[`item.ACTIONS`]="{ item }">
				<v-icon
					color="primary"
					class="mr-2"
					@click.prevent="addMarks(item)"
				>
					mdi-plus-circle
				</v-icon>
				<v-icon
					v-if="item.PERCENT || item.SID == resultAddedTrueId"
					color="error"
					@click="deleteItem(item)"
				>
					mdi-delete
				</v-icon>
			</template>
		</v-data-table>

		<add-results-modal
			:studentInfo="studentDetails"
			:openPostResultModal="openPostResultModal"
			@resultStatus="resultAdded"
			@closePostResultModal="closePostResultModalStatus"
		/>
	</v-card>
</template>

<script>
import api from "@/api";
import AddResultsModal from "./AddResultsModal.vue";

export default {
	props: {
		students: {
			type: Array,
			required: true,
		},
	},

	components: {
		AddResultsModal,
	},

	data() {
		return {
			programId: 0,
			id: 0,
			sound: true,
			widgets: false,
			resultAddedTrueId: "",
			openResultViewModal: false,
			openPostResultModal: false,
			studentDetails: {},
			search: "",
			resultAddedTrue: false,
			headers: [
				{
					text: "Name",
					align: "start",
					sortable: true,
					value: "SNAME",
				},
				{ text: "Roll no.", value: "ROLL_NO", sortable: true },
				{ text: "Batch", value: "BATCH", sortable: true },
				{ text: "Result", value: "RESULT", sortable: false },
				{ text: "Action", value: "ACTIONS", sortable: false },
			],
		};
	},

	methods: {
		addMarks(item) {
			this.studentDetails = Object.assign({}, item);
			// this.id = this.studentDetails;
			// this.programId = this.studentDetails.PRGID;
			this.openPostResultModal = true;
		},

		closePostResultModalStatus(value) {
			this.openPostResultModal = value;
		},

		resultAdded(value) {
			this.resultAddedTrue = value.status;
			this.resultAddedTrueId = value.studentId;
		},

		async deleteItem(id) {
			await api.deleteMarks(id);
		},
	},
};
</script>
