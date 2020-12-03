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
	.form-control-sm  {
		padding-left: 0.12rem;
		padding-right: 0.12rem;
	}
	&.custom-select {
		display: block;
		border-radius: 0.2rem;
	}
}
.btn {
	&.btn-sm {
		font-size: inherit;
	}
}
</style>
