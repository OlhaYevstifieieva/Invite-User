<script>
export default {
  name: 'Step3',
  data() {
    return {
      form3: {
        accessAll: false,
        viewAll: false,
        createAll: false,
        approveAll: false,
        payAll: false,
        managementAll: false,
        access: [
          {id: 1, name: 'WarehouseReq', view: false, create: false, approve: false, pay: false},
          {id: 2, name: 'PurchaseReq', view: false, create: false, approve: false, pay: false},
          {id: 3, name: 'proposalsReq', view: false, create: false, approve: false, pay: false},
          {id: 4, name: 'Purchase orders', view: false, create: false, approve: false, pay: false},
          {id: 5, name: 'Receipts', view: false, create: false, approve: false, pay: false},
          {id: 6, name: 'Invoices', view: false, create: false, approve: false, pay: false},
          {id: 7, name: 'Expenses', view: false, create: false, approve: false, pay: false},
        ],
        management: {config: false, suppliers: false, budgets: false, warehouseManager: false, reports: false},
      }
    };
  },
  watch: {
    form3: {
      handler() {
        localStorage.form3 = JSON.stringify(this.form3);
      },
      deep: true
    },
    isDisabled: {
      handler() {
        localStorage.isDisabled = JSON.stringify(this.isDisabled);
      },
    },
  },
  mounted() {
    if (localStorage.form3) {
      this.form3 = JSON.parse(localStorage.form3);
    }
    if (localStorage.isDisabled) {
      this.isDisabled = JSON.parse(localStorage.isDisabled);
    }
  },
  methods: {
    submitForm() {
      const alert = {...JSON.parse(localStorage.form), ...JSON.parse(localStorage.form2), ...this.form3}
      console.log(alert);
    },
    toggleAll(type) {
      const allSelected = this.form3[`${type}All`];
      this.form3.access.forEach(item => {
        item[type] = allSelected;
      });
    },
    toggleAllManag() {
      const allSelected = this.form3.managementAll;
      this.form3.management.config = allSelected;
      this.form3.management.suppliers = allSelected;
      this.form3.management.budgets = allSelected;
      this.form3.management.warehouseManager = allSelected;
      this.form3.management.reports = allSelected;
    },
    toggleAllAccess() {
      this.form3.managementAll = this.form3.accessAll;
      this.form3.viewAll = this.form3.accessAll;
      this.form3.createAll = this.form3.accessAll;
      this.form3.approveAll = this.form3.accessAll;
      this.form3.payAll = this.form3.accessAll;
      this.toggleAllManag();
      this.toggleAll('view');
      this.toggleAll('create');
      this.toggleAll('approve');
      this.toggleAll('pay');
    },
    toggleDisabled() {
      this.isDisabled = true;
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm" class="form-container">
    <div class="column-wrap">
      <div class="column column--first">
        <p class="column--header">Access to:</p>
        <p class="column--text">All bellow</p>
        <p class="column--text">Warehouse requests</p>
        <p class="column--text">Purchase requests</p>
        <p class="column--text">Request for proposals</p>
        <p class="column--text">Purchase orders</p>
        <p class="column--text">Receipts</p>
        <p class="column--text">Invoices</p>
        <p class="column--text">Expenses</p>
      </div>

      <div class="column">
        <div class="middle--container">
          <p class="middle--sector">View only</p>
          <p class="middle--sector">Create</p>
          <p class="middle--sector">Approve</p>
          <p class="middle--sector">Pay</p>
        </div>
        <div class="middle--container">
          <input
            type="checkbox"
            class="checkbox"
            v-model.lazy="form3.viewAll"
            @change="() => toggleAll('view')"
          >
          <input
            type="checkbox"
            class="checkbox"
            v-model.lazy="form3.createAll"
            @change="() => toggleAll('create')"
          >
          <input
            type="checkbox"
            class="checkbox"
            v-model.lazy="form3.approveAll"
            @change="() => toggleAll('approve')"
          >
          <input
            type="checkbox"
            class="checkbox"
            v-model.lazy="form3.payAll"
            @change="() => toggleAll('pay')"
          >
        </div>
        <div v-for="(item) in form3.access" :key="item.id">
          <div class="middle--container">
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="item.view"
            >
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="item.create"
            >
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="item.approve"

            >
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="item.pay"

            >
          </div>
        </div>
      </div>
      <div class="line-vertical"></div>

      <div class="column column--last">
        <div class="middle--container middle--container-custom">
          <p class="middle--sector-custom">
            Management:
          </p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.75C5.44321 1.75 1.75 5.44321 1.75 10C1.75 14.5568 5.44321 18.25 10 18.25C14.5568 18.25 18.25 14.5568 18.25 10C18.25 5.44321 14.5568 1.75 10 1.75ZM0.25 10C0.25 4.61479 4.61479 0.25 10 0.25C15.3852 0.25 19.75 4.61479 19.75 10C19.75 15.3852 15.3852 19.75 10 19.75C4.61479 19.75 0.25 15.3852 0.25 10ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7V6C9.25 5.58579 9.58579 5.25 10 5.25ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V15C10.75 15.4142 10.4142 15.75 10 15.75C9.58579 15.75 9.25 15.4142 9.25 15V10C9.25 9.58579 9.58579 9.25 10 9.25Z" fill="#8e91a8"/>
          </svg>
        </div>
        <div class="checkbox--right">
          <input
            type="checkbox"
            class="checkbox"
            v-model.lazy="form3.managementAll"
            @change="toggleAllManag"
            id="managementAll"
          >
          <label 
            class="checkbox--text checkbox--text-main" 
            for="managementAll"
          >
            All bellow
          </label>
        </div>
        <div class="checkbox--right">
          <input 
            type="checkbox" 
            class="checkbox" 
            v-model.lazy="form3.management.config" 
            id="configuration" 
          >
          <label 
            class="checkbox--text checkbox--text" 
            for="configuration"
          >
            Configuration
          </label>
        </div>
        <div class="checkbox--right">
          <input
            type="checkbox"
            class="checkbox"
            v-model.lazy="form3.management.suppliers"
            id="suppliersAndItems"
          >
          <label
            class="checkbox--text checkbox--text"
            for="suppliersAndItems"
          >
            Suppliers and items
          </label>
        </div>
        <div class="checkbox--right">
          <input 
            type="checkbox" 
            class="checkbox" 
            v-model.lazy="form3.management.budgets" 
          >
          <label 
            class="checkbox--text checkbox--text" 
            for="budgets"
          >
            Budgets
          </label>
        </div>
        <div class="checkbox--right">
          <input 
            type="checkbox" 
            class="checkbox" 
            v-model.lazy="form3.management.warehouseManager" 
            id="warehouseManager" 
          >
          <label 
            class="checkbox--text checkbox--text" 
            for="warehouseManager"
          >
            Warehouse manager
          </label>
        </div>
        <div class="checkbox--right">
          <input 
            type="checkbox" 
            class="checkbox" 
            v-model.lazy="form3.management.reports" 
            id="reports" 
          >
          <label 
            class="checkbox--text checkbox--text" 
            for="reports"
          >
            Reports
          </label>
        </div>
        <div class="checkbox--right checkbox--right-admin">
          <input 
            type="checkbox" 
            class="checkbox" 
            v-model.lazy="form3.accessAll" 
            @change="toggleAllAccess" 
            id="Admin" 
          >
          <label 
            class="checkbox--text checkbox--text" 
            for="Admin"
          >
            Admin (Full access)
          </label>
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7V11.5M11 14.5V15M3.38254 19H18.6175C20.1387 19 21.103 17.3691 20.3699 16.0362L12.7524 2.18624C11.9926 0.80469 10.0074 0.804688 9.24757 2.18624L1.63011 16.0362C0.897013 17.3691 1.86134 19 3.38254 19Z" stroke="#EA9210" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="alert">
      <svg class="alert--svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.75C5.44321 1.75 1.75 5.44321 1.75 10C1.75 14.5568 5.44321 18.25 10 18.25C14.5568 18.25 18.25 14.5568 18.25 10C18.25 5.44321 14.5568 1.75 10 1.75ZM0.25 10C0.25 4.61479 4.61479 0.25 10 0.25C15.3852 0.25 19.75 4.61479 19.75 10C19.75 15.3852 15.3852 19.75 10 19.75C4.61479 19.75 0.25 15.3852 0.25 10ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7V6C9.25 5.58579 9.58579 5.25 10 5.25ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V15C10.75 15.4142 10.4142 15.75 10 15.75C9.58579 15.75 9.25 15.4142 9.25 15V10C9.25 9.58579 9.58579 9.25 10 9.25Z" fill="#8b8fa8"/>
      </svg>
      <p class="alert--text">
        The user becomes a <a href="/" target="_blank" title="Go to the company website">Power user</a> if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.
      </p>
    </div>

    <div class="footer-wrap">
      <div></div>
      <div>
        <div class="control">
          <button
            type="submit"
            class="button is-primary"
            @click="toggleDisabled"
          >
            Invite User
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
  .column-wrap {
    display: flex;
  }
  .column--first {
    width: 100%;
    max-width: 180px;
  }

  .column--last {
    padding-left: 50px;
  }
  .column--header {
    margin-bottom: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #676F8F;
  }
  .line-vertical {
    width: 1px;
    max-height: 410px;
    opacity: 0.1;
    border: 1px solid #000000;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .column--text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 144%;
    margin-bottom: 16px;
  }
  .middle--container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-bottom: 24px;
  }
  .middle--container-custom {
    justify-content: start;
    gap: 5px;
  }
  .middle--sector {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #676F8F;
    margin-right: 16px;
  }
  .middle--sector-custom {
    font-weight: 600;
    font-size: 16px;
    color: #676F8F;
    margin-right: 6px;
  }

  .checkbox {
    width: 16px;
    height: 16px;
  }

  .checkbox--right {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
  }

  .checkbox--right-admin {
    margin-top: 42px;
  }
  .checkbox--text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin: 0 16px;
  }
  .checkbox--text-main {
    font-weight: 600;
  }
  .alert {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 636px;
    margin: 32px 24px;
    padding: 10px;
    background: #f9f9ff;
    border-radius: 8px;
  }
  .alert--svg {
    width: 40px;
    height: 20px;
    margin: 10px;
  }
  .alert--text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #8d91a8;
  }
</style>