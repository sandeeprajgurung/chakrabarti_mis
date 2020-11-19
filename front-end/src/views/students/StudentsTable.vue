<template>
	<div class="students-overview">
		<v-card>
			<v-data-table
				:headers="headers"
				:items="desserts"
				:search="search"
				sort-by="calories"
				class="elevation-1"
			>
				<template v-slot:top>
					<v-toolbar flat>
						<v-toolbar-title
							class="students-overview__card-title card-box-title d-none d-md-block"
						>
							<v-icon large dark
								>mdi-account-multiple-outline</v-icon
							>
						</v-toolbar-title>
						<v-divider
							class="mx-4 d-none d-md-block"
							inset
							vertical
						></v-divider>
						<span class="d-none d-md-block">Students</span>
						<v-spacer class="d-none d-md-block"></v-spacer>
						<v-text-field
							v-model="search"
							append-icon="mdi-magnify"
							label="Search"
							class="mr-5"
							single-line
							hide-details
						>
						</v-text-field>
						<v-dialog v-model="dialog" max-width="500px">
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									color="green"
									fab
									dark
									class="mb-2"
									small
									depressed
									v-bind="attrs"
									v-on="on"
								>
									<v-icon dark>mdi-account-plus</v-icon>
								</v-btn>
							</template>
							<v-card>
								<v-form
									ref="studentForm"
									v-model="valid"
									lazy-validation
									@submit.prevent="studentFormSubmit"
								>
									<v-card-title>
										<span class="headline">{{
											formTitle
										}}</span>
									</v-card-title>

									<v-card-text>
										<v-container>
											<v-row>
												<v-col cols="12">
													<v-text-field
														v-model="student.SNAME"
														label="Name"
														:rules="[
															(v) =>
																!!v ||
																'Name is required',
														]"
														dense
														required
													/>
												</v-col>
												<v-col cols="12" sm="6">
													<v-text-field
														v-model="
															student.EXAM_NO
														"
														:rules="examNumberRules"
														label="Exam number"
														dense
													>
													</v-text-field>
												</v-col>
												<v-col cols="12" sm="6">
													<v-text-field
														v-model="
															student.ROLL_NO
														"
														:rules="rollNumberRules"
														label="Roll number"
														dense
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6">
													<v-text-field
														v-model="student.EMAIL"
														:rules="emailRules"
														label="E-mail"
														dense
													>
													</v-text-field>
												</v-col>
												<v-col cols="12" sm="6">
													<v-text-field
														v-model="
															student.PHONE_NO
														"
														:rules="phoneNoRules"
														label="Phone number"
														dense
													>
													</v-text-field>
												</v-col>
												<v-col cols="12" sm="6">
													<v-select
														v-model="student.GENDER"
														:items="gender"
														item-text="title"
														item-value="value"
														:rules="[
															(v) =>
																!!v ||
																'Gender is required',
														]"
														label="Gender"
														dense
													></v-select>
												</v-col>
												<v-col cols="12" sm="6">
													<v-text-field
														v-model="student.BATCH"
														:rules="batchRules"
														label="Batch number"
														dense
													>
													</v-text-field>
												</v-col>
												<v-col cols="12" sm="6">
													<v-select
														v-model="
															student.PROGRAMMEID
														"
														:items="programmes"
														item-text="PRGNAME"
														item-value="ID"
														@change="
															selectedProgram
														"
														:rules="[
															(v) =>
																!!v ||
																'Program is required',
														]"
														label="Program"
														dense
													></v-select>
												</v-col>
												<v-col cols="12" sm="6">
													<v-select
														v-model="
															student.GROUPID
														"
														:items="group"
														item-text="grpname"
														item-value="ID"
														label="Group"
														:disabled="disable"
														dense
													></v-select>
												</v-col>
											</v-row>
										</v-container>
									</v-card-text>

									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn
											color="warning"
											text
											@click="close"
										>
											Cancel
										</v-btn>
										<v-btn
											color="primary"
											text
											type="submit"
										>
											Save
										</v-btn>
									</v-card-actions>
								</v-form>
							</v-card>
						</v-dialog>
						<v-dialog v-model="dialogDelete" max-width="500px">
							<v-card>
								<v-card-title class="text--h6">
									Are you sure you want to delete
									<v-chip
										class="ma-2"
										color="red"
										outlined
										pill
									>
										<v-icon left>
											mdi-account-outline
										</v-icon>
										{{ deleteStudent.SNAME }}
									</v-chip>
								</v-card-title>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn
										color="warning darken-1"
										text
										@click="closeDelete"
										>Cancel</v-btn
									>
									<v-btn
										color="red darken-1"
										text
										@click="deleteItemConfirm"
										>OK</v-btn
									>
									<v-spacer></v-spacer>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-toolbar>
				</template>
				<template v-slot:[`item.PROGRAMMEID`]="{ item }">
					{{ program(item.PROGRAMMEID) }}
				</template>
				<template v-slot:[`item.actions`]="{ item }">
					<v-icon
						color="warning"
						class="mr-2"
						@click="editItem(item)"
					>
						mdi-pencil
					</v-icon>
					<v-icon
						v-if="!item.PERCENT"
						color="error"
						@click="deleteItem(item)"
					>
						mdi-delete
					</v-icon>
				</template>
				<template v-slot:no-data>
					<v-card-text
						>Currently, There are no student available. Please add
						Student details to see list.</v-card-text
					>
				</template>
			</v-data-table>
		</v-card>
	</div>
