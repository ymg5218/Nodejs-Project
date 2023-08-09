<template>
    <div class="col-lg-12">
    <div class="card">
        <div class="card-body">
            <table class="table table-bordered">
                <tbody>
                <tr>
                    <th style="width: 80px">추천</th>
                    <th>제목</th>
                    <th style="width: 100px">작성자</th>
                    <th style="width: 250px">작성시간</th>
                    <th style="width: 100px">가격</th>
                </tr>
                <tr v-for="(board, idx) in list" :key="idx">
                    <td>{{ board.recommends }}</td>
                    <td><a v-on:click="fnView(`${board._id}`)">{{ board.title }}</a></td>
                    <td>{{ board.writer_nickname }}</td>
                    <td>{{ board.datetime }}</td>
                    <td>{{ board.price }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="card-footer">
        <c:if test="${account ne null }">
            <div class="float-right">
                <a href="./write"><button type="button" class="btn btn-success btn-flat"><i class="fa fa-list"></i> 글쓰기</button></a>
            </div>
        </c:if>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      keyword: this.$route.query.keyword,
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
    }
  },
    mounted() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      this.requestBody = {
        _id : this._id
      }

      this.$axios.get("http://localhost:3000/board/findAll", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        this.list = res.data
        console.log("완료되었음")
        console.log(this.list.length)
        console.log(this.list)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다. \n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnView(_id) {
      this.requestBody._id = _id
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },

    fnWrite() {
      this.$router.push({
        path: './write'
      })
    },

    fnPage(n) {
      if (this.page !== n) {
        this.page = n
        this.fnGetList()
      }
    },

    }
}
</script>