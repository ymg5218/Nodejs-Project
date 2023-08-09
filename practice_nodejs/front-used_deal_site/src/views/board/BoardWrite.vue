<template>
    <div class="col-lg-12">
           <div class="card-body">
               <div class="form-group">
                   <label for="title">제목</label>
                   <input class="form-control" id="title" name="title" v-model="title" placeholder="제목을 입력해주세요">
               </div>
               <div class="form-group">
                   <label for="content">내용</label>
                   <textarea class="form-control" id="content" name="content" v-model="content" rows="30"
                             placeholder="내용을 입력해주세요" style="resize: none;"></textarea>
               </div>
               <div class="form-group">
                   <label for="content">가격</label>
                   <input class="form-control" id="price" name="price" v-model="price" rows="30"
                             placeholder="내용을 입력해주세요" style="resize: none;"/>
               </div>
               <div class="form-group">
                   <label for="writer">작성자 : {{ writer }}</label>
                   <input class="form-control" id="writer" name="writer" readonly>
               </div>
           </div>
          <div class="card-footer">
              <button type="button" class="btn btn-primary" v-on:click="fnList"><i class="fa fa-list"></i> 목록</button>
              <div class="float-right">
                  <button type="reset" class="btn btn-warning"><i class="fa fa-reply"></i> 초기화</button>
                  <button type="submit" v-on:click="fnSave" class="btn btn-success"><i class="fa fa-save"></i> 저장</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() { //변수생성
    return {
        requestBody: this.$route.query,
        board_id : this.$route.query._id,
        
        title: '',
        writer: '',
        content: '',
        datetime: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      if (this.idx !== undefined) {
        this.$axios.get("http://localhost:3000/board/findOne", {
            _id: this.requestBody._id
        }).then((res) => {
          this.title = res.data.title
          this.writer = res.data.writer_nickname
          this.content = res.data.content
          this.datetime = res.data.datetime
          console.log(this.writer)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnList() {
      delete this.requestBody.idx
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnView(board_id) {
      this.requestBody.id = board_id
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    async fnSave() {
      let form = {
        "title": this.title,
        "content": this.content,
        "writer_id": "64be2956b94ac392a1efee27",
        "price" : this.price
      }


      console.log("헬로우")
      if (this.requestBody._id === undefined) {
        //INSERT
        
        await this.$axios.post("http://localhost:3000/board/create", form)
        .then((res) => {
            alert('글이 저장되었습니다.')
            console.log(res.data._id)
        //   this.fnView(res.data.board_id)
            this.$router.push({
            path: "./detail",
            query: {
                _id : res.data._id
            } 
        })
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      } else {
        //UPDATE
        await this.$axios.post("http://localhost:3000/board/update", {
        "_id" : this.requestBody._id,
        "title": this.title,
        "content": this.content,
        "price" : this.price
      })
        .then((res) => {
            alert('글이 저장되었습니다.')
            console.log(res)
            this.$router.push({
                path: "./detail",
                query: {
                    _id : res.data._board._id
                } 
        })
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }
    }
  }
}
</script>
<style scoped>

</style>