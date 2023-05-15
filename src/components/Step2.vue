<script>
export default {
  name: 'Step2',
  data() {
    return {
      form2: {
        mainLocation: '',
        allLocations: false,
        locations: [
          {id: 1, name: 'Berlin', selected: false},
          {id: 2, name: 'Venice Office', selected: false},
          {id: 3, name: 'USA Office', selected: false},
          {id: 4, name: 'Canada', selected: false},
          {id: 5, name: 'Poland Office', selected: false},
          {id: 6, name: 'Mexico', selected: false},
          {id: 7, name: 'Ukraine', selected: false},
        ]
      }
    };
  },
  watch: {
    form2: {
      handler() {
        localStorage.form2 = JSON.stringify(this.form2);
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.form2) {
      this.form2 = JSON.parse(localStorage.form2);
    }
    if (localStorage.isDisabled) {
      this.isDisabled = JSON.parse(localStorage.isDisabled);
    }
  },
  methods: {
    nextStep() {
      if (this.form2.mainLocation) {
        this.$router.push('/step3');
      } else {
        alert('Будь ласка, зоберіть усі поля форми');
      }
    },
    toggleAllLocations() {
      const allSelected = this.form2.allLocations;
      this.form2.locations.forEach(location => {
        location.selected = allSelected;
      });
    },
    toggleDisabled() {
      this.isDisabled = false;
    },
  },
};
</script>

<template>
  <form @submit.prevent="nextStep" class="form-container">
    <div class="field">
      <label class="label">Main Location <span class="warning">*</span></label>
      <div class="control">
        <div class="select">
          <select
            v-model.lazy="form2.mainLocation"
            required
          >
            <option value="" disabled selected>Please select a location</option>
            <option value="US">US</option>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <input
        type="checkbox"
        class="checkbox checkbox--size"
        v-model.lazy="form2.allLocations"
        id="allLocations"
        @change="toggleAllLocations"
      >
      <label 
        class="checkbox__text" 
        for="allLocations"
      >
        Select All Locations
      </label>

      <p class="label label--available">
        Available Locations
      </p>
      <div class="control">
        <div class="container">
          <div class="columns is-multiline">
            <div
              v-for="item in form2.locations"
              :key="item.id"
              class="column is-one-quarte"
            >
              <input
                type="checkbox"
                v-model.lazy="item.selected"
                :id="item.name"
                class="checkbox--size"
              >
              <label class="checkbox__text" :for="item.name">
                {{ item.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
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
            Next Step
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
  .columns {
    display: flex;
    flex-wrap: wrap;
  }

  .column {
    flex-basis: 50%;
  }

  .warning {
    color: red;
  }

  .label--available {
    margin-top: 20px;
  }

  .field-main-location {
    flex: none;
    width: 50%;
  }

  .checkbox__text {
    margin-left: 7px;
  }

  .checkbox--size {
    width: 16px;
    height: 16px;
  }

</style>