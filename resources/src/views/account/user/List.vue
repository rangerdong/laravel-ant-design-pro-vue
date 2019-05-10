<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="用户登录名或邮箱">
              <a-input v-model="queryParam.id" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="用户状态">
              <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                <a-select-option value="">全部</a-select-option>
                <a-select-option value="1">正常</a-select-option>
                <a-select-option value="0">禁用</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="!advanced && 8 || 24" :sm="24">
            <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

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
    <CreateUser ref="createModal"  @ok="handleOk" />
    <EditUser ref="editModal" @ok="handleOk" />
  </a-card>
</template>

<script>
  import moment from 'moment'
  import { STable } from '@/components'
  import { getUserList, delUser } from '@/api/user'
  import { parsePaginate} from "@/utils/helper";
  import CreateUser from './Create'
  import EditUser from './Edit'

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
    name: 'UserList',
    components: {
      CreateUser,
      EditUser,
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
            title: '用户登录名',
            dataIndex: 'username'
          },
          {
            title: '用户名',
            dataIndex: 'name'
          },
          {
            title: '邮箱',
            dataIndex: 'email'
          },
          {
            title: '状态',
            dataIndex: 'status',
            scopedSlots: { customRender: 'status' }
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
          return getUserList(queryParam)
                  .then(res => {
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
        delUser([record.id]).then(res => {
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
