<template>
	<div class="container-fluid">
		<div class="row">
			<search-form></search-form>
		</div>
	</div>
	<div class="container-fluid">
		<div class="form-row">
			<div class="col-md-6 item-list mt-1">
				<button
					v-if="!onFirstPage"
					@click="loadMore('-')"
					class="btn btn-secondary btn-sm btn-block mb-1"
				>
					Newer Inquiries
				</button>
				<app-inquiry
					v-for="(inquiry, index) in inquiries"
					:key="inquiry._id"
					:inquiry="inquiry"
					:index="index"
					:page="currentPage"
					:selectedId="selectedInquiryId"
				></app-inquiry>
				<button
					v-if="!onLastPage"
					@click="loadMore('+')"
					class="btn btn-secondary btn-sm btn-block mb-1"
				>
					Older Inquiries
				</button>
			</div>
			<div class="col-md-6 pt-1">
				<!-- <inquiry-details :page="currentPage"></inquiry-details> -->
				<div class="inquiry-details card">
					<div v-if="!paramId">
						<div class="card-body">
							Select inquiry
						</div>
					</div>
					<router-view :page="currentPage" :inquiries="inquiries"></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Inquiry from './Inquiry.vue';
// import InquiryDetails from './InquiryDetails.vue';
import SearchForm from '../search/SearchForm.vue';
export default {
	components: {
		AppInquiry: Inquiry,
		// InquiryDetails: InquiryDetails,
		SearchForm: SearchForm,
	},
	data() {
		return {
			currentPage: 1
		};
	},
	computed: {
		paramId() {
			return this.$route.params.inquiryId;
		},
		inquiries() {
			return this.$store.getters.inquiries;
		},
		lastPage() {
			return this.$store.getters.lastPage;
		},
		selectedInquiryId() {
			const selectedInquiry = this.$store.getters.selectedInquiry;
			if (!selectedInquiry) {
				return null;
			}
			return selectedInquiry._id;
		},
		onFirstPage() {
			return this.currentPage === 1;
		},
		onLastPage() {
			return this.lastPage;
		}
	},
	methods: {
		loadMore(page) {
			if (page === '+') {
				this.currentPage++;
			} else if (page === '-') {
				this.currentPage--;
			}
			this.$store.dispatch('fetchInquiries', {
				page: this.currentPage
			});
			// console.log(this.$store.getters.inquiries);
		},
	},
	created() {
		this.$store.dispatch('fetchInquiries');
	},
};
</script>

<style scoped>
.item-list {
	overflow: -moz-scrollbars-vertical;
	overflow-y: scroll;
	height: 80vh;
}
.inquiry-details.card {
  min-height: 80vh;
}
</style>
