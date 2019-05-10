<template>
  <a-card :bordered="false">
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.createModal.add()">新建</a-button>
      <a-button type="dashed" @click="tableOption">{{ optionAlertShow && '关闭' || '开启' }} alert</a-button>
      <a-dropdown v-action:edit v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1"><a-icon type="delete" />删除</a-menu-item>
          <!-- lock | unlock -->
          <a-menu-item key="2"><a-icon type="lock" />锁定</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          批量操作 <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>

    <s-table
            ref="table"
            size="default"
            rowKey="key"
            :columns="columns"
            :data="loadData"
            :alert="options.alert"
            :rowSelection="options.rowSelection"
    >
      <span slot="status" slot-scope="text">
        <a-badge :status="text | statusTypeFilter" :text="text | statusFilter" />
      </span>

      <span slot="action" slot-scope="text, record">
        <template>
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="handleDel(record)" okText="是" cancelText="否">
            <a href="#">删除</a>
          </a-popconfirm>
        </template>
      </span>
    </s-table>
    <Create ref="createModal"  @ok="handleOk" />
    <Edit ref="editModal" @ok="handleOk" />
  </a-card>
</template>

<script>
  import moment from 'moment'
  import { STable } from '@/components'
  import { getList } from '@/api/permission'
  import { parsePaginate} from "@/utils/helper";
  import Create from './Create'
  import Edit from './Edit'

  const statusMap = {
    0: {
      status: 'error',
      text: '禁用'
    },
    1: {
      status: 'success',
      text: '正常'
    }
  }

  export default {
    name: 'RoleList',
    components: {
      Create,
      Edit,
      STable,
    },
    data () {
      return {
        mdl: {},
        // 高级搜索 展开/关闭
        advanced: false,
        // 查询参数
        queryParam: {},
        // 表头
        columns: [
          {
            title: '#',
            dataIndex: 'id',
          },
          {
            title: '权限标识',
            dataIndex: 'identify'
          },
          {
            title: '权限名称',
            dataIndex: 'title'
          },
          {
            title: 'url地址',
            dataIndex: 'path'
          },
          {
            title: '排序',
            dataIndex: 'order'
          },
          {
            title: '创建时间',
            dataIndex: 'created_at',
            sorter: true
          },
          {
            title: '操作',
            dataIndex: 'action',
            width: '150px',
            scopedSlots: { customRender: 'action' }
          }
        ],
        // 加载数据方法 必须为 Promise 对象
        loadData: parameter => {
          let queryParam = Object.assign(parameter, this.queryParam);
          return getList(queryParam)
                  .then(res => {
                    console.log(res);
                    // return res.result;
                    return parsePaginate(res.data);
                  })
        },
        selectedRowKeys: [],
        selectedRows: [],

        // custom table alert & rowSelection
        options: {
          alert: { show: true, clear: () => { this.selectedRowKeys = [] } },
          rowSelection: {
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange
          }
        },
        optionAlertShow: false
      }
    },
    filters: {
      statusFilter (type) {
        return statusMap[type].text
      },
      statusTypeFilter (type) {
        return statusMap[type].status
      }
    },
    created () {
      this.tableOption()
    },
    methods: {
      tableOption () {
        if (!this.optionAlertShow) {
          this.options = {
            alert: { show: true, clear: () => { this.selectedRowKeys = [] } },
            rowSelection: {
              selectedRowKeys: this.selectedRowKeys,
              onChange: this.onSelectChange
            }
          }
          this.optionAlertShow = true
        } else {
          this.options = {
            alert: false,
            rowSelection: null
          }
          this.optionAlertShow = false
        }
      },

      handleEdit (record) {
        this.$refs.editModal.init(record.id)
      },
      handleOk (values) {
        this.$refs.table.refresh()
      },
      handleDel(record) {
        let _this = this;
        delModel([record.id]).then(res => {
          if (res.code == 200) {
            _this.$message.info(`删除成功`);
            this.$refs.table.refresh();
          } else {
            _this.$message.error(`删除失败!` + res.message);
          }
        })
      },
      onSelectChange (selectedRowKeys, selectedRows) {
        this.selectedRowKeys = selectedRowKeys
        this.selectedRows = selectedRows
      },
      toggleAdvanced () {
        this.advanced = !this.advanced
      },
      resetSearchForm () {
        this.queryParam = {
          date: moment(new Date())
        }
      }
    }
  }
</script>
