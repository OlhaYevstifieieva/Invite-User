<script>
export default {
  name: 'Step1',
  data() {
    return {
      isDisabled: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        company: '',
        activeAll: false,
      },
    };
  },
  watch: {
    form: {
      handler() {
        localStorage.form1 = JSON.stringify(this.form);
      },
      deep: true,
    },
  },
  methods: {
    nextStep() {
      if (
        this.form.firstName &&
        this.form.lastName &&
        this.form.email
      ) {
        this.$router.push('/step2');
      } else {
        alert('Будь ласка, заповніть усі поля форми');
      }
    },
    toggleDisabled() {
      this.isDisabled = false;
    },
  },
  mounted() {
    if (localStorage.form) {
      this.form = JSON.parse(localStorage.form);
    }
    if (localStorage.isDisabled) {
      this.isDisabled = JSON.parse(localStorage.isDisabled);
    }
  },
};
</script>

<template>
  <form @submit.prevent="nextStep" class="form-container">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label" for="firstName">First Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model.lazy="form.firstName"
            />
          </div>
        </div>
        <div class="field">
          <label class="label" for="lastName">Last Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model.lazy="form.lastName"
            />
          </div>
        </div>
        <div class="field">
          <label class="label" for="email">Email Address</label>
          <div class="control">
            <input
              class="input"
              type="email"
              v-model.lazy="form.email"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label" for="position">Position</label>
          <div class="control">
            <div class="select">
              <select
                v-model.lazy="form.position"
              >
                <option value="" disabled selected>Please select a position</option>
                <option value="Developer">Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="QA Engineer">QA Engineer</option>
              </select>

            </div>
          </div>
        </div>
        <div class="field">
          <label class="label" for="company">Available in company</label>
          <div class="control">
            <div class="select">
              <select
                v-model.lazy="form.company"
              >
                <option value="" disabled selected>Please select a company</option>
                <option value="SciForce">SciForce</option>
                <option value="Globallogic">GlobalLogic</option>
                <option value="Abc">ABC</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrap">
      <div>
        <label class="label">Active in all companies</label>
        <div class="control">
          <label class="switch">
            <input
              type="checkbox"
              v-model="form.activeAll"
              :disabled="isDisabled"
            />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
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

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #00d1b2;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #00d1b2;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>