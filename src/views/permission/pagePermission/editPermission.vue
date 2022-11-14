<template>
    <el-dialog title="编辑权限" :visible.sync="dialogVisible" width="660px" height="432px">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button
                type="text"
                size="mini"
                @click="() => append(data)">
                Append
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)">
                Delete
              </el-button>
            </span>
          </span>
        </el-tree>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" >取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">保存</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false,
            data:[
              {
              id: 1,
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                  id: 9,
                  label: '三级 1-1-1'
                }, {
                  id: 10,
                  label: '三级 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }, {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
              }]
            }]
        }
    },
    computed:{
    },
    methods:{
        open(){
            this.dialogVisible = true
        },
       append(data) {
          const newChild = { id: id++, label: 'testtest', children: [] };
          if (!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newChild);
        },

        remove(node, data) {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        },
      
    }
}
</script>

<style lang='less' scoped>
.check-box{
    display: block;
}
</style>