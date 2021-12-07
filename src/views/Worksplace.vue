<template>
  <div class="dashboard">
    <div class="dashboard__header">
      <div class="dashboard__header__userinfo">
        <div class="dashboard__header__userinfo__title">
         {{welcome}}
        </div>
        <div class="dashboard__header__userinfo__depinfo">
          {{postAndDep}}
        </div>
      </div>
    </div>
    <div class="dashboard__body">
      <div class="dashboard__body__left">
        <div class="dashboard__body__left__statistics">
          <div class="dashboard__body__left__statistics__item">
            <div class="title">紧急</div>
            <div class="value urgent">{{todoTotal.urgent}}</div>
          </div>
          <div class="dashboard__body__left__statistics__item">
            <div class="title">重要</div>
            <div class="value important">{{todoTotal.important}}</div>
          </div>
          <div class="dashboard__body__left__statistics__item">
            <div class="title">一般</div>
            <div class="value commonly">{{todoTotal.commonly}}</div>
          </div>
          <div
            class="dashboard__body__left__statistics__item"
            style="border: none"
          >
            <div class="title">超时</div>
            <div class="value overtime">{{todoTotal.overtime}}</div>
          </div>
        </div>
        <Todo class="dashboard__body__left__todo" />
        <Notice class="dashboard__body__left__notice" />
      </div>
      <div class="dashboard__body__right">
        <Airing class="dashboard__body__right__airing"/>
        <Shortcut class="dashboard__body__right__shortcut"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Notice from '../components/Notice.vue'
import Todo from '@/components/Todo.vue'
import Airing from '@/components/Airing.vue'
import Shortcut from '@/components/Shortcut.vue'
import { getUser } from '@/api/worksplace.js'
import { getTodoListTotal } from '@/api/todolist.js'
import { ref } from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const welcome = ref(store.state.welcome.replace('$username',store.state.user.username))
const postAndDep = ref(store.state.user.post +' | ' + store.state.user.dep)
const todoTotal = getTodoListTotal()
getUser().then(req=>{
  console.log(req)
}).catch(e => {
  console.log(e)
})

</script>

<style lang='scss' scoped>
@import '@/style/mixins.scss';
.dashboard {
  &__header {
    display: flex;
    &__userinfo {
      @include baseBroder;
      flex: 1;
      background-color: #04a999;
      padding: 0.2rem;
      color: #ffffff;
      &__title {
        font-size: 0.25rem;
        margin-bottom: 0.18rem;
        font-weight: 500;
      }
      &__depinfo {
        flex: 1;
        font-size: 0.1rem;
        color: #ffffff;
      }
    }
  }
  &__body {
    display: flex;
    margin-top: 0.15rem;
    &__left {
      width: 70%;
      margin-right: 0.15rem;
      &__statistics {
        display: flex;
        text-align: center;
        @include baseBroder;
        padding: 0.15rem;
        &__item {
          .title {
            color: #aaaaaa;
          }
          .value {
            margin-top: 0.02rem;
            font-size: 0.4rem;
          }
          border-right: 0.01px solid rgb(199, 199, 199);
          flex: 1;
        }
        .urgent {
          color: #d80e00;
        }
        .important {
          color: #d8ca00;
        }
        .commonly {
          color: #0077d8;
        }
        .overtime {
          color: #ad00d8;
        }
      }
      &__todo {
        @include baseBroder;
        margin-top: 0.15rem;
      }
      &__notice {
        @include baseBroder;
        margin-top: 0.15rem;
      }
    }
    &__right {
      width: 30%;
      &__airing {
        @include baseBroder;
      }
      &__shortcut {
        @include baseBroder;
        margin-top: 0.15rem;
      }
    }
  }
}
</style>
