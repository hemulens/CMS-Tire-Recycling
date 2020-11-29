<template>
	<app-header></app-header>
	<main>
		<router-view></router-view>
		<!-- <transition name="slide" mode="out-in"></transition> -->
	</main>
</template>

<script>
import Header from './components/Header.vue';
export default {
	components: {
		appHeader: Header
	},
	// created() {
	// 	console.log('created');
	// 	this.$store.dispatch('fetchInquiries');	 // TODO 4: Move to Inquiries component
	// 	this.$store.dispatch('fetchOrders');	 // TODO 4: Move to Orders component
	// 	this.$store.dispatch('fetchSubscribers');  // TODO 4: Move to Subscribers component
	// 	// this.$store.dispatch('initSelectedOrder');
	// }
};
</script>




<style lang="scss">
	/* Fonts */
	@font-face {
		font-family: "PublicaPlay-Thin";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-Thin.otf');
	}
	@font-face {
		font-family: "PublicaPlay-ExtraLight";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-ExtraLight.otf');
	}
	@font-face {
		font-family: "PublicaPlay-UltraLight";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-UltraLight.otf');
	}
	@font-face {
		font-family: "PublicaPlay-Light";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-Light.otf');
	}
	@font-face {
		font-family: "PublicaPlay-Regular";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-Regular.otf');
	}
	@font-face {
		font-family: "PublicaPlay-Medium";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-Medium.otf');
	}
	@font-face {
		font-family: "PublicaPlay-Bold";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-Bold.otf');
	}
	@font-face {
		font-family: "PublicaPlay-ExtraBold";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-ExtraBold.otf');
	}
	@font-face {
		font-family: "PublicaPlay-Black";
		src: url('~@/assets/fonts/PublicaPlay/PublicaPlay-Black.otf');
	}
	// General styles
	body {
		margin-top: 41px;
		font-size: 12px;
	}
	// Global table settings
	// .table {
	// 	th {
	// 		:first-child {
	// 			padding-left: 15px;
	// 		}
	// 		:last-child {
	// 			padding-right: 10px;
	// 		}
	// 	}
	// }	


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