</template>

<script>
import api from "@/api";

export default {
	data: () => ({
		gender: [
			{ value: "M", title: "Male" },
			{ value: "F", title: "Female" },
		],
		valid: true,
		student: {},
		programmes: [],
		group: [],
		modal: [],
		deleteStatus: "",
		disable: true,
		examNumberRules: [
			(v) => !!v || "Exam number is required",
			(v) =>
				Number.isInteger(Number(v)) ||
				"The value must be an integer number",
		],
		rollNumberRules: [
			(v) => !!v || "Roll number is required",
			(v) =>
				Number.isInteger(Number(v)) ||
				"The value must be an integer number",
		],
		batchRules: [
			(v) => !!v || "Batch is required",
			(v) =>
				Number.isInteger(Number(v)) ||
				"The value must be an integer number",
		],
		emailRules: [
			(v) => {
				if (v) return /.+@.+\..+/.test(v) || "E-mail must be valid";
				else return true;
			},
		],
		phoneNoRules: [
			(v) => {
				if (v)
					return (
						Number.isInteger(Number(v)) ||
						"The value must be an integer number"
					);
				else return true;
			},
		],

		search: "",
		dialog: false,
		dialogDelete: false,
		deleteStudent: {},
		headers: [
			{
				text: "Name",
				align: "start",
				value: "SNAME",
			},
			{
				text: "Roll no.",
				value: "ROLL_NO",
			},
			{
				text: "E-mail",
				value: "EMAIL",
				sortable: false,
			},
			{
				text: "Phone no.",
				value: "PHONE_NO",
				sortable: false,
			},
			{
				text: "Batch",
				value: "BATCH",
			},
			{
				text: "Program",
				value: "PROGRAMMEID",
			},
			{
				text: "Action",
				value: "actions",
				sortable: false,
			},
		],
		allStudents: [],
		desserts: [],
		editedIndex: -1,
		editedItem: {
			name: "",
			calories: 0,
			fat: 0,
			carbs: 0,
			protein: 0,
		},
		defaultItem: {
			name: "",
			calories: 0,
			fat: 0,
			carbs: 0,
			protein: 0,
		},
	}),

	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "New Student" : "Edit Student";
		},
	},

	watch: {
		dialog(val) {
			val || this.close();
		},
		dialogDelete(val) {
			val || this.closeDelete();
		},
	},

	async created() {
		this.load();
	},

	methods: {
		async load() {
			this.programmes = await api.getProgramme();
			this.desserts = await api.getAllStudents();
		},

		async selectedProgram() {
			console.log("this.student.PRGID :", this.student);
			if (this.student.PROGRAMMEID > 5) {
				this.disable = false;
				this.group = await api.getLlmGroup();
			} else if (this.student.PROGRAMMEID > 3) {
				this.disable = false;
				this.group = await api.getLlbGroup();
			} else {
				this.disable = true;
				this.group = [];
			}
		},

		async studentFormSubmit() {
			if (this.$refs.studentForm.validate() === true) {
				if (this.student.ID) {
					if (this.student.PRGID > 5) {
						await api.updateLlmStudent(this.student);
					} else {
						await api.updateLlbStudent(this.student);
					}
				} else {
					if (this.student.PRGID > 5) {
						await api.createLlmStudent(this.student);
					} else {
						await api.createLlbStudent(this.student);
					}
				}
				this.student = {}; // reset form
				this.$refs.studentForm.reset();
				this.dialog = false;
				let msg = {
					status: "true",
					text: "Student created successfully",
				};
				this.$emit("childToParent", msg);
				this.load();
			}
		},

		program(programId) {
			let programInfo = this.programmes.find(
				(element) => element.ID === programId
			);
			if (programInfo === undefined) {
				return "";
			}
			return programInfo.PRGNAME;
		},

		async editItem(item) {
			this.dialog = true;
			this.student = Object.assign({}, item);
			if (this.student.PROGRAMMEID > 3) {
				this.disable = false;
			}
			if (this.student.PROGRAMMEID > 5) {
				Object.assign(this.student, {
					GROUPID: this.student.LLMGROUPID,
				});
				this.group = await api.getLlmGroup();
			} else {
				Object.assign(this.student, {
					GROUPID: this.student.LLBGROUPID,
				});
				this.group = await api.getLlbGroup();
			}
		},

		deleteItem(item) {
			this.deleteStudent = Object.assign({}, item);
			this.dialogDelete = true;
		},

		closeDelete() {
			this.dialogDelete = false;
		},

		async deleteItemConfirm() {
			if (this.deleteStudent.PROGRAMMEID >= 6) {
				this.deleteStatus = await api.deleteLlmStudent(
					this.deleteStudent.ID
				);
			} else {
				this.deleteStatus = await api.deleteLlbStudent(
					this.deleteStudent.ID
				);
			}
			this.closeDelete();
			this.load();
			let msg = {
				status: this.deleteStatus.status,
				text: this.deleteStatus.message,
			};
			this.$emit("childToParent", msg);
		},

		close() {
			this.dialog = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		// save() {
		//   if (this.editedIndex > -1) {
		//     Object.assign(this.desserts[this.editedIndex], this.editedItem);
		//   } else {
		//     this.desserts.push(this.editedItem);
		//   }
		//   this.close();
		// },
	},
};
</script>

<style lang="scss" scoped>
.students-overview {
	&__card-title {
		background-color: #4caf50;
	}
}
</style>
