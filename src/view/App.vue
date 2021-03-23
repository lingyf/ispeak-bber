<template>
  <div id="ispeak" class="ispeak">
    <div class="loading" v-if="loading">
      <img src="https://7.dusays.com/2021/03/04/d2d5e983e2961.gif" alt="" />
    </div>

    <xk-issue
      :speakData="speakData"
      :name="name"
      :fromcolor="fromcolor"
      :avatar="avatar"
    />
    <xk-footer />
  </div>
</template>

<script>
import XkFooter from './components/XkFooter.vue';
import XkIssue from './components/XkIssue.vue';
import axios from 'axios';
import Vue from 'vue';

export default {
  components: {
    XkFooter,
    XkIssue
  },
  data() {
    return {
      speakData: [],
      loading: true,
      name: '',
      fromcolor: '',
      avatar: ''
    };
  },
  methods: {
    // 获得当前Speak数据
    async getSpeakData() {
      const {
        jsonfile,
        name,
        fromcolor = 'rgb(245, 150, 170)',
        avatar
      } = Vue.prototype.$speakData;
      const { data } = await axios.get(jsonfile, {
        params: {
          date: Date.now()
        }
      });
      this.loading = false;
      this.name = name;
      this.fromcolor = fromcolor;
      this.avatar = avatar;
      if (data.data.length > 0) {
        this.speakData = data.data;
      } else {
        this.speakData = [
          {
            content:
              '暂无哔哔任何内容，此哔哔为系统默认，当你发布新的哔哔时会自动消失！',
            from: '系统默认',
            date: '2020-11-14T21:44:54+08:00'
          }
        ];
      }
      // console.log(data);
    }
  },
  mounted() {
    this.getSpeakData();
  },
  computed: {},

  watch: {}
};
</script>

<style scoped>
.loading {
  text-align: center;
}
</style>