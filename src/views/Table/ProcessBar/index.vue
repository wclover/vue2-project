<template>
  <el-table :data="tableData" border>
    <el-table-column width="50" align="center">
      <template slot-scope="{row}">
        <el-radio v-model="radio" :label="row.id" @change="selectionChange(row)">{{ '' }}</el-radio>
      </template>
    </el-table-column>
    <el-table-column label="客户" prop="client" min-width="100" />
    <el-table-column label="提单号" min-width="150" prop="id" />
    <el-table-column label="箱数" prop="packageQuantity" min-width="120" />
    <el-table-column label="包裹数" prop="parcelQuantity" min-width="120" />
    <el-table-column label="重量" prop="weight" min-width="120" />
    <el-table-column label="入库进度" width="250">
      <template slot-scope="{row}">
        <div class="info-underline" @click="openStockInDialog(row.id)">{{ row.stockInQuantity + '/' + row.packageQuantity }}</div>
        <div style="display: flex; align-items: center;">
          <offload-progress style="margin-right: 12px;" :process-list="row.offloadStockIn" :package-quantity="row.packageQuantity" :stock-in-quantity="row.stockInQuantity" />
          <el-button type="danger" size="mini" @click="offloadPushS4(row.id)">推送S4</el-button>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="清关进度" min-width="150">
      <template slot-scope="{row}">
        <div>{{ row.clearanceQuantity + '/' + row.parcelQuantity }}</div>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="getClearingPercentage(row.clearanceQuantity, row.parcelQuantity)" />
      </template>
    </el-table-column>
    <el-table-column label="出库进度" min-width="150">
      <template slot-scope="{row}">
        <div>{{ row.stockOutQuantity + '/' + row.packageQuantity }}</div>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="getClearingPercentage(row.stockOutQuantity, row.packageQuantity)" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import _ from 'lodash'
import OffloadProgress from '@/views/Table/ProcessBar/components/offloadProgress'
export default {
  name: 'ProcessBar',
  components: {OffloadProgress},
  data() {
    return {
      tableData: [{
        'createdAt': '2022-03-24T08:19:06.050Z',
        'updatedAt': '2022-03-25T03:11:22.947Z',
        'id': '381-38138238',
        'client': 'CNE',
        'landingAirport': 'MAD',
        'packageQuantity': 20,
        'parcelQuantity': 20,
        'weight': 33,
        'eta': '2022-01-13T07:16:55.000Z',
        'validatedAt': '2022-03-24T08:19:05.192Z',
        'clearedAt': null,
        'rcm': null,
        'noa': null,
        'status': 'CLEARING',
        'flightNumber': 'AF117',
        'uploadClearanceCsvAt': '2022-03-24T08:18:47.592Z',
        'etd': '2022-01-12T07:11:00.000Z',
        'ata': null,
        'departure': 'PVG',
        'arrival': 'MAD',
        'valueLevel': 'HIGH',
        'shipper': '4PX EXPRESS CO LTD',
        'comment': null,
        'priority': '{}',
        'terminal': 'AF',
        'nationality': 'CN',
        'originClearanceFileUrl': 'https://d33vf1y9r59iav.cloudfront.net/CNE/381-38138238.xlsx',
        'commandLabels': '{"SV"}',
        'clearancePackageQuantity': '20',
        'rcms': null,
        'clearanceFileVersion': '2021-08-SPAIN',
        'createdBy': 'xiaoming',
        'clearanceType': 'SPAIN',
        'chartered': false,
        'charterFlights': null,
        'uploadClearancePdfAt': '2022-03-24T08:17:43.362Z',
        'pushAt': '2022-03-24T16:32:28.712Z',
        'stockInAt': '2022-03-24T16:53:03.612Z',
        'stockOutAt': null,
        'clearanceStartedAt': null,
        'examQuantity': 0,
        'stockInQuantity': 20,
        'stockOutQuantity': 0,
        'clearanceQuantity': 10,
        'pushTimes': 6,
        'offloadStockIn': [
          {
            'id': 3,
            'createdAt': '2022-03-24T09:06:22.858Z',
            'updatedAt': '2022-03-24T09:06:22.858Z',
            'pushTimes': 1,
            'stockInQuantity': 2
          },
          {
            'id': 4,
            'createdAt': '2022-03-24T09:10:59.290Z',
            'updatedAt': '2022-03-24T09:10:59.290Z',
            'pushTimes': 2,
            'stockInQuantity': 5
          },
          {
            'id': 5,
            'createdAt': '2022-03-24T09:13:26.187Z',
            'updatedAt': '2022-03-24T09:13:47.855Z',
            'pushTimes': 3,
            'stockInQuantity': 11
          },
          {
            'id': 2,
            'createdAt': '2022-03-24T08:53:02.688Z',
            'updatedAt': '2022-03-24T08:53:02.688Z',
            'pushTimes': 0,
            'stockInQuantity': 2
          }
        ]
      }],
      radio: '',
      selectedTable: {}
    }
  },
  methods: {
    selectionChange(row) {
      this.selectedTable = row
    },
    getClearingPercentage(clearingData, parcelQuantity) {
      return _.round((clearingData / parcelQuantity * 100), 2)
    },
    openStockInDialog(id) {
      console.log(id)
    },
    offloadPushS4(id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>

</style>
