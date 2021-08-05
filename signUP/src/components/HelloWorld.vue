<template>
  <div id="signUp">
    <h1>报名表单</h1>
    <form name="input" method="post">
      <div class="box">
      <div class="items">
      <span>姓名：</span>
      <input v-model="datas.name" type="text"/>
      </div>
      <div class="items">
      <span>学院：</span>
      <select v-model="datas.faculty" name="faculties" @change="showFaculty">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}<span v-if="option != '体育'">学院</span
          ><span v-else>系</span>
        </option>
      </select>
      <br />
      </div>
      <div class="items">
      <span>球衣号码：</span>
      <input v-model="datas.number" type="nubmer"/>
      </div>
      <div class="items">
        <span>场上位置：</span>
        <select v-model="datas.work" name="works">
          <option v-for="work in works" :key="work" :value="work">
            {{work}}
          </option>
        </select>
      </div>
      <input type="submit" id="submit" value="提交"/>
      </div>
    </form>
  </div>
</template>

<script setup>
// import { defineProps, reactive } from "vue";
// import { defineEmit } from "vue";
// defineProps({
//   msg: String,
// });
const options = [
  "公路",
  "汽车",
  "工程机械",
  "经济与管理",
  "电子与控制工程",
  "信息工程",
  "地质工程与测绘",
  "地球科学与资源",
  "建筑工程",
  "水利与环境",
  "建筑",
  "材料科学与工程",
  "马克思主义",
  "人文",
  "运输工程",
  "土地工程",
  "理",
  "外国语",
  "体育",
  "未来交通",
  "长安都柏林国际交通",
];
const works=[
  '大前锋',
  '小前锋',
  '中锋',
  '得分后卫',
  '控球后卫'
];
var datas = {
  name: "a",
  faculty: options[0],
  number: "",
  work:works[0]
};

const showFaculty = function (e) {
  console.log(datas.faculty);
};


// vue.createApp(signUp).mount('#signUp')
// const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
select{
  width: 180px;
  height: 30px;
  float: right;
}
span{
  float: left;
}
input{
  float: right;
  width:172px;
  height: 24px;
}
.items{
  margin: 30px auto;
  width: 300px;
  height: 30px;
}
#submit{
  width:94px;
  height: 30px;
  margin:30px auto;
  float: none;
}
</style>
