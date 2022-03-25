<template>
  <div class="process_out">
    <span v-for="(item, index) in list" :key="item.id" class="process_in" :style="{backgroundColor: colorMap[index], width: getWidth(item.stockInQuantity)}">
      <span v-if="index === list.length - 1" class="process_percentage">{{ getWidth(stockInQuantity) }}</span>
    </span>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'OffloadProgress',
  props: {
    processList: {
      type: Array,
      default: () => []
    },
    packageQuantity: {
      type: Number,
      default: () => 0
    },
    stockInQuantity: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    colorMap() {
      return ['#409eff', '#90CAF9', '#42A5F5', '#1976D2', '#0D47A1']
    },
    list() {
      return _.sortBy(this.processList, ['createdAt'])
    }
  },
  methods: {
    getWidth(stockInQuantity) {
      return _.round(stockInQuantity / this.packageQuantity * 100) + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
.process_out {
  width: 100%;
  height: 20px;
  background-color: #e6ebf5;
  border-radius: 100px;
  display: flex;
  overflow: hidden;
  .process_in {
    height: 100%;
    &:last-child {
      white-space: nowrap;
      text-align: right;
      border-radius: 0 100px 100px 0;
    }
  }
  .process_percentage {
    color: #fff;
    font-size: 12px;
    margin: 0 5px;
    vertical-align: bottom;
    float: right;
  }
}
</style>
