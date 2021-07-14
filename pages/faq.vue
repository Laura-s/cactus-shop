<template>
  <div class="pt-3 bg-light pb-5 d-flex justify-content-center align-items-center">
    <div class="container text-primary px-3 px-md-5">
      <h4 class="text-center mt-5">FAQ</h4>
      <div class="collection-line mx-auto mt-4 mb-3"></div>
      <div class="container d-flex flex-column justify-content-end px-0 px-md-5 ">
        <input type="text" v-model="searchFAQ" placeholder="search" class="ml-auto ">
        
        <div :key="index" v-for="(question, index) in filterQuestions" role="tablist" >
          <b-card no-body class="question-wrap mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle="'accordion-' + index"
                class="question-title d-flex justify-content-between bg-light"
                >{{ question.title
                }}<font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  size="sm"
                />
              </b-button>
            </b-card-header>
            <b-collapse
              :id="'accordion-' + index"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>{{ question.answer }} </b-card-text>
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                <font-awesome-icon :icon="['fab', 'twitter']" size="sm" />
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: true,
    searchFAQ: '',

    questions: [
      {
        title: "How are the plants shipped?",
        answer:
          "Describe the item or answer the question so that site visitors who are interested get more information.",
      },
      {
        title: "Planting instructions",
        answer: `1. Lorem ipsum dolor  2. amet consectetur adipisicing  3. Quidem, at!`,
      },
      {
        title: "Returns",
        answer:
          "Describe the item or answer the question so that site visitors who are interested get more information.",
      },
      {
        title: "Lorem ipsum?",
        answer:
          "Describe the item or answer the question so that site visitors who are interested get more information.",
      },
    ],
  }),
  computed: {
  filterQuestions() {
    return this.questions.filter( question => {
      return !this.searchFAQ ||
        question.answer.toLowerCase().indexOf(this.searchFAQ.toLowerCase()) > -1
    })
  },
  }
};
</script>

<style lang="scss" scoped>
.question-wrap {
  border: none;
}
.question-title {
  border: none;
  color: $primary;
}
</style>