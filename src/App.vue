<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-12 col-12">
			<app-header></app-header>
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
export default {
	components: {
		appHeader: Header
	},
	created() {
		console.log('created');
		this.$store.dispatch('initInquiries');
		this.$store.dispatch('initOrders');
		this.$store.dispatch('initSubscribers');
		// this.$store.dispatch('initSelectedOrder');
	}
};
</script>




<style>
	body {
		padding: 30px;
		font-size: 14px;
	}
	/* Orders (sort & move later) */
	/* Lists */
	.item-list {
		overflow: -moz-scrollbars-vertical; 
    overflow-y: scroll;
		height: 70vh;
	}
	/* Item Selected */
	div.card.selected {
		height: 70vh;
	}
	/* Option panel */
	.option-panel {
		position: absolute;
		bottom: 20px;
		right: 25px;
	}
	/* Buttons */
	.btn.btn-icon {
		/* padding: 3px 8px; */
		width: 28px;
		height: 28px;
	}
	.btn-icon i {
		position: relative;
		left: -275%;
		top: -5px;
	}

	/* Sliders */
	.slide-enter-active {
		animation: slide-in 200ms ease-out forwards;
	}
	.slide-leave-active {
		animation: slide-out 200ms ease-out forwards;
	}
	@keyframes slide-in {
		from {
			transform: translateY(-30px);
			opacity: 0;
		} to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		} to {
			transform: translateY(-30px);
			opacity: 0;
		}
	}
</style>
