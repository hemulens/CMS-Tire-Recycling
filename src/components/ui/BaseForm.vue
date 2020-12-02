<template>
	<div>
		<slot></slot>
	</div>
</template>

<style lang="scss">
.form-control-sm {
	font-size: inherit;
}
select {
	.form-control-sm, .custom-select-sm {
			padding-left: 0.12rem;
			padding-right: 0.12rem;
		}
}
.btn {
	&.btn-sm {
		font-size: inherit;
	}
}
</style>
