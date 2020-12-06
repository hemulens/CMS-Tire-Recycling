<template>
	<router-link
		:to="inquiryDetailsLink"
		class="card mb-1"
		:class="{ active: isSelected }"
	>
		<div class="card-body">
			<div class="form-row">
				<div class="col-1">
					{{ adjustedIndex }}
				</div>
				<div class="col-3">
					{{ $filters.dateShort(inquiry.date) }},
					{{ $filters.time(inquiry.date) }}
				</div>
				<div class="col-4">
					{{ inquiry.name }}
				</div>
				<div class="col-4">
					{{ inquiry.country }}
				</div>
			</div>
		</div>
	</router-link>
  <!-- @click="openInquiry(inquiry)" -->
</template>

<script>
export default {
	props: ['inquiry', 'selectedId', 'index', 'page'],
	data() {
		return {
			inqPerPage: 100,
		};
	},
	computed: {
		inquiryDetailsLink() {
			// return `/teams/${this.id}`;  // standard scenario
			return {
				name: 'inquiryDetails',
				params: {
					inquiryId: this.inquiry._id,
				},
			};
		},
		isSelected() {
			return this.inquiry._id === this.selectedId;
		},
		adjustedIndex() {
			return this.inqPerPage * (this.page - 1) + (this.index + 1);
		},
	},
	methods: {
		openInquiry(inquiry) {
			this.$store.commit('selectInquiry', inquiry);
		},
	},
	// created() {
	//   console.log(this.isSelected);
	// }
};
</script>

<style lang="scss" scoped>
.card {
	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.03);
	}
	&.active {
		background-color: rgba(0, 0, 0, 0.03);
	}
}
.card-body {
	padding: 0.3rem 0.5rem;
}
a {
  color: inherit;
  &:hover {
    text-decoration: none;
  }
}
</style>
