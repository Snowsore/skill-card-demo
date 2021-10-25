<template>
  <div class='inputView'>
    <div class='tabMenu'>
      <InputTab to='/search' text='Candidate Search'/>
      <InputTab actived to='/assessment' text='Candiate Assessment' />
    </div>
    <InputBox v-model='form.name' placeholder='Enter Candidate Name...'>
      <Label h2 marked>Name</Label>
    </InputBox>
    <hr>
    <div class='urlHeader'>
      <Label h1 marked>Account URLs:</Label>
    </div>
    <InputBox v-model='form.microsoftAcademic' placeholder='https://academic.microsoft.com/author/1234567890/'>
      <Label h2 hint='Do you know Microsoft?'>Microsoft Academic URL</Label>
    </InputBox>
    <InputBox v-model='form.github' placeholder='https://github.com/github_username'>
      <Label h2 hint='Github Funhub.'>Github Account URL</Label>
    </InputBox>
    <InputBox v-model='form.stackOverflow' placeholder='https://stackoverflow.com/users/123456/name'>
      <Label h2 hint='Sagment fault D:'>Stack Overflow Account URL</Label>
    </InputBox>
    <hr>
    <InputBox v-model='form.skills' placeholder='Select Skills'>
      <Label h2>Skills</Label>
    </InputBox>
    <div class='skillTags'>
      <SkillTag v-for='tag in tags' :key='tag' @click='addTag(tag)'>{{ tag }}</SkillTag>
    </div>
    <div class='moreContainer'>
      <MoreButton @click='more()'/>
    </div>
    <div class='resetassessContainer'>
      <ResetButton @click='reset()'>Reset</ResetButton>
      <AssessButton @click='assess()'>Assess</AssessButton>
    </div>
  </div>
</template>

<script>

import InputTab from '@/components/InputTab.vue'
import InputBox from '@/components/InputBox.vue'
import Label from '@/components/Label.vue'
import MoreButton from '@/components/MoreButton.vue'
import ResetButton from '@/components/ResetButton.vue'
import AssessButton from '@/components/AssessButton.vue'
import SkillTag from '@/components/SkillTag.vue'

import api from '@/api.js'

export default {
  data() {
    return {
      form: {
        name: '',
        microsoftAcademic: '',
        github: '',
        stackOverflow: '',
        skills: ''
      },
      tags: [
        'Artifical intelligent',
        'Deep learning',
        'Machine learning',
        'Natural language processing',
        'Computer vision',
        'Data mining',
        'Multimedia',
        'Social relation',
        'Recommender system',
        'Mable device',
        'Telecommunications',
        'Computer network',
        'Electronic engineering',
        'Algorithm',
        'css'
      ]
    }
  },
  components: {
    InputTab,
    InputBox,
    Label,
    MoreButton,
    ResetButton,
    AssessButton,
    SkillTag
  },
  methods: {
    assess() {
      api.postAssess(this.form).then(() => {
        this.$router.push('/score')
      })
    },
    more() {
      alert('More what ?')
    },
    reset() {
      if(confirm('Reset ?')) this.cleanForm()
    },
    cleanForm() {
      for(let k in this.form) this.form[k] = ''
    },
    addTag(tag) {
      this.form.skills += tag + ', '
    }
  }
}
</script>

<style scoped>

  .inputView {
    max-width: 1800px;
    background: #ffffff;
    padding: 10px;
    box-shadow: 0px 0px 8px 3px #00000030;

    margin-top: 10px;
    margin-bottom: 50px;
    padding: 30px 30px 30px 30px;

    max-width: 1400px;
    width: 90%;

    border-radius: 5px;
  }

  .tabMenu {
    text-align: right;
    margin-bottom: 80px;
  }

  hr {
    border-top: 2px solid #00000010;
  }

  .urlHeader {
    text-align: left;

    margin-top: 30px;
  }

  .moreContainer {
    text-align: left;
  }

  .resetassessContainer {
    text-align: right;
  }

  .skillTags {
    margin-left: 33%;
    text-align: left;
  }

</style>