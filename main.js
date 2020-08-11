// Vue.component('task-list', {
// 	template: `
// 	<div>
// 		<task v-for="task in tasks">{{ task.task }}</task>
// 	</div>
// 	`,

// 	data() {
// 		return {
// 			 tasks: [
// 			 	{ task: 'Go to the store', complete: true },
// 			 	{ task: 'Go to the email', complete: false },
// 			 	{ task: 'Go to the farm', complete: true },
// 			 	{ task: 'Go to work', complete: false }
// 			 ]
// 		};
// 	}

// });

// Vue.component('task', {
// 	template: '<li><slot></slot></li>',

	// data() {
	// 	return {
	// 		message: 'Foobar'
	// 	};
	// }
// });

// Vue.component('message', {
// 	props: ['title', 'body'],
// 	data() {
// 		return {
// 			isVisible: true
// 		};
// 	},
// 	template: `
// 	<article class="message" v-show="isVisible">
// 	  <div class="message-header">
// 	    {{ title }}
// 	    <button class="delete" @click="isVisible = false" aria-label="delete"></button>
// 	  </div>
// 	  <div class="message-body">
// 	    {{ body }}
// 	  </div>
// 	</article>
// 	`,

// 	methods: {

// 		hideModal() {
// 			this.isVisible = false;
// 		}
// 	}
// });

// Vue.component('modal', {
// 	template: `
// 	<div class="modal is-active">
// 		<div class="modal-background"></div>
// 		<div class="modal-content">
// 		<!-- Any other Bulma elements you want -->
// 			<div class="box">
// 				<slot></slot>
// 			</div>
// 		</div>
// 		<button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
// 	</div>
// 	`,
// });

// Vue.component('tabs', {
// 	template: `
// 	<div>
// 		<div class="tabs">
// 		  <ul>
// 		    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
// 		    	<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
// 		    </li>
// 		  </ul>
// 		</div>

// 		<div class="tabs-details">
// 			<slot></slot>
// 		</div>
// 	</div>
// 	`,

// 	data() {
// 		return { tabs: [] };
// 	},

// 	created() {
// 		this.tabs = this.$children;
// 	},
// 	methods: {
// 		selectTab(selectTab) {
// 			this.tabs.forEach(tab => {
// 				tab.isActive = (tab.name == selectTab.name);
// 			});
// 		}
// 	}
// });

// Vue.component('tab', {
// 	template: `
// 		<div v-show="isActive"><slot></slot></div>
// 	`,

// 	props: {
// 		name: { required: true },
// 		selected: { default: false }
// 	},

// 	data() {

// 		return {
// 			isActive: false
// 		};
// 	},

// 	computed: {
// 		href() {
// 			return '#' + this.name.toLowerCase().replace(/ /g, '-');
// 		}
// 	},

// 	mounted() {
// 		this.isActive = this.selected;
// 	},
// });

// window.Event = new Vue();
// window.Event = new class {
// 	constructor() {
// 		this.vue = new Vue();
// 	}

// 	fire(event, data = null) {
// 		this.vue.$emit(event, data);
// 	}

// 	listen(event, callback) {
// 		this.vue.$on(event, callback);
// 	}
// }

// Vue.component('coupon', {
// 	template: `
// 		<input placeholder="Enter your coupon code" @blur="onCouponApplied">
// 	`,
// 	methods: {
// 		onCouponApplied() {
// 			// alert("applied!");
// 			// this.$emit('applied');
// 			// Event.$emit('applied');
// 			Event.fire('applied');

// 		}
// 	}
// });

// new Vue({
// 	el: '#root',

// 	data: {
// 		couponApplied: false
// 	},

// 	// methods: {
// 	// 	onCouponApplied() {
// 	// 		// alert('It was applied');
// 	// 		this.couponApplied = true;
// 	// 	}
// 	// }
// 	created() {
// 		// Event.$on('applied', () => alert("Handling it!"))
// 		Event.listen('applied', () => alert("Handling it!"))
// 	}

// 	// data: {
// 	// 	showModal: false
// 	// }
// })

// Vue.component('modal', {
// 	template: `
// 		<div class="modal is-active">
// 		  <div class="modal-background"></div>
// 		  <div class="modal-card">
// 		    <header class="modal-card-head">
// 		      <p class="modal-card-title">
// 				<slot name="header"></slot>
// 		      </p>
// 		      <button class="delete" aria-label="close"></button>
// 		    </header>
// 		    <section class="modal-card-body">
// 		   		<slot></slot>
// 		    </section>
// 		    <footer class="modal-card-foot">
// 		      <slot name="footer">
// 				<button class="button is-success">Okay</button>
// 		      </slot>
// 		    </footer>
// 		  </div>
// 		</div>
// 	`,
// });
Vue.component('progress-view', {

	data() {
		return { completionRate: 50 };
	}
});

new Vue({
	el: '#root',
})