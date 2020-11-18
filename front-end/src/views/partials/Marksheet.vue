<template>
	<v-card class="mt-5 pa-12">
		<div class="d-flex justify-center align-center">
			<v-card-title class="pa-0">
				<v-row class="justify-center ma-0">
					<img
						src="../../assets/result-logo.png"
						alt=""
						srcset=""
						width="100"
						height="100"
					/>
					<v-list class="ml-4 text-center align-center">
						Chakrabarti HaBi Education Academy (College of law)<br />
						Department of Examination<br />
						Bijulibazar, Kathmandu
					</v-list>
				</v-row>
			</v-card-title>
		</div>

		<v-card-title class="pa-0 mt-10">
			<v-row class="justify-center ma-0">
				<div>
					Pre-Board Examination 2020
				</div>
			</v-row>
		</v-card-title>

		<v-card-title class="pa-0 mb-3">
			<v-row class="justify-space-between ma-0">
				<div class="text-subtitle-2">
					Name: {{ studentMarks[0].SNAME }}
				</div>
				<div class="text-subtitle-2">
					Roll No.: {{ studentMarks[0].ROLL_NO }}
				</div>
			</v-row>
		</v-card-title>

		<v-card-title class="pa-0 mb-3">
			<v-row class="justify-space-between ma-0">
				<div class="text-subtitle-2">
					Level: {{ studentLevel(studentMarks[0].PROGRAMMEID) }}
				</div>
				<div class="text-subtitle-2">
					Program: {{ program(studentMarks[0].PROGRAMMEID) }}
				</div>
			</v-row>
		</v-card-title>

		<v-card-title class="pa-0 mb-3">
			<v-row class="justify-space-between ma-0">
				<div class="text-subtitle-2">
					Batch: {{ studentMarks[0].BATCH }}
				</div>
				<div class="text-subtitle-2">
					Symbol no.: {{ studentMarks[0].EXAM_NO }}
				</div>
			</v-row>
		</v-card-title>

		<br />

		<v-simple-table class="mt-5">
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-center">Name</th>
						<th class="text-center">Full Marks</th>
						<th class="text-center">Pass Marks</th>
						<th class="text-center">Marks Obtained</th>
						<th class="text-center">Remarks</th>
					</tr>
				</thead>
				<tbody class="result-tbody">
					<tr
						v-for="(value, key) in studentMarks[1]"
						:key="key"
						class="text-center"
					>
						<td class="text-left">{{ textFormat(key) }}</td>
						<td>100</td>
						<td>40</td>
						<td>{{ value }}</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3" class="font-weight-bold">
							Percentage:
						</td>
						<td class="text-center">{{ studentMarks[0].PERCENT }}%</td>
						<td></td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>

		<br />

		<v-simple-table class="mt-5">
			<template v-slot:default>
				<thead>
					<th class="text-center">______________</th>
					<th class="text-center">______________</th>
					<th class="text-center">______________</th>
					<th class="text-center">______________</th>
				</thead>
				<tbody class="result-tbody">
					<tr>
						<th class="text-center">Prepared By</th>
						<th class="text-center">Checked By</th>
						<th class="text-center">Verified By</th>
						<th class="text-center">Chairman</th>
					</tr>
				</tbody>
			</template>
		</v-simple-table>

		<br />
		<v-btn
			elevation="6"
			small
			class="mr-4 no-print"
			type=""
			color="primary"
			@click="handlePrintView"
		>
			Print
		</v-btn>
	</v-card>
</template>

<script>
import api from "@/api";

export default {
	props: {
		studentMarks: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			programme: {},
			marks: [
				{
					name: "Subject 1",
					full: 80,
					pass: 35,
					obtained: 10,
					remarks: "*",
				},
				{
					name: "Subject 2",
					full: 80,
					pass: 35,
					obtained: 40,
					remarks: "",
				},
				{
					name: "Subject 3",
					full: 80,
					pass: 35,
					obtained: "-",
					remarks: "Abscent",
				},
				{
					name: "Subject 4",
					full: 80,
					pass: 35,
					obtained: 20,
					remarks: "*",
				},
				{
					name: "Subject 5",
					full: 80,
					pass: 35,
					obtained: 60,
					remarks: "",
				},
			],
		};
	},

	async mounted() {
		this.programme = await api.getProgramme();
	},

	methods: {
		handlePrintView() {
			window.print();
		},

		textFormat(value) {
			return value.replace(/_/g, " ");
		},

		program(programId) {
			let programInfo = this.programme.find(
				(element) => element.ID === programId
			);
			if (programInfo === undefined) {
				return "";
			}
			return programInfo.PRGNAME;
		},

		studentLevel(numb) {
			if (numb >= 6 ) {
				return "Master";
			}
			return "Bachelor";
		}
	},
};
</script>

<style lang="scss" scoped></style>
