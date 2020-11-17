<template>
	<v-form
		ref="marksForm"
		v-model="valid"
		@submit.prevent="marksFormSubmit"
		lazy-validation
	>
		<v-card>
			<v-card-text>
				<v-alert dense text type="info">
					Please enter <strong>'I'</strong> for abscent students.
				</v-alert>
				<v-row>
					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.Economic"
							:counter="3"
							:rules="validRule"
							label="Economics"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.Socology"
							:counter="3"
							:rules="validRule"
							label="Sociology"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.ClinicalWork"
							label="Clinical Works"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.HistoryOfNepal"
							:counter="3"
							:rules="validRule"
							label="History of Nepal"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.PrincipleOfLaw"
							:counter="3"
							:rules="validRule"
							label="General Principles of Law"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.ConceptOfLaw"
							:counter="3"
							:rules="validRule"
							label="General Concept of Law"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.Political"
							:counter="3"
							:rules="validRule"
							label="Political Theory Thoughts"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="4">
						<v-text-field
							v-model="marks.LogicLegalReasoning"
							:counter="3"
							:rules="validRule"
							label="Theories of Logic & Legal Reasoning"
							type="number"
							outlined
							dense
						></v-text-field>
					</v-col>
				</v-row>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" type="submit">
						<v-icon left>mdi-content-save</v-icon> Save
					</v-btn>
				</v-card-actions>
			</v-card-text>
		</v-card>
	</v-form>
</template>

<script>
import api from "@/api";

export default {
	props: {
		studentDetails: {
			type: Object,
			required: true,
		},
	},

	data: () => ({
		marks: {},
		valid: false,
		validRule: [
			(v) => !!v || "Required",
			// (v) => v.length <= 3 || "Marks must be less than 3 Digits",
		],
	}),

	methods: {
		async marksFormSubmit() {
			if (this.$refs.marksForm.validate() === true) {
				this.marks.SId = `${this.studentDetails.ID}`;
				this.marks.program = `${this.studentDetails.PROGRAMMEID}`;
				console.log(this.marks);
				await api.postLlbStudentMarks(this.marks);
				this.resetAll();
				this.close();
				let msg = {
					status: "true",
					text: "Marks added successfully",
					studentId: this.marks.SId,
				};
				this.$emit("childToParent", msg);
			}
		},

		close() {
			this.$emit("openModalStatus", false);
		},

		resetAll() {
			this.$refs.marksForm.reset();
			this.$refs.marksForm.resetValidation();
		},
	},
};
</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type="string"] {
	-moz-appearance: textfield;
}
</style>
