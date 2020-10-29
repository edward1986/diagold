<template>
    <div class="card">
        <div class="card-header">
            <div class="clearfix">
                <div class="float-sm-left" style="margin-bottom: 9px;" v-if="onCreateName && showCreate"><el-button size="mini"  type="primary" @click="$router.push({ name: onCreateName, params: onCreateParams})">{{createName}}</el-button>
                <slot></slot>
                </div>
                <div class="float-sm-right"><el-input v-model="search" @input="search_" size="mini" placeholder="Type to search"/></div>
            </div>


        </div>

        <div class="card-body">
        <el-table :data="data.data"
                  @sort-change="handleSortChange"
                  v-loading="loading"
                  style="width: 100%">
            <slot></slot>
            <el-table-column
                    v-for="(column, index, key) in columns"
                    :key="`${index}-${key}-${column.prop}-${column.label}`"
                    :sortable="column.sort ? true : false"

                    :label="column.label"
                    :prop="column.prop">
            </el-table-column>

            <el-table-column v-if="(can[canUpdate] || can[canDelete]) && (showEdit || showDelete)" align="right">
                <template slot-scope="scope">
                    <div class="btn-group btn-group-sm">
                        <button @click="handleEdit(scope.$index, scope.row)" v-if="showEdit || can[canUpdate] ? can[canUpdate] : false  " type="button" class="btn btn-success"><div :class="isMobile ? 'fal fa-edit' : ''">{{isMobile ? '' : 'Edit'}}</div></button>
                        <button @click="handleDelete(scope.$index, scope.row)" v-if="showDelete || can[canDelete] ? can[canDelete] : false"type="button" class="btn btn-danger"><div :class="isMobile ? 'fal fa-trash-alt' : ''">{{isMobile? '' : 'Delete'}}</div></button>
                    </div>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination
                @current-change="handleCurrentChange"
                :current-page="data.current_page"
                :page-size="data.per_page"
                :pager-count="isMobile ? 3 : 7"
                layout="total, prev, pager, next"
                :total="data.total">
        </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'grid',
        props: {
            header: {
                type: String,
                default: ''
            },
            canDelete: String,
            canUpdate: String,
            createName: String,
            onCreateName: String,
            onCreateParams: {
                default: ()=>({create: 1}),
                type: Object,
                required: false
            },
            onEditName: {
                type: String,
                required: true
            },
            onDelete: {
                type: String,
                required: true
            },
            data: {},
            columns: Array,
            showEdit:  {
                default: true,
                type: Boolean},
            showCreate:  {
                default: true,
                type: Boolean},
            showDelete:  {
                default: true,
                type: Boolean},
        },
        computed:{
            can(){
                return this.$store.getters.CAN},
            isMobile(){
                return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
            }
        },
        data(){
            var vm = this
            return {
                search: vm.$route.query.search ? vm.$route.query.search : '',
                loading: false
            }
        },
        methods: {
            handleSortChange(val){
                var vm = this;
                var option = _.clone(vm.$route.query)
                option.column = val.prop;
                option.direction = val.order == 'ascending' ? 'asc' : 'desc';
                vm.onRouteChange(option)
            },
            handleCurrentChange(val) {
                var vm = this;
                var option = _.clone(vm.$route.query)
                option.page = val;
                vm.onRouteChange(option)
            },
            onRouteChange(option){
                var vm = this
                vm.loading = true
                vm.$router.push({
                    path: `${vm.$route.path}`,
                    query: option}, function () {
                    vm.loading = false
                }, function () {
                    vm.loading = false
                });
            },
            search_(){
                var vm = this
                vm.onSearch(vm.search, vm)
            },
            onSearch: _.debounce(function (query, vm) {
                var vm = this;
                vm.loading = true
                vm.$router.push({
                    path: `${vm.$route.path}`,
                    query: {search: query}
                }, function () {
                    vm.loading = false
                }, function () {
                    vm.loading = false
                });
            }, 500),
            handleEdit(index, row) {
                var vm = this
                vm.$router.push({name: vm.onEditName, params: {id: row.id}})
            },
            handleDelete(index, row) {
                var vm = this
                vm.loading = true
                vm.$swal({
                    title: 'Are you sure?',
                    text: "This will permanently delete the file. Continue?",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then((result) => {
                    if(result.value){
                        axios.post(`${vm.onDelete ? vm.onDelete : '/api/agencies'}/${row.id}`)
                        vm.$emit('delete', index)
                        vm.$swal('', 'Delete completed', 'success')
                    }
                    vm.loading = false
                }).catch(() => {
                    vm.$swal('', 'Delete canceled', 'info')
                    vm.loading = false
                });
            }
        }
    }
</script>
