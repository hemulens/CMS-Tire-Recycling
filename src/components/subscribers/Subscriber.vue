// Experimental

<template>
	<!-- Display mode -->
	<tr
		v-if="!editMode"
		@mouseover="itemHover(true)"
		@mouseleave="itemHover(false)"
		@click="editItem(true)"
	>
		<th scope="row">{{ index }}</th>
		<td>{{ $filters.dateShort(subscriber.date) }}</td>
		<td>{{ $filters.time(subscriber.date) }}</td>
		<td>{{ subscriber.country }}</td>
		<td>{{ subscriber.name }}</td>
		<td>{{ subscriber.email }}</td>
		<td>{{ subscriber.phone }}</td>
		<td>{{ bgrFiltered }}</td>
		<td>
			<div class="options-icon" v-show="itemHovered">
				<!-- edit icon -->
				<span class="icon" @click.stop="editItem(true)">
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-pencil-fill"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
						/>
					</svg>
				</span>
				<!-- delete icon -->
				<span class="icon" @click.stop="deleteItem">
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-trash-fill"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
						/>
					</svg>
				</span>
			</div>
		</td>
	</tr>
	<!-- Edit mode -->
	<tr
		v-else
		@mouseover="itemHover(true)"
		@mouseleave="itemHover(false)"
		@keyup.esc="editItem(false)"
		@keydown.enter="saveItem"
	>
		<th scope="row">{{ index }}</th>
		<td>{{ $filters.dateShort(subscriber.date) }}</td>
		<td>{{ $filters.time(subscriber.date) }}</td>
		<td>
			<select
				v-model="record.country"
				class="form-control form-control-sm custom-select custom-select-sm"
			>
				<option v-for="country in countries" :key="country">{{
					country
				}}</option>
			</select>
		</td>
		<td>
			<input
				type="text"
				v-model="record.name"
				class="form-control form-control-sm"
			/>
		</td>
		<td>
			<input
				type="email"
				v-model="record.email"
				class="form-control form-control-sm"
			/>
		</td>
		<td>
			<input
				type="text"
				v-model="record.phone"
				class="form-control form-control-sm"
			/>
		</td>
		<td>
			<select v-model="record.bgr" class="form-control form-control-sm custom-select custom-select-sm">
				<option value="I am new to tire recycling / pyrolysis">false</option>
				<option value="I run tire recycling / pyrolysis business">true</option>
			</select>
		</td>
		<td>
			<div class="options-icon" v-show="itemHovered">
				<!-- save icon -->
				<span class="icon" @click.stop="saveItem">
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-check-circle-fill"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
						/>
					</svg>
				</span>
				<!-- close icon -->
				<span class="icon" @click.stop="editItem(false)">
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-x-circle-fill"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
						/>
					</svg>
				</span>
			</div>
		</td>
	</tr>
</template>

<script>
export default {
	props: ['subscriber', 'index'],
	inject: ['countries'],
	data() {
		return {
			itemHovered: false,
			editMode: false,
			record: {
				name: this.subscriber.name,
				email: this.subscriber.email,
				phone: this.subscriber.phone,
				country: this.subscriber.country,
				bgr: this.subscriber.bgr,
				id: this.subscriber._id,
				date: this.subscriber.date,
			}
		};
	},
	computed: {
		bgrFiltered() {
			if (!this.record.bgr) {
				return '–';
			} else if (
				typeof (this.record.bgr === Array) &&
				this.record.bgr.length === 2
			) {
				return 'SPAM';
			} else if (this.record.bgr.search('run') != -1) {
				return 'true';
			} else if (this.record.bgr.search('new') != -1) {
				return 'false';
			} else {
				return '–';
			}
		},
	},
	methods: {
		itemHover(hover) {
			this.itemHovered = hover;
			// console.log(`item hovered: ${this.itemHovered}; id: (${this.index})`);
		},
		editItem(mode) {
			this.editMode = mode; // bool
		},
		deleteItem() {
			console.log('clicked delete');
			this.$store.dispatch('deleteSubscriber', this.record.id);
		},
		saveItem() {
			this.editMode = false;
			this.$store.dispatch('saveSubscriber', this.record);
		},
	},
};
</script>

<style lang="scss" scoped>
// TODO 7: faded icons module bgr
tr {
	&:hover {
		&:after {
			background: linear-gradient(
				to right,
				rgba(#ececec, 0),
				rgba(#ececec, 0.075) 50%
			);
		}
	}
}
.options-icon {
	display: flex;
	// align-items: right;
	// justify-content: right;
}
.icon {
	padding: 0 3px;
	&:first-child {
		padding-left: 0;
	}
	&:last-child {
		padding-right: 0;
	}
	&:hover {
		cursor: pointer;
		svg {
			color: rgba(0, 0, 0, 0.75);
		}
	}
	svg {
		color: rgba(0, 0, 0, 0.15);
	}
}
.form-control {
	&.form-control-sm {
		height: 1.5em;
		font-size: inherit;
		padding: 0.25rem 0.35rem;
	}
}
select {
	&.form-control {
		&.form-control-sm {
			padding: 0 0.35rem;
		}
	}
}
.table-hover {
	color: inherit;
	// background-color: rgba(0, 0, 0, 0.075);
}
</style>
